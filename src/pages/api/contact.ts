import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ResponseData = {
  message: string;
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ 
      message: "Méthode non autorisée", 
      success: false 
    });
  }

  const { firstName, lastName, email, phone, subject, message } = req.body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({ 
      message: "Tous les champs obligatoires doivent être remplis", 
      success: false 
    });
  }

  // Configuration du transporteur SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true pour port 465, false pour autres ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Construction du message HTML
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
          </div>
          <div class="footer">
            <p style="margin: 0;">Ce message a été envoyé depuis le formulaire de contact de xeta-digital.com</p>
            <p style="margin: 5px 0 0 0;">© ${new Date().getFullYear()} XETA-DIGITAL CORP - Tous droits réservés</p>
          </div>
        </div>
      </body>
    </html>
  `;

  // Version texte brut pour les clients email qui ne supportent pas HTML
  const textMessage = `
Nouveau message de contact depuis XETA-DIGITAL CORP

Nom: ${firstName} ${lastName}
Email: ${email}
Téléphone: ${phone || "Non renseigné"}
Sujet: ${subject}

Message:
${message}

---
Ce message a été envoyé depuis le formulaire de contact de xeta-digital.com
  `.trim();

  const subjectEmail = `Nouveau message de contact depuis XETA-DIGITAL CORP`;

  try {
    // Envoi de l'email
    await transporter.sendMail({
      from: `"XETA-DIGITAL CORP - Contact" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: "contact@xeta-digital.com",
      replyTo: email, // Pour répondre directement au client
      subject: `[XETA-DIGITAL CORP] ${subject}`,
      text: textMessage,
      html: htmlMessage,
    });

    return res.status(200).json({ 
      message: "Message envoyé avec succès", 
      success: true 
    });
  } catch (error) {
    console.error("Erreur d'envoi email:", error);
    return res.status(500).json({ 
      message: "Erreur lors de l'envoi du message. Veuillez réessayer.", 
      success: false 
    });
  }
}