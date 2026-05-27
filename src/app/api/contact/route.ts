import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, budget, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios ausentes.' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'KodaForge Site <onboarding@resend.dev>',
      to: ['kodaforge2026@gmail.com'],
      replyTo: email,
      subject: `📬 Novo contato — ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head><meta charset="UTF-8" /></head>
        <body style="margin:0;padding:0;background:#f4f4f8;font-family:Inter,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f8;padding:40px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0"
                  style="background:#0d1235;border-radius:16px;overflow:hidden;border:1px solid rgba(139,92,246,.3);">

                  <!-- Header -->
                  <tr>
                    <td style="background:linear-gradient(135deg,#3730a3,#7c3aed);padding:32px 40px;text-align:center;">
                      <h1 style="color:#fff;font-size:24px;margin:0;font-weight:800;letter-spacing:-0.5px;">
                        KodaForge
                      </h1>
                      <p style="color:rgba(255,255,255,.7);margin:6px 0 0;font-size:13px;">
                        Novo contato pelo site
                      </p>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:36px 40px;">

                      <h2 style="color:#a855f7;font-size:18px;margin:0 0 24px;font-weight:700;">
                        📋 Dados do lead
                      </h2>

                      <!-- Fields -->
                      ${row('👤 Nome',       name)}
                      ${row('📧 E-mail',     `<a href="mailto:${email}" style="color:#818cf8;text-decoration:none;">${email}</a>`)}
                      ${row('💬 WhatsApp',   phone   || '<span style="color:#4a5568">Não informado</span>')}
                      ${row('🔧 Serviço',    service || '<span style="color:#4a5568">Não informado</span>')}
                      ${row('💰 Orçamento',  budget  || '<span style="color:#4a5568">Não informado</span>')}

                      <!-- Message -->
                      <div style="margin-top:28px;padding:20px;background:rgba(109,40,217,.12);
                                  border-left:3px solid #7c3aed;border-radius:8px;">
                        <p style="color:#94a3b8;font-size:12px;margin:0 0 8px;text-transform:uppercase;
                                  letter-spacing:.06em;font-weight:600;">
                          💬 Mensagem
                        </p>
                        <p style="color:#e2e8f0;font-size:15px;margin:0;line-height:1.7;">
                          ${message.replace(/\n/g, '<br/>')}
                        </p>
                      </div>

                      <!-- CTA -->
                      <div style="margin-top:32px;text-align:center;">
                        <a href="https://wa.me/5542991250274?text=Ol%C3%A1%20${encodeURIComponent(name)}%2C%20vi%20sua%20mensagem%20no%20site%20da%20KodaForge!"
                           style="display:inline-block;background:linear-gradient(135deg,#6d28d9,#7c3aed);
                                  color:#fff;padding:14px 32px;border-radius:10px;text-decoration:none;
                                  font-weight:700;font-size:14px;">
                          Responder no WhatsApp
                        </a>
                      </div>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:rgba(0,0,0,.2);padding:20px 40px;text-align:center;
                                border-top:1px solid rgba(139,92,246,.15);">
                      <p style="color:#4a5568;font-size:12px;margin:0;">
                        Mensagem enviada pelo formulário de contato do site KodaForge
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[contact route]', error)
    return NextResponse.json(
      { error: 'Erro interno ao enviar e-mail.' },
      { status: 500 }
    )
  }
}

/* helper para linhas da tabela */
function row(label: string, value: string) {
  return `
    <div style="display:flex;padding:10px 0;border-bottom:1px solid rgba(139,92,246,.1);">
      <span style="color:#64748b;font-size:13px;min-width:120px;font-weight:600;">${label}</span>
      <span style="color:#e2e8f0;font-size:14px;flex:1;">${value}</span>
    </div>`
}
