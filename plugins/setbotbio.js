let handler = async (m, { conn, text }) => {
   if (!text) throw `Masukan Text Untuk Bio Baru Bot`
     try {
	let setting = global.db.data.settings[this.user.jid]
	if (new Date() * 1 - setting.status > 1000) {
		let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime);
		await this.updateProfileStatus(text).catch(_ => _)
		conn.reply(m.chat, 'Sukses Mengganti Bio Bot', m)
		setting.status = new Date() * 1
	}
} catch (e) {
       console.log(e)
       throw `Error`
     }
}
handler.help = ['setbotbio']
handler.tags = ['owner']
handler.command = /^setb(io(bot)?|otbio)$/i
handler.owner = true

export default handler

function clockString(ms) {
	let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
	let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
	let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
	return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}


// buatan FokusDotId (Fokus ID)