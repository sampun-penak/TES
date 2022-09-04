import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command, args }) => {
  let mention = m.mentionedJid[0] || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
  if (!mention) throw 'Tag salah satu lah'
  let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || '' 
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
    if (!txt) return conn.reply(m.chat, `Silahkan masukan pesannya`, fakes, fakeyt)
    if (txt > 700) return conn.reply(m.chat, 'Teks Kepanjangan!', fakes, fakeyt)

    let pengirim = m.sender
    let tujuan = `👋 Saya *${conn.user.name}*, Pesan Untuk Kamu
👥 Dari : wa.me/${pengirim.split("@s.whatsapp.net")[0]}

${htki} 💌 Pesan ${htka}
${htjava} ${txt}
`

let cap = `${htki} PENGIRIM RAHASIA ${htka}
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: ${usedPrefix + command} pesan untuknya

Contoh: ${usedPrefix + command} hai`

if (!q) {
await conn.sendHydrated(mention, tujuan, cap, thumbnailUrl.getRandom(), 'https://wa.me/' + pengirim.split("@s.whatsapp.net")[0], 'KIRIM PESAN', null, null, [
      [null, null]
    ], null)
    } else {
    await conn.sendHydrated(mention, tujuan, cap, thumbnailUrl.getRandom(), 'https://wa.me/' + pengirim.split("@s.whatsapp.net")[0], 'KIRIM PESAN', null, null, [
      [null, null]
    ], null)
   let media = q ? await m.getQuotedObj() : false || m
  await conn.copyNForward(mention, media, true).catch(_ => _)
    }
    
 let suks = `Mengirim Pesan *${mime}*
👥 Dari : wa.me/${pengirim.split("@s.whatsapp.net")[0]}

${htki} 💌 Pesan ${htka}
${htjava} ${txt}
`
await conn.reply(m.chat, suks, m, fakeyt)

}
handler.help = ['menfess <pesan>']
handler.tags = ['main']
handler.command = /^(men(fess?|cret)|chat)$/i
export default handler