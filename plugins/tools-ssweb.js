import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} https://s.id`

if (args[0]) {
let lis = ['https://hadi-api.herokuapp.com/api/ssweb?url=' + text + '&device=tablet&full=on',
'https://hadi-api.herokuapp.com/api/ssweb?url=' + text + '&device=tablet&full=off',
'https://hadi-api.herokuapp.com/api/ssweb?url=' + text + '&device=desktop&full=on',
'https://hadi-api.herokuapp.com/api/ssweb?url=' + text + '&device=desktop&full=off',
'https://hadi-api.herokuapp.com/api/ssweb?url=' + text + '&device=phone&full=on',
'https://hadi-api.herokuapp.com/api/ssweb?url=' + text + '&device=phone&full=off',
'https://hadi-api.herokuapp.com/api/ssweb2?url=' + text,
'https://nurutomo.herokuapp.com/api/ssweb?url' +text,
'https://shot.screenshotapi.net/screenshot?url=' + text + '&full_page=true&fresh=true&output=image&file_type=png&wait_for_event=load'
]
let liss = ['tablet full on',
'tablet full off',
'desktop full on',
'desktop full off',
'phone full on',
'phone full off',
'original',
'nuru',
'shot']
let row = Object.keys(lis, liss).map((v, index) => ({
		title: 'Screenshoot by ' + liss[v],
		description: 'Bot ' + author,
		rowId: usedPrefix + 'ssweb ' + lis[v] + ' get'
	}))
	let button = {
		buttonText: `☂️ Tema Disini ☂️`,
		description: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	}
if (args[1] == 'get') {
try {
let ss = await (await fetch(args[1]).buffer()
let caption = `Nihh banh ${command} ke 1 nya`
return conn.sendFile(m.chat, ss, wm, caption, fakes )
} catch {
let ss = args[1]
let caption = `Nihh banh ${command} ke 2 nya`
return conn.sendFile(m.chat, ss, wm, caption, fakes )
}
} 

}
handler.help = ['ssweb url']
handler.command = ['ss', 'ssweb', 'ssf']
handler.tags = ['tools']

export default handler
