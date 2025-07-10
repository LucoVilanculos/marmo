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
      from: "Marmo <info@binario.co.mz>>",
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


export async function Email(destinatary:string) {
  const { data, error } = await resend.emails.send({
    from: "Marmo <info@binario.co.mz>",
    to: [destinatary],
    subject: "Cadastro na Marmo",
    html: "<strong>Bem vindo a Marmo</strong><p>Obrigado por se cadastrar como voluntário.</p>",
  });

  if (error) {
   throw new Error(`Failed to send email: ${error.message}`);
  }

  return data;
}