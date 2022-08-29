let handler = async (m, { conn }) => {
let { chat, fromMe, isBaileys } = m.quoted
if (!m.quoted) throw 'Reply pesan yang ingin dihapus'
if (!isBaileys) throw 'Pesan ini tidak dikirim oleh bot'

try {
    return conn.sendMessage(chat, { delete: m.quoted.vM.key })
 } catch {
 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 return conn.sendMessage(m.chat, { delete: key })
 }
}
handler.help = ['del', 'delete']
handler.tags = ['tools']

handler.command = /^d(el(ete|m)|el|fa)?$/i

export default handler