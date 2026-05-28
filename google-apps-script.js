// Cole este código no Google Apps Script (script.google.com)
// Depois publique como Web App: "Execute as: Me" e "Who has access: Anyone"
// Copie a URL gerada e cole em .env.local como SHEET_WEBHOOK_URL

const SHEET_NAME = 'Contatos'

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)

    const ss = SpreadsheetApp.getActiveSpreadsheet()
    let sheet = ss.getSheetByName(SHEET_NAME)

    // Cria a aba e o cabeçalho se ainda não existir
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME)
      sheet.appendRow([
        'Data/Hora',
        'Nome',
        'Empresa',
        'E-mail',
        'WhatsApp',
        'Serviço',
        'Orçamento',
        'Mensagem',
      ])
      // Formata o cabeçalho
      const header = sheet.getRange(1, 1, 1, 8)
      header.setFontWeight('bold')
      header.setBackground('#1e293b')
      header.setFontColor('#ffffff')
      sheet.setFrozenRows(1)
    }

    const now = new Date()
    const timestamp = Utilities.formatDate(now, Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm:ss')

    sheet.appendRow([
      timestamp,
      data.name    || '',
      data.company || '',
      data.email   || '',
      data.phone   || '',
      data.service || '',
      data.budget  || '',
      data.message || '',
    ])

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON)

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}
