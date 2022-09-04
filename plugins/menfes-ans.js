export async function before(m, { conn, isOwner }) {
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/(MENFES|MENCRET)!/i.test(m.quoted.text)) return !0
    if (!isOwner) throw false
    conn.reply(m.quoted.mentionedJid[0], '*Temanmu:*\n' htjava + m.text, m)
    conn.reply(m.quoted.key.remoteJid, '*Pesan dari Temanmu:*\n' htjava + m.text, m)
}
