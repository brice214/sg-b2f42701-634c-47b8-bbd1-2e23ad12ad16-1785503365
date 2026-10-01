import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import formidable from "formidable";
import type { File } from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

type ResponseData = {
  message: string;
  success: boolean;
};

const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ALLOWED_EXTENSIONS = [".pdf", ".docx"];
const MAX_FILE_SIZE = 10 * 1024 * 1024;

function getFieldValue(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY not configured");
    return false;
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success && data.score >= 0.5;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

function parseForm(
  req: NextApiRequest
): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
  const form = formidable({
    maxFileSize: MAX_FILE_SIZE,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ fields, files });
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Méthode non autorisée",
      success: false,
    });
  }

  let attachmentPath: string | null = null;

  try {
    const { fields, files } = await parseForm(req);

    const firstName = getFieldValue(fields.firstName);
    const lastName = getFieldValue(fields.lastName);
    const email = getFieldValue(fields.email);
    const phone = getFieldValue(fields.phone);
    const subject = getFieldValue(fields.subject);
    const message = getFieldValue(fields.message);
    const recaptchaToken = getFieldValue(fields.recaptchaToken);

    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({
        message: "Tous les champs obligatoires doivent être remplis",
        success: false,
      });
    }

    if (!recaptchaToken) {
      return res.status(400).json({
        message: "Vérification de sécurité manquante",
        success: false,
      });
    }

    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
      return res.status(400).json({
        message: "Vérification de sécurité échouée. Veuillez réessayer.",
        success: false,
      });
    }

    let attachment: { filename: string; path: string } | null = null;
    const uploadedFileRaw = files.cahierDesCharges;
    const uploadedFile: File | undefined = Array.isArray(uploadedFileRaw)
      ? uploadedFileRaw[0]
      : (uploadedFileRaw as File | undefined);

    if (uploadedFile && uploadedFile.size > 0) {
      const originalName = uploadedFile.originalFilename || "cahier-des-charges";
      const extension = originalName.slice(originalName.lastIndexOf(".")).toLowerCase();
      const isValidType =
        ALLOWED_MIME_TYPES.includes(uploadedFile.mimetype || "") ||
        ALLOWED_EXTENSIONS.includes(extension);

      if (!isValidType) {
        fs.unlink(uploadedFile.filepath, () => {});
        return res.status(400).json({
          message: "Le cahier des charges doit être au format PDF ou DOCX.",
          success: false,
        });
      }

      if (uploadedFile.size > MAX_FILE_SIZE) {
        fs.unlink(uploadedFile.filepath, () => {});
        return res.status(400).json({
          message: "Le cahier des charges ne doit pas dépasser 10 Mo.",
          success: false,
        });
      }

      attachmentPath = uploadedFile.filepath;
      attachment = { filename: originalName, path: uploadedFile.filepath };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const htmlMessage = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #4b5563; display: block; margin-bottom: 5px; }
          .value { color: #1f2937; }
          .message-box { background: white; padding: 15px; border-left: 4px solid #667eea; margin-top: 10px; }
          .footer { background: #1f2937; color: #9ca3af; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">📧 Nouveau message de contact</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">XETA-DIGITAL CORP - Site Web</p>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">👤 Nom complet:</span>
              <span class="value">${firstName} ${lastName}</span>
            </div>
            <div class="field">
              <span class="label">📧 Email:</span>
              <span class="value"><a href="mailto:${email}">${email}</a></span>
            </div>
            <div class="field">
              <span class="label">📱 Téléphone:</span>
              <span class="value">${phone || "Non renseigné"}</span>
            </div>
            <div class="field">
              <span class="label">📋 Sujet:</span>
              <span class="value">${subject}</span>
            </div>
            <div class="field">
              <span class="label">💬 Message:</span>
              <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
            </div>
            ${
              attachment
                ? `<div class="field"><span class="label">📎 Pièce jointe:</span><span class="value">${attachment.filename}</span></div>`
                : ""
            }
          </div>
          <div class="footer">
            <p style="margin: 0;">Ce message a été envoyé depuis le formulaire de contact de xeta-digital.com</p>
            <p style="margin: 5px 0 0 0;">© ${new Date().getFullYear()} XETA-DIGITAL CORP - Tous droits réservés</p>
          </div>
        </div>
      </body>
    </html>
  `;

    const textMessage = `
Nouveau message de contact depuis XETA-DIGITAL CORP

Nom: ${firstName} ${lastName}
Email: ${email}
Téléphone: ${phone || "Non renseigné"}
Sujet: ${subject}
${attachment ? `Pièce jointe: ${attachment.filename}\n` : ""}
Message:
${message}

---
Ce message a été envoyé depuis le formulaire de contact de xeta-digital.com
  `.trim();

    await transporter.sendMail({
      from: `"XETA-DIGITAL CORP - Contact" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: "contact@xeta-digital.com",
      replyTo: email,
      subject: `[XETA-DIGITAL CORP] ${subject}`,
      text: textMessage,
      html: htmlMessage,
      attachments: attachment ? [attachment] : undefined,
    });

    if (attachmentPath) {
      fs.unlink(attachmentPath, () => {});
    }

    return res.status(200).json({
      message: "Message envoyé avec succès",
      success: true,
    });
  } catch (error) {
    console.error("Erreur d'envoi email:", error);
    if (attachmentPath) {
      fs.unlink(attachmentPath, () => {});
    }
    return res.status(500).json({
      message: "Erreur lors de l'envoi du message. Veuillez réessayer.",
      success: false,
    });
  }
}