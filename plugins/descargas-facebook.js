
 /*import { facebookDl } from './scraper.js'
import { savefrom } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[โ๐๐๐๐โ] ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐๐ฝ ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐ณ๐ด ๐ต๐ฐ๐ฒ๐ด๐ฑ๐พ๐พ๐บ, ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ: ${usedPrefix + command}* https://www.facebook.com/HolaSoySkull/videos/982580549178886/?app=fbl`
try {
m.reply(`*[โ] แดแดsแดแดสษขแดษดแดแด sแด แด ษชแดแดแด, แดษขแดแดสแดแด แดษด แดแดแดแดษดแดแด แดแดส าแดแด แดส, แดsแดแด แดสแดแดแดsแด แดแดแดแดแด แดแดสแดส แดษดแดสแด 2 ส 10 แดษชษดแดแดแดs แดแดแดแดษดแดษชแดษดแดแด แดแด สแด แดแดสแดแดษชแดษด แดแดส แด ษชแดแดแด...*`)
let res = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
let url = res?.url?.[0]?.url || res?.url?.[1]?.url || res?.['720p'] || res?.['360p']
conn.sendMessage(m.chat, { video: { url }, caption: res?.meta?.title || '*๐ฐ๐๐๐ธ ๐ด๐๐๐ฐ ๐๐ ๐๐ธ๐ณ๐ด๐พ*' }, { quoted: m })
} catch (e) {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*\n\n*- ๐ฒ๐พ๐๐๐พ๐ฑ๐พ๐๐ด ๐๐๐ด ๐ด๐ป ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐๐ด๐ฐ ๐๐ธ๐ผ๐ธ๐ป๐ฐ๐ ๐ฐ:*\n*โ* https://www.facebook.com/HolaSoySkull/videos/982580549178886/?app=fbl')
}}
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
export default handler */





/*
import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐ผ๐พ๐ ๐ฟ๐ ๐๐ผ๐พ๐๐ฝ๐๐๐ ๐๐ผ๐๐ผ ๐ฟ๐๐๐พ๐ผ๐๐๐ผ๐ ๐๐ ๐๐๐ฟ๐๐\n๐๐๐๐๐๐๐\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*\n\n๐๐๐๐๐ ๐ผ ๐๐ผ๐พ๐๐ฝ๐๐๐ ๐๐๐๐ ๐๐ ๐ฟ๐๐๐๐๐๐ผ๐ฟ ๐๐๐ ๐๐๐ฟ๐๐\n๐๐๐ผ๐๐๐๐\n*${usedPrefix + command} https://fb.watch/dcXq_0CaHi/*`
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `โจ *ENLACE | URL:* ${url}`, m)
  let info = `๐ *Infรณrmate sobre las Novedades y recuerda tener la รบltima versiรณn.*\n\n๐ *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '๐๐ฃ๐จ๐ฉ๐๐๐ง๐๐ข', null, null, [
['๐๐๐ฃ๐ช ๐ฟ๐๐จ๐๐๐ง๐๐๐จ ๐', '#descargasmenu'],
['๐๐๐ฃ๐ช ๐พ๐ค๐ข๐ฅ๐ก๐๐ฉ๐ค | ๐๐ช๐ก๐ก ๐๐๐ฃ๐ช โจ', '.allmenu'],
['๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ | ๐ฝ๐๐๐  ๐ฉ๐ค ๐๐๐ฃ๐ช โ๏ธ', '/menu']
], m,)
}
handler.help = ['facebbok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.limit = 2
handler.exp = 35
export default handler
*/








import { facebookDl } from './scraper.js'
import { savefrom } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐ผ๐พ๐ ๐ฟ๐ ๐๐ผ๐พ๐๐ฝ๐๐๐ ๐๐ผ๐๐ผ ๐ฟ๐๐๐พ๐ผ๐๐๐ผ๐ ๐๐ ๐๐๐ฟ๐๐\n๐๐๐๐๐๐๐\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*\n\n๐๐๐๐๐ ๐ผ ๐๐ผ๐พ๐๐ฝ๐๐๐ ๐๐๐๐ ๐๐ ๐ฟ๐๐๐๐๐๐ผ๐ฟ ๐๐๐ ๐๐๐ฟ๐๐\n๐๐๐ผ๐๐๐๐\n*${usedPrefix + command} https://fb.watch/dcXq_0CaHi/*`
try {
	const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.reply(m.chat, `${eg}๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐, ๐๐ ๐๐๐๐ผ ๐ฟ๐๐๐พ๐ผ๐๐๐ผ๐๐ฟ๐ ๐๐ ๐๐๐ฟ๐๐\n\n๐๐ผ๐๐ ๐ผ ๐๐๐๐๐๐, ๐๐๐๐ ๐๐๐ฟ๐๐ ๐๐ ๐ฟ๐๐๐๐๐๐ผ๐ฟ๐๐๐`, fkontak, m)
let res = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
let url = res?.url?.[0]?.url || res?.url?.[1]?.url || res?.['720p'] || res?.['360p']
conn.sendMessage(m.chat, { video: { url }, caption: res?.meta?.title || `${eg}๐๐๐ฟ๐๐ ๐ฟ๐ ๐๐ผ๐พ๐๐ฝ๐๐๐` }, { quoted: m })
} catch (e) {
m.reply(`${fg}๐ผ๐๐๐ ๐๐ผ๐๐๐ ๐๐ผ๐, ๐๐๐พ๐๐๐๐ฟ๐ ๐๐๐ผ๐ ๐๐ ๐๐๐๐ผ๐พ๐ ๐๐ผ๐๐๐ฟ๐ ๐ฟ๐ ๐๐ผ๐พ๐๐ฝ๐๐๐`)
}}
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
export default handler
