import axios from 'axios'
import FormData from 'form-data'
import fetch from 'node-fetch'
import fs from 'fs'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, isPrems, isOwner, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''

let imgr = flaaa.getRandom()

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
• ${usedPrefix + command} anime
`
await conn.sendButton(m.chat, caption, author, logo, [['Menu', '/menu']], m, adReply)
            }
            
if (command) {
switch (template) {

case 'codenhentai':
            if (!one) throw 'Masukkan Text/Url'
            let aa = await xa.anime.anime('https://api-xcoders.xyz/api/anime/codenhentai?code=' + one + '&apikey=7iyNa0qA')
        let aa_ = Object.keys(aa.result.pages).map((v, index) => ({
		title: 'Result: ' + index,
		description: '\nLink: ' + aa.result.link + '\nThumbnail: ' + Object.keys(aa.result.thumbnails),
		rowId: usedPrefix + 'get ' + aa[v]
	}))
	let aan_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}
		judul: ${aa.judul}
		title_JP: ${aa.title_JP}
		parodies: ${aa.details.parodies}
		characters: ${aa.details.characters}
		tags: ${aa.details.tags}
		artists: ${aa.details.artists}
		groups: ${aa.details.groups}
		languages: ${aa.details.languages}
		categories: ${aa.details.categories}
		pages: ${aa.details.pages}
		upload_date: ${aa.details.upload_date}
		`,
		footerText: wm
	}
	return conn.sendListM(m.chat, aan_, aa_, m)
            break
            
            case 'husbu':
            case 'loli':
            case 'neko':
            case 'waifu':
        let bb = 'https://api-xcoders.xyz/api/anime/' + args[0] + '?apikey=7iyNa0qA'
        let bbi = `*title:* ${args[0]}`
conn.sendButton(m.chat, bbi, author, bb, [['Menu', '/menu']], m, adReply)
            break
            
            case 'reversevideo':
            case 'sticker':
            case 'towebp':
            case 'webp2mp4':
            let cxc = await q.download()
  let cxc_ = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let _cxc = await (cxc_ ? uploadImage : uploadFile)(cxc)
        let cc = 'https://api-xcoders.xyz/api/convert/' + args[0] + '?url=' + _cxc + '&apikey=7iyNa0qA'
        conn.sendButtonImg(m.chat, cc, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'american':
case 'amongus':
case 'anonymous':
case 'aov':
case 'arrow':
case 'arrow2':
case 'blackpink':
case 'cake':
case 'caper':
case 'cloth':
case 'cloud':
case 'coverpubg':
case 'crank':
case 'dragonfire':
case 'eraser':
case 'foggy':
case 'glasses':
case 'graffiti':
case 'greenbrush':
case 'hallowen':
case 'horror':
case 'incandescent':
case 'leafgraphy':
case 'letters':
case 'metals':
case 'ml':
case 'neonblue':
case 'neonbp':
case 'nightstars':
case 'pig':
case 'pubgavatar':
case 'puppy':
case 'sunlight':
case 'television':
case 'tiger':
case 'typography':
case 'typography2':
case 'warface':
case 'water':
            if (!one) throw 'Masukkan Text/Url'
        let dd = 'https://api-xcoders.xyz/api/ephoto/' + args[0] + '?text=' + one + '&apikey=7iyNa0qA'
        conn.sendButtonImg(m.chat, dd, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
}
}
}
handler.help = ['xfar <command> <teks>']
handler.tags = ['tools'] 
handler.command = /^xfar$/i
export default handler

