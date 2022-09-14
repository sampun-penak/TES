//By Hinata
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import knights from 'knights-canvas'
export async function all(m) {
	let name = await this.getName(m.sender)
	let sap = ['Hai', 'Ohayo', 'Kyaa', 'Halo', 'Nyann']
	let a = ['AED','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD','BDT','BGN','BHD','BIF','BMD','BND','BOB','BOV','BRL','BSD','BTN','BWP','BYR','BZD','CAD','CDF','CHE','CHF','CHW','CLF','CLP','CNY','COP','COU','CRC','CUC','CUP','CVE','CZK','DJF','DKK','DOP','DZD','EGP','ERN','ETB','EUR','FJD','FKP','GBP','GEL','GHS','GIP','GMD','GNF','GTQ','GYD','HKD','HNL','HRK','HTG','HUF','IDR','ILS','INR','IQD','IRR','ISK','JMD','JOD','JPY','KES','KGS','KHR','KMF','KPW','KRW','KWD','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LTL','LVL','LYD','MAD','MDL','MGA','MKD','MMK','MNT','MOP','MRO','MUR','MVR','MWK','MXN','MXV','MYR','MZN','NAD','NGN','NIO','NOK','NPR','NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD','SCR','SDG','SEK','SGD','SHP','SLL','SOS','SRD','SSP','STD','SYP','SZL','THB','TJS','TMT','TND','TOP','TRY','TTD','TWD','TZS','UAH','UGX','USD','USN','USS','UYI','UYU','UZS','VEF','VND','VUV','WST','XAF','XAG','XAU','XBA','XBB','XBC','XBD','XCD','XDR','XFU','XOF','XPD','XPF','XPT','XTS','XXX','YER','ZAR','ZMW']
    let b = a.getRandom()
    let pp = await this.profilePictureUrl(m.sender).catch(_ => hwaifu.getRandom())
    
    // jpegThumbnail
    let situm = await this.resize(thumbnailUrl.getRandom(), 300, 150)
    let sipp = await this.resize(pp, 300, 300)
    // Fake Knights
		let imagea = await new knights.Jo().setImage(pp).toBuild();
		let dataa = imagea.toBuffer();
		let imageb = await new knights.Patrick().setAvatar(pp).toAttachment();
		let datab = imageb.toBuffer();
		let imagec = await new knights.Bonk().setAvatar1(pp).setAvatar2(pp).toBuild();
		let datac = imagec.toBuffer();
		let imaged = await new knights.Burn().setAvatar(pp).toAttachment();
		let datad = imaged.toBuffer();
		let kn = [dataa, datab, datac, datad]
			// Mime Random
		let pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']
			// Fake Random
		let pft = [global.fdocs, global.fgif, global.fkontak, global.fliveLoc, global.fpayment, global.fpoll, global.ftextt, global.ftoko, global.ftroli, global.fvid, global.fvn]
		
	// Begin
		global.ucapan = ucapkan()
		global.ephemeral = '86400'
		
		// Fake adReply
		global.adReply = {
		fileLength: fsizedoc, seconds: fsizedoc,
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
					showAdAttribution: true,
					title: author,
					body: '👋 ' + sap.getRandom() + ' Kak :> ' + name,
					mediaUrl: sgc,
					description: botdate,
					previewType: 'PHOTO',
					thumbnail: await(await fetch(pp)).buffer(),
					sourceUrl: sgh
				}
			}
		}
		global.fakeig = {
		fileLength: fsizedoc, seconds: fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: sig,
						mediaType: 'VIDEO',
						description: 'Follow: ' + sig,
						title: '👋 ' + sap.getRandom() + ' Kak :> ' + name,
						body: botdate,
						thumbnailUrl: pp,
						sourceUrl: sgc
					}
				}
			}
			global.fakefb = {
			fileLength: fsizedoc, seconds: fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: sfb,
						mediaType: 'VIDEO',
						description: 'Follow: ' + sfb,
						title: '👋 ' + sap.getRandom() + ' Kak :> ' + name,
						body: botdate,
						thumbnailUrl: pp,
						sourceUrl: sfb
					}
				}
			}
			global.faketik = {
			fileLength: fsizedoc, seconds: fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: snh,
						mediaType: 'VIDEO',
						description: 'Follow: ' + snh,
						title: '👋 ' + sap.getRandom() + ' Kak :> ' + name,
						body: botdate,
						thumbnailUrl: pp,
						sourceUrl: snh
					}
				}
			}
			global.fakeyt = {
			fileLength: fsizedoc, seconds: fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: syt,
						mediaType: 'VIDEO',
						description: 'Follow: ' + syt,
						title: '👋 ' + sap.getRandom() + ' Kak :> ' + name,
						body: botdate,
						thumbnailUrl: pp,
						sourceUrl: syt
					}
				}
			}
			
	// Fake Reply
		global.fpayment = {
				key: {
					participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
				},
				message: {
					requestPaymentMessage: {
						currencyCodeIso4217: b,
						amount1000: fsizedoc,
						requestFrom: '0@s.whatsapp.net',
						noteMessage: {
							extendedTextMessage: {
								text: '👋 Hay Kak :> ' + name
							}
						},
						expiryTimestamp: fsizedoc,
						amount: {
							value: fsizedoc,
							offset: fsizedoc,
							currencyCode: b
						}
					}
				}
			}
			global.fpoll = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				pollCreationMessage: {
					name: '👋 Hay Kak :> ' + name
				}
			}
		}
		global.ftroli = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				orderMessage: {
					itemCount: fsizedoc,
					status: 1,
					surface: 1,
					message: botdate,
					orderTitle: author,
					sellerJid: '0@s.whatsapp.net'
				}
			}
		}
		global.fkontak = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				contactMessage: {
					displayName: author,
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
					jpegThumbnail: sipp,
					thumbnail: sipp,
					sendEphemeral: true
				}
			}
		}
		global.fvn = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				audioMessage: {
					mimetype: 'audio/ogg; codecs=opus',
					seconds: fsizedoc,
					ptt: true
				}
			}
		}
		global.fvid = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				videoMessage: {
					title: author,
					h: 'Hmm',
					seconds: fsizedoc,
					caption: '👋 ' + sap.getRandom() + ' Kak :> ' + name,
					jpegThumbnail: sipp
				}
			}
		}
		global.ftextt = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				extendedTextMessage: {
					text: '👋 ' + sap.getRandom() + ' Kak :> ' + name,
					title: botdate,
					jpegThumbnail: sipp
				}
			}
		}
		global.fliveLoc = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				liveLocationMessage: {
					caption: '👋 ' + sap.getRandom() + ' Kak :> ' + name,
					h: botdate,
					jpegThumbnail: sipp
				}
			}
		}
		global.ftoko = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				productMessage: {
					product: {
						productImage: {
							mimetype: 'image/jpeg',
							jpegThumbnail: sipp
						},
						title: '👋 ' + sap.getRandom() + ' Kak :> ' + name,
						description: botdate,
						currencyCode: 'IDR',
						priceAmount1000: fsizedoc,
						retailerId: 'Ghost',
						productImageCount: 1
					},
					businessOwnerJid: '0@s.whatsapp.net'
				}
			}
		}
		global.fdocs = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				documentMessage: {
					title: author,
					jpegThumbnail: sipp
				}
			}
		}
		global.fgif = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				videoMessage: {
					title: '👋 ' + sap.getRandom() + ' Kak :> ' + name,
					h: 'Hmm',
					seconds: fsizedoc,
					gifPlayback: true,
					caption: botdate,
					jpegThumbnail: sipp
				}
			}
		}
		// Global Fake
		global.doc = pdoc.getRandom()
		global.fakes = pft.getRandom()
		global.knimg = kn.getRandom()
		global.tumhiho = situm
	// Ends
}

function ucapkan() {
	let waktunya = moment.tz('Asia/Jakarta').format('HH')
	let ucapin = 'Selamat malam 🌙'
	if(waktunya >= 1) {
		ucapin = 'Selamat Pagi 🗿'
	}
	if(waktunya >= 4) {
		ucapin = 'Selamat pagi 🌄'
	}
	if(waktunya > 10) {
		ucapin = 'Selamat siang ☀️'
	}
	if(waktunya >= 15) {
		ucapin = 'Selamat sore 🌅'
	}
	if(waktunya >= 18) {
		ucapin = 'Selamat malam 🌙'
	}
	if(waktunya >= 24) {
		ucapin = 'Selamat Begadang 🗿'
	}
	return ucapin
}