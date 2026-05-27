import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, budget, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios ausentes.' },
        { status: 400 }
      )
    }

    const webhookUrl = process.env.SHEET_WEBHOOK_URL
    if (!webhookUrl) {
      console.error('[contact] SHEET_WEBHOOK_URL não configurada')
      return NextResponse.json(
        { error: 'Configuração do servidor ausente.' },
        { status: 500 }
      )
    }

    /* Envia para o Google Apps Script que grava na planilha */
    const sheetRes = await fetch(webhookUrl, {
      method:  'POST',
      headers: { 'Content-Type': 'text/plain' }, // Apps Script lê via e.postData.contents
      body:    JSON.stringify({ name, email, phone, service, budget, message }),
      redirect: 'follow',
    })

    if (!sheetRes.ok) {
      const text = await sheetRes.text()
      throw new Error(`Sheet webhook retornou ${sheetRes.status}: ${text}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[contact route]', error)
    return NextResponse.json(
      { error: 'Erro interno ao registrar contato.' },
      { status: 500 }
    )
  }
}
