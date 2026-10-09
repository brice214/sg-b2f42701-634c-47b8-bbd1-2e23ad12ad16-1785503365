import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ResponseData = {
  message: string;
  success: boolean;
};

interface OrderBody {
  planName: string;
  planPrice: number;
  planPeriod: string;
  planUsers: string;
  wantsDomain: boolean;
  domainName: string;
  domainExtension: string;
  domainPrice: number;
  totalPrice: number;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  recaptchaToken: string;
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
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success && data.score >= 0.5;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

function formatPrice(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée", success: false });
  }

  try {
    const body = req.body as OrderBody;
    const {
      planName,
      planPrice,
      planPeriod,
      planUsers,
      wantsDomain,
      domainName,
      domainExtension,
      domainPrice,
      totalPrice,
      firstName,
      lastName,
      company,
      email,
      phone,
      recaptchaToken,
    } = body;

    if (!planName || !firstName || !lastName || !email || !phone) {
      return res.status(400).json({
        message: "Tous les champs obligatoires doivent être remplis",
        success: false,
      });
    }

    if (wantsDomain && !domainName) {
      return res.status(400).json({
        message: "Veuillez indiquer le nom de domaine souhaité",
        success: false,
      });
    }

    if (!recaptchaToken) {
      return res.status(400).json({ message: "Vérification de sécurité manquante", success: false });
    }

    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
      return res.status(400).json({
        message: "Vérification de sécurité échouée. Veuillez réessayer.",
        success: false,
      });
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

    const fullDomain = wantsDomain ? `${domainName}${domainExtension.toLowerCase()}` : "";

    const htmlMessage = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0095DA 0%, #006699 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
          .field { margin-bottom: 16px; }
          .label { font-weight: bold; color: #4b5563; display: block; margin-bottom: 5px; }
          .value { color: #1f2937; }
          .total-box { background: #e6f4fb; padding: 15px; border-left: 4px solid #0095DA; margin-top: 15px; font-size: 18px; font-weight: bold; }
          .footer { background: #1f2937; color: #9ca3af; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">📧 Nouvelle commande de forfait email</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">XETA-DIGITAL CORP - Site Web</p>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">📦 Forfait sélectionné:</span>
              <span class="value">${planName} (${planUsers || "N/A"}) - ${formatPrice(planPrice)} FCFA ${planPeriod || ""}</span>
            </div>
            <div class="field">
              <span class="label">🌐 Nom de domaine souhaité:</span>
              <span class="value">${wantsDomain ? `${fullDomain} - ${formatPrice(domainPrice)} FCFA` : "Non"}</span>
            </div>
            <div class="total-box">
              💰 Montant global: ${formatPrice(totalPrice)} FCFA
            </div>
            <div class="field" style="margin-top: 20px;">
              <span class="label">👤 Nom complet:</span>
              <span class="value">${firstName} ${lastName}</span>
            </div>
            <div class="field">
              <span class="label">🏢 Entreprise:</span>
              <span class="value">${company || "Non renseigné"}</span>
            </div>
            <div class="field">
              <span class="label">📧 Email:</span>
              <span class="value"><a href="mailto:${email}">${email}</a></span>
            </div>
            <div class="field">
              <span class="label">📱 Téléphone:</span>
              <span class="value">${phone}</span>
            </div>
          </div>
          <div class="footer">
            <p style="margin: 0;">Commande envoyée depuis xeta-digital.com</p>
            <p style="margin: 5px 0 0 0;">© ${new Date().getFullYear()} XETA-DIGITAL CORP - Tous droits réservés</p>
          </div>
        </div>
      </body>
    </html>
  `;

    const textMessage = `
Nouvelle commande de forfait email - XETA-DIGITAL CORP

Forfait: ${planName} (${planUsers || "N/A"}) - ${formatPrice(planPrice)} FCFA ${planPeriod || ""}
Nom de domaine: ${wantsDomain ? `${fullDomain} - ${formatPrice(domainPrice)} FCFA` : "Non"}
Montant global: ${formatPrice(totalPrice)} FCFA

Nom: ${firstName} ${lastName}
Entreprise: ${company || "Non renseigné"}
Email: ${email}
Téléphone: ${phone}
  `.trim();

    await transporter.sendMail({
      from: `"XETA-DIGITAL CORP - Commandes" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: "contact@xeta-digital.com",
      replyTo: email,
      subject: `[Commande] Forfait ${planName}${wantsDomain ? " + domaine" : ""} - ${firstName} ${lastName}`,
      text: textMessage,
      html: htmlMessage,
    });

    return res.status(200).json({ message: "Commande envoyée avec succès", success: true });
  } catch (error) {
    console.error("Erreur d'envoi de commande:", error);
    return res.status(500).json({
      message: "Erreur lors de l'envoi de la commande. Veuillez réessayer.",
      success: false,
    });
  }
}