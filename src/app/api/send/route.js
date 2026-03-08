import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, asunto, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Web Jerónimo Ciapparelli <onboarding@resend.dev>',
      to: ['inspiracion@jeronimociapparelli.com'],
      subject: `Nuevo mensaje: ${asunto}`,
      replyTo: email,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 });
  }
}