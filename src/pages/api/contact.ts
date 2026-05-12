import type { NextApiRequest, NextApiResponse } from "next";

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

  const emailBody = `
Nouveau message de contact depuis XETA Digital

Nom: ${firstName} ${lastName}
Email: ${email}
Téléphone: ${phone || "Non renseigné"}
Sujet: ${subject}

Message:
${message}
  `.trim();

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || "",
        from_name: `${firstName} ${lastName}`,
        email: email,
        subject: `[XETA Digital] ${subject}`,
        message: emailBody,
        to_email: "contact@xeta-digital.com",
      }),
    });

    if (response.ok) {
      return res.status(200).json({ 
        message: "Message envoyé avec succès", 
        success: true 
      });
    } else {
      return res.status(500).json({ 
        message: "Erreur lors de l'envoi du message", 
        success: false 
      });
    }
  } catch (error) {
    console.error("Erreur d'envoi:", error);
    return res.status(500).json({ 
      message: "Erreur serveur lors de l'envoi", 
      success: false 
    });
  }
}