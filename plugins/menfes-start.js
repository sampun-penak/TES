import fetch from 'node-fetch'
let handler = async(m, { conn, text, command, args }) => {
let groups = Object.values(await conn.groupFetchAllParticipating())
	let str = Object.keys(groups).map((i, index) => {
        return groups[i].participants.filter(p => p.id).map((v, i) => v.id).getRandom()
    })
    let org = str.getRandom()
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
    if (!text) return conn.reply(m.chat, `Silahkan masukan pesannya`, fakes, fakefb)
    if (text > 700) return conn.reply(m.chat, 'Teks Kepanjangan!', fakes, fakefb)

    let nomor = m.sender
    let chat1 = `Hi Saya Bot Pesan Ke Kamu
👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}

${htki} 💌 Pesan ${htka}
${htjava} ${text}
${cmenuf}`

let cap = `${htki} PENGIRIM RAHASIA ${htka}
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: ${command} pesan untuknya

Contoh: ${command} hai`
try {
return conn.sendHydrated(org, chat1, cap, thumbnailUrl.getRandom(), 'https://www.whatsapp.com/otp/copy/'+ nomor.split("@s.whatsapp.net")[0], 'BALAS', null, null, [
      [null, null]
    ], null)
if (mime) {
    conn.copyNForward(org, mime).catch(e => console.log(e, mime))
    }
    } catch {
    return conn.sendHydrated(who, chat1, cap, thumbnailUrl.getRandom(), 'https://www.whatsapp.com/otp/copy/'+ nomor.split("@s.whatsapp.net")[0], 'BALAS', null, null, [
      [null, null]
    ], null)
    }
 let haori1 = `Sukses Mengirim Pesan Random
👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}

${htki} 💌 Pesan ${htka}
${htjava} ${text}
${dmenuf}`
await conn.reply(m.chat, haori1, fakes, fakefb)

}
handler.help = ['menfess <pesan>']
handler.tags = ['main']
handler.command = /^(men(fess?|cret)|chat)$/i
export default handler