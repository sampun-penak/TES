export async function before(m, { conn }) => {
	let ran = ['unavailable', 'available', 'composing', 'recording', 'paused']
	let chat = global.db.data.chats[m.chat]
	if (chat.autoPesence) {
    if (m.text) {
    /* Mengetik */
	return conn.sendPresenceUpdate(ran.getRandom(), m.chat)
    }
  }
}
