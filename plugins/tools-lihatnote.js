let handler = async(m, {conn, command, usedPrefix, text}) => {
  global.db.data.users[m.sender].note = global.db.data.users[m.sender].note || []
  let i = 0
  if (global.db.data.users[m.sender].note.length == 0) return m.reply('Kamu belum punya note!')
  let txt = '🗒️Daftar note\n\n'
  for (let ct in global.db.data.users[m.sender].note) {
    i += 1
    txt += '⌜' + i + '⌟ ' + global.db.data.users[m.sender].note[ct].title + '\n'
  }
  if (text.length == 0) return await conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/15e31900512863624ed57.jpg', txt, 'Penggunaan: ${usedPrefix}lihatnote 1\nHapus note: ${usedPrefix}hapusnote 1', 'Okey', 'Ok', m)
  let note = global.db.data.users[m.sender].note
  let split = text.split('|')
  if (note.length == 0) return m.reply('Kamu belum memiliki note!')
  let n = Number(split[0]) - 1

  let isi = global.db.data.users[m.sender].note[n] != undefined ? global.db.data.users[m.sender].note[n].isi : 'note tidak ditemukan!'
conn.reply(m.chat, `${isi}`, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.help = ['lihatnote <title>']
handler.tags = ['tools']
handler.command = /^lihatnote$/i

export default handler