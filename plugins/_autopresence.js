export async function before(m) {
	let ran = ['unavailable', 'available', 'composing', 'recording', 'paused']
	let chat = global.db.data.chats[m.chat]
	if (chat.autoPesence) {
    if (m.text) {
    /* Mengetik */
	return this.sendPresenceUpdate(ran.getRandom(), m.chat)
    }
  }
}
