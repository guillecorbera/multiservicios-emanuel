import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, phone, service, message, captcha, captchaAnswer } =
      data;

    // Validaciones básicas
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Faltan campos obligatorios",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validación del captcha
    if (!captcha || !captchaAnswer || parseInt(captcha) !== captchaAnswer) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Verificación de captcha incorrecta",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Email inválido",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Configurar transporter de Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER, // Tu email
        pass: process.env.SMTP_PASS, // Tu contraseña de aplicación
      },
    });

    // Definir el contenido del email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `Nuevo contacto desde la web - ${service || "Consulta general"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Nuevo mensaje de contacto
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Información del contacto:</h3>
            
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ""}
            ${
              service
                ? `<p><strong>Tipo de servicio:</strong> ${service}</p>`
                : ""
            }
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Mensaje:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message.replace(
              /\n/g,
              "<br>"
            )}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; font-size: 14px; color: #92400e;">
              <strong>Recordatorio:</strong> Responde a este email lo antes posible para mantener una buena atención al cliente.
            </p>
          </div>
        </div>
      `,
      // Email de respuesta automática al cliente
      replyTo: email,
    };

    // Email de confirmación al cliente
    const confirmationMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Confirmación de recepción - Multiservicios Emanuel",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb; text-align: center;">Multiservicios Emanuel</h2>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
            <h3 style="color: #1e40af; margin-top: 0;">¡Gracias por contactarnos!</h3>
            <p style="color: #374151;">Hola <strong>${name}</strong>,</p>
            <p style="color: #374151;">
              Hemos recibido tu mensaje correctamente y nos pondremos en contacto contigo lo antes posible.
            </p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h4 style="color: #374151;">Resumen de tu consulta:</h4>
            ${
              service
                ? `<p><strong>Servicio solicitado:</strong> ${service}</p>`
                : ""
            }
            <p><strong>Mensaje:</strong></p>
            <p style="background-color: #f9fafb; padding: 10px; border-radius: 4px; color: #4b5563;">
              ${message.replace(/\n/g, "<br>")}
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f8fafc; border-radius: 8px;">
            <p style="margin: 0; color: #6b7280;">
              Si tienes alguna pregunta urgente, no dudes en llamarnos:<br>
              <strong style="color: #2563eb; font-size: 18px;">+34 123 456 789</strong>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 15px; font-size: 12px; color: #9ca3af;">
            <p>Este es un email automático, por favor no respondas a esta dirección.</p>
          </div>
        </div>
      `,
    };

    // Enviar ambos emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationMailOptions);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email enviado correctamente",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error al enviar email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Error interno del servidor",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
