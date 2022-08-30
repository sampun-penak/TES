//By Hinata
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import knights from 'knights-canvas'
export async function all(m) {
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let name = await this.getName(who)
    let { isBanned } = global.db.data.chats[m.chat]
    let { banned } = global.db.data.users[m.sender]
    let { group } = global.db.data.settings
    let setting = global.db.data.settings
    let user = global.db.data.users[m.sender]
    
    // ketika ada yang kirim anu
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.sendButton(m.chat, `┌「 *Undang Bot ke Grup* 」
├ 7 Hari / Rp 5,000
├ 30 Hari / Rp 15,000
└────
`.trim(), wm, 'Pemilik Bot', '.owner', m)
await this.reply(nomorown + '@s.whatsapp.net', `Ada Yang Mau Nyulik nih :v \n\ndari: @${m.sender.split("@")[0]} \n\npesan: ${m.text}`, m, { mentions: [m.sender] })
    }
    
    // ketika ada yang kirim anu
    if (m.mtype === 'reactionMessage') {
    let caption = `Terdeteksi *${name} @${who.split("@")[0]}* Mengirim Reaction [ ${m.text} ]`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
        
    // ketika ada yang kirim anu
    if (m.mtype === 'paymentMessage') {
    let caption = `Terdeteksi *${name} @${who.split("@")[0]}* Meminta Uang :> [ ${m.text} ]`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
    
    // ketika ada yang kirim anu
    if (m.mtype === 'productMessage') {
    let caption = `Terdeteksi *${name} @${who.split("@")[0]}* Promosi :> [ ${m.text} ]`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
    
    // ketika ada yang kirim anu
    if (m.mtype === 'orderMessage') {
    let caption = `Terdeteksi *${name} @${who.split("@")[0]}* Meng Order :> [ ${m.text} ]`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
    
    // ketika ada yang kirim anu
    if (m.mtype === 'stickerMessage') {
    this.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
        }
    
    // bot
    if (/^bot$/i.test(m.text)) {
        let caption = `Bot Aktif kak *${name} @${who.split("@")[0]}*`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
    
    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            let data = fs.readFileSync('./database.json')
            await this.sendFile(owner[0] + '@s.whatsapp.net', { document: data, mimetype: 'application/json', fileName: 'database.json' }, { quoted: m })
            setting.backupDB = new Date() * 1
        }
    }

    return !0
}

