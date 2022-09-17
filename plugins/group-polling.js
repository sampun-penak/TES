
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
let a = []
let b = text.split('|')
for (let c = 0; c < b.length; c++) {
a.push([b[c]])
			}
			return conn.sendPoll(m.chat, 'Polling Untuk:\n' + text, a, m)
}

handler.help = ['poll <teks>']
handler.tags = ['group'] 
handler.command = /^poll(ing|s)?$/i

export default handler