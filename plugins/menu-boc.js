import { mediafiredl, tiktokdl, tiktokdlv3 } from '@bochilteam/scraper'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, isPrems, isOwner, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
                            
let urut = text.split`|`
  let one = urut[1]
  let two = urut[2]
  let three = urut[3]
  
let template = (args[0] || '').toLowerCase()
if (!args[0]) {
let caption = `*Contoh Penggunaan Single*
${usedPrefix + command} cecan

*Contoh Penggunaan Multi*
${usedPrefix + command} pinterest |wibu

*List:*
• ${usedPrefix + command} mediafire
• ${usedPrefix + command} tiktok
`
await conn.sendButtonVid(m.chat, giflogo, caption, 'Nih.mp4', 'Back', '.menulist', fakes, adReply)
            }
            
if (command) {
try {
switch (template) {
case 'mediafire':
if (!one) throw `Contoh penggunaan ${usedPrefix + command} ${args[0]} |query`
let res = await mediafiredl(one)
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
*Name:* ${filename}
*Size:* ${filesizeH}
*Extension:* ${ext}
*Uploaded:* ${aploud}
`.trim()
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
            break
            
case 'tiktok':
if (!one) throw `Contoh penggunaan ${usedPrefix + command} ${args[0]} |query`
            const { author: { nickname }, video, description } = await tiktokdl(one).catch(async _ => await tiktokdlv3(one))
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw 
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', author, m)
            break
}
} catch {
throw eror
}
}
}
handler.help = ['boc <command> <teks>']
handler.tags = ['tools'] 
handler.command = /^boc$/i
export default handler

