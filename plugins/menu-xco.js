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
            let json = await fetch('https://api-xcoders.xyz/api/anime/codenhentai?code=' + one + '&apikey=7iyNa0qA')
            let aa = await json.json()
            let axa = aa.result.pages
        let aa_ = Object.keys(axa).map((v, index) => ({
		title: 'Result: ' + index,
		description: '\nLink: ' + aa.result.link + '\nThumbnail: ' + Object.values(aa.result.thumbnails).join('\n'),
		rowId: usedPrefix + 'get ' + axa[v]
	}))
	let aan_ = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}
		title: ${aa.result.title}
		title_JP: ${aa.result.title_JP}
		parodies: ${aa.result.details.parodies}
		characters: ${aa.result.details.characters}
		tags: ${aa.result.details.tags}
		artists: ${aa.result.details.artists}
		groups: ${aa.result.details.groups}
		languages: ${aa.result.details.languages}
		categories: ${aa.result.details.categories}
		pages: ${aa.result.details.pages}
		upload_date: ${aa.result.details.upload_date}
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
            
            case 'affect':
case 'approved':
case 'badut2':
case 'badut3':
case 'badut':
case 'beautiful':
case 'blur':
case 'brazzers':
case 'burn':
case 'challenger':
case 'circle':
case 'communism':
case 'crush':
case 'delete':
case 'dictator':
case 'discordhouse':
case 'distort':
case 'emboss':
case 'facepalm':
case 'frame':
case 'gay':
case 'glitch':
case 'greyscale':
case 'instagram':
case 'invert':
case 'jail':
case 'joke':
case 'karenhave':
case 'missionpassed':
case 'moustache':
case 'ps4':
case 'rejected':
case 'rip':
case 'rmbg':
case 'scary':
case 'sepia':
case 'spongebob':
case 'ssweb':
case 'thanos':
case 'tobecontinue':
case 'trash':
case 'triggered':
case 'wanted':
case 'wasted':
let exe = await q.download()
  let exe_ = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let _exe = await (exe_ ? uploadImage : uploadFile)(exe)
        let ee = 'https://api-xcoders.xyz/api/maker/' + args[0] + '?url=' + _exe + '&apikey=7iyNa0qA'
        conn.sendButtonImg(m.chat, ee, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'balloon':
case 'bannerplane':
case 'beachsign':
case 'bracelet':
case 'christmaswriting':
case 'einstein':
case 'hauntedhotel':
case 'hearttattoo':
case 'lightgraffiti':
case 'lovelock':
case 'neonsign':
case 'neonwriting':
case 'nightmarewriting':
case 'pendant':
case 'snow':
case 'streetsign':
case 'waterwriting':
            if (!one) throw 'Masukkan Text/Url'
        let ff = 'https://api-xcoders.xyz/api/photofunia/' + args[0] + '?text=' + one + '&apikey=7iyNa0qA'
        conn.sendButtonImg(m.chat, ff, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'burningfire':
case 'burningphoto':
case 'citybillboard':
case 'giantartwork':
case 'inthewoods':
case 'lightning':
case 'sketchpracticing':
case 'travellerssketch':
let gxg = await q.download()
  let gxg_ = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let _gxg = await (gxg_ ? uploadImage : uploadFile)(gxg)
        let gg = 'https://api-xcoders.xyz/api/photofunia/' + args[0] + '?url=' + _gxg + '&apikey=7iyNa0qA'
        conn.sendButtonImg(m.chat, gg, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'anaglyph':
case 'burning':
case 'exposure':
case 'flame':
case 'frame':
case 'iphone':
case 'memory':
case 'mirrors':
case 'nature':
case 'ripped':
case 'shattered':
case 'tearing':
case 'toilet':
let hxh = await q.download()
  let hxh_ = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let _hxh = await (hxh_ ? uploadImage : uploadFile)(hxh)
        let hh = 'https://api-xcoders.xyz/api/photooxy/' + args[0] + '?url=' + _hxh + '&apikey=7iyNa0qA'
        conn.sendButtonImg(m.chat, hh, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'burnpaper':
case 'butterfly':
case 'coffecup':
case 'coffee':
case 'doubleheart':
case 'flaming':
case 'lovemessage':
case 'lovetext':
case 'grass':
case 'gravity':
case 'quotewood':
case 'rainbow':
case 'naruto':
case 'oceansea':
case 'romantic':
case 'shadow':
case 'smoke':
            if (!one) throw 'Masukkan Text/Url'
        let ii = 'https://api-xcoders.xyz/api/photooxy/' + args[0] + '?text=' + one + '&apikey=7iyNa0qA'
        conn.sendButtonImg(m.chat, ii, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'ancient':
case 'arcane':
case 'batman':
case 'bear':
case 'berry':
case 'blackpink':
case 'blood':
case 'brick':
case 'broken':
case 'business':
case 'carbon':
case 'christmas':
case 'circuit':
case 'devil':
case 'discovery':
case 'dropwater':
case 'embossed':
case 'fiction':
case 'firework':
case 'giraffe':
case 'glossy':
case 'glowing':
case 'glue':
case 'gradient':
case 'greenhorror':
case 'harrypotter':
case 'imglitch':
case 'light':
case 'magma':
case 'metallic':
case 'neon':
case 'paper':
case 'skeleton':
case 'sketch':
case 'sliced':
case 'stone':
case 'summer':
case 'transformer':
case 'videogame':
            if (!one) throw 'Masukkan Text/Url'
        let jj = 'https://api-xcoders.xyz/api/textpro/' + args[0] + '?text=' + one + '&apikey=7iyNa0qA'
        conn.sendButtonImg(m.chat, jj, author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
}
}
}
handler.help = ['xco <command> <teks>']
handler.tags = ['tools'] 
handler.command = /^xco$/i
export default handler

