import fetch from 'node-fetch'
let handler = async(m, { conn, text, command, args }) => {
  let urut = text.split`|`
  let thm = urut[0]
  let text1 = urut[1]
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || q.mtype || ''
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : thm ? (thm.replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!thm) return conn.reply(m.chat, `Silahkan masukan Nomornya`, fakes, fakefb)
    if (!text1) return conn.reply(m.chat, `Silahkan masukan pesannya`, fakes, fakefb)
    if (text1 > 700) return conn.reply(m.chat, 'Teks Kepanjangan!', fakes, fakefb)

    let nomor = m.sender
    let chat1 = `👋 Saya *${conn.user.name}*, Pesan Untuk Kamu
👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}

${htki} 💌 Pesan ${htka}
${htjava} ${text1}
`

let cap = `${htki} PENGIRIM RAHASIA ${htka}
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: ${command} pesan untuknya

Contoh: ${command} hai`

if (!q) {
await conn.sendHydrated(who, chat1, cap, thumbnailUrl.getRandom(), 'https://wa.me/'+ nomor.split("@s.whatsapp.net")[0], 'BALAS', null, null, [
      [null, null]
    ], null)
    } else {
    await conn.sendHydrated(who, chat1, cap, thumbnailUrl.getRandom(), 'https://wa.me/'+ nomor.split("@s.whatsapp.net")[0], 'BALAS', null, null, [
      [null, null]
    ], null)
   let cc = q ? await m.getQuotedObj() : false || m
  await conn.copyNForward(who, cc, true).catch(_ => _)
    }
    
 let suks = `Mengirim Pesan *${mime}*
👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}

${htki} 💌 Pesan ${htka}
${htjava} ${text1}
${dmenuf}`
await conn.reply(m.chat, suks, fakes, fakefb)

}
handler.help = ['menfess <pesan>']
handler.tags = ['main']
handler.command = /^(men(fess?|cret)|chat)$/i
export default handler