
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import { Sticker, StickerTypes } from 'wa-sticker-formatter'
import fetch from 'node-fetch'
import Jimp from 'jimp'

let handler = async (m, { conn, args, text }) => {
let a_ = m.quoted ? m.quoted : m
  let b_ = (a_.msg || a_).mimetype || ''
  if (!b_) throw 'No media found'
  let c_ = await a_.download()
  let e_ = new Sticker(c_, { pack: packname, author: author, type: StickerTypes.FULL })
  let link
  try {
  if (/webp/g.test(b_)) link = await webp2png(c_)
        else if (/image/g.test(b_)) link = await uploadImage(c_)
        else if (/video/g.test(b_)) link = await uploadFile(c_)
        else if (/viewOnce/g.test(b_)) link = await uploadFile(c_)
        if (typeof link !== 'string') link = await uploadImage(c_)
        else if (/gif/g.test(b_)) link = e_
        } catch (e) {
        throw eror
        }
        if (!args[0]) throw `List Efek

• autocrop
• background
• blur
• brightness
• color
• contrast
• crop
• dither565
• fade
• flip
• gaussian
• greyscale
• hasAlpha
• invert
• mask
• mirror
• normalize
• opacity
• opaque
• posterize
• sepia`

  if (args[0] == 'blur') {
  	let hoih = await blur(link, args[1])
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
if (args[0] == 'color') {
  	let hoih = await color(link, args[1])
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
if (args[0] == 'flip') {
  	let hoih = await flip(link)
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
if (args[0] == 'gaussian') {
  	let hoih = await gaussian(link, args[1])
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
if (args[0] == 'invert') {
  	let hoih = await invert(link, args[1])
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
if (args[0] == 'mask') {
  	let hoih = await mask(link, args[1])
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
if (args[0] == 'normalize') {
  	let hoih = await normalize(link)
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
if (args[0] == 'autocrop') {
  	let hoih = await autocrop(link, args[1])
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
if (args[0] == 'background') {
  	let hoih = await background(link, args[1])
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
if (args[0] == 'brightness') {
  	let hoih = await brightness(link, args[1])
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
if (args[0] == 'contrast') {
  	let hoih = await contrast(link, args[1])
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
if (args[0] == 'crop') {
  	let hoih = await crop(link, args[1])
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
if (args[0] == 'dither565') {
  	let hoih = await dither565(link)
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
if (args[0] == 'fade') {
  	let hoih = await fade(link, args[1])
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
if (args[0] == 'greyscale') {
  	let hoih = await greyscale(link)
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
if (args[0] == 'hasAlpha') {
  	let hoih = await hasAlpha(link, args[1])
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
if (args[0] == 'mirror') {
  	let hoih = await mirror(link, args[1], args[2])
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
if (args[0] == 'opacity') {
  	let hoih = await opacity(link, args[1])
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
if (args[0] == 'opaque') {
  	let hoih = await opaque(link)
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
if (args[0] == 'posterize') {
  	let hoih = await posterize(link, args[1])
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
if (args[0] == 'sepia') {
  	let hoih = await sepia(link)
  conn.sendFile(m.chat, hoih, 'thumbnail.jpg', `
*${htki} Result ${htka}*
`, m)
}
}
handler.command = /^(hooh)$/i

export default handler

async function flip(img) {
  let imagea = await Jimp.read(img);
 let aa = await imagea.flip(false, true).getBufferAsync(Jimp.MIME_JPEG)
return aa
}

async function blur(img, num) {
  let imageb = await Jimp.read(img);
 let bb = await imageb.blur(Number(num)).getBufferAsync(Jimp.MIME_JPEG)
return bb
}

async function color(img, num) {
  let imagec = await Jimp.read(img);
 let cc = await imagec.color([{ apply: String(num), params: [100] }]).getBufferAsync(Jimp.MIME_JPEG)
return cc
}

async function mask(imga, imgb) {
  let imaged = await Jimp.read(imga);
  let imgbc = await Jimp.read(imgb);
 let dd = await imaged.mask(imgbc).getBufferAsync(Jimp.MIME_JPEG)
return dd
}

async function gaussian(img, num) {
  let imagee = await Jimp.read(img);
 let ee = await imagee.gaussian(Number(num)).getBufferAsync(Jimp.MIME_JPEG)
return ee
}

async function invert(img) {
  let imagef = await Jimp.read(img);
 let ff = await imagef.invert().getBufferAsync(Jimp.MIME_JPEG)
return ff
}

async function normalize(img) {
  let imageg = await Jimp.read(img);
 let gg = await imageg.normalize().getBufferAsync(Jimp.MIME_JPEG)
return gg
}

async function autocrop(img, op) {
  let imageh = await Jimp.read(img);
 let hh = await imageh.autocrop(op).getBufferAsync(Jimp.MIME_JPEG)
return hh
}

async function background(img, hx) {
  let imagei = await Jimp.read(img);
 let ii = await imagei.background(hx).getBufferAsync(Jimp.MIME_JPEG)
return ii
}

async function brightness(img, hx) {
  let imagej = await Jimp.read(img);
 let jj = await imagej.brightness(hx).getBufferAsync(Jimp.MIME_JPEG)
return jj
}

async function contrast(img, hx) {
  let imagek = await Jimp.read(img);
 let kk = await imagek.contrast(hx).getBufferAsync(Jimp.MIME_JPEG)
return kk
}

async function crop(img, hx) {
  let imagel = await Jimp.read(img);
 let ll = await imagel.crop(hx, hx, hx, hx).getBufferAsync(Jimp.MIME_JPEG)
return ll
}

async function dither565(img) {
  let imagem = await Jimp.read(img);
 let mm = await imagem.dither565().getBufferAsync(Jimp.MIME_JPEG)
return mm
}

async function fade(img, hx) {
  let imagen = await Jimp.read(img);
 let nn = await imagen.fade(hx).getBufferAsync(Jimp.MIME_JPEG)
return nn
}

async function greyscale(img) {
  let imageo = await Jimp.read(img);
 let oo = await imageo.greyscale().getBufferAsync(Jimp.MIME_JPEG)
return oo
}

async function hasAlpha(img, hx) {
  let imagep = await Jimp.read(img);
 let pp = await imagep.hasAlpha().getBufferAsync(Jimp.MIME_JPEG)
return pp
}

async function mirror(img, hx, xh) {
  let imageq = await Jimp.read(img);
 let qq = await imageq.mirror(hx, xh).getBufferAsync(Jimp.MIME_JPEG)
return qq
}

async function opacity(img, hx) {
  let imager = await Jimp.read(img);
 let rr = await imager.opacity(hx).getBufferAsync(Jimp.MIME_JPEG)
return rr
}

async function opaque(img) {
  let images = await Jimp.read(img);
 let ss = await images.opaque().getBufferAsync(Jimp.MIME_JPEG)
return ss
}

async function posterize(img, hx) {
  let imaget = await Jimp.read(img);
 let tt = await imaget.posterize(hx).getBufferAsync(Jimp.MIME_JPEG)
return tt
}

async function sepia(img) {
  let imageu = await Jimp.read(img);
 let uu = await imageu.sepia().getBufferAsync(Jimp.MIME_JPEG)
return uu
}

