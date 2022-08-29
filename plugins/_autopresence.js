export async function before(m, { conn }) => {
	let chat = global.db.data.chats[m.chat]
	if (chat.autoPesence) {
    if (m.text) {
    /* Mengetik */
    let ran = ['unavailable', 'available', 'composing', 'recording', 'paused']
	return conn.sendPresenceUpdate(ran.getRandom(), m.chat)
    }
  }
}
