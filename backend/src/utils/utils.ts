import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  to,
  subject,
  html,
  replyTo,
}: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  try {
    await resend.emails.send({
      from: "no-reply@marmo.org",
      to,
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    });
    return true;
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return false;
  }

  
}
console.log("Resultado:", sendEmail);