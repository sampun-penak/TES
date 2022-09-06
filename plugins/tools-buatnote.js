let handler = async(m, {conn, command, usedPrefix, text}) => {
  let fail = 'format salah, example: ' +usedPrefix+command+ ' Aine|1. Masak'
  global.db.data.users[m.sender].note = global.db.data.users[m.sender].note || []
  let note = global.db.data.users[m.sender].note
  let split = text.split('|')
  let title = split[0]
  let isi = split[1]
  if (note.includes(title)) return m.reply('Judul tidak tersedia!\n\nAlasan: Sudah digunakan')
  if (!title || !isi) return m.reply(fail)
  let cttn = {
    'title': title,
    'isi': isi
  }
  global.db.data.users[m.sender].note.push(cttn)
  conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/7989b4e60a9dedfcdbbec.jpg', `note berhasil dibuat!\nUntuk melihat note. Ketik: ${usedPrefix}lihatnote`, wm, 'Liat note', '.lihatnote', m)
}

handler.help = ['buatnote <title|isi>']
handler.tags = ['tools']
handler.command = /^buatnote$/i

export default handler