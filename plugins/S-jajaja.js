
import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}πππ πΎπππΌππΏππ πΏπ ππππΎππππ ππππΌπ πΏπππΌπΎππππΌπΏππ πππ *#on stickers* ππΌππΌ πΌπΎππππΌπ\n\nπππ ππππΎππππ πΎππππΌππΏπ πΌππ πΏπππΌπ½πππΏ πππ *#on stickers* ππ πππΌπ½ππ`

let nombre = 'πΉ Black-πππ'
let nombre2 = 'Black-πππ'
 //al poner jaja se mandan stickers randoms al chat poner formatos jpg o gif
const s = [
'https://i.gifer.com/99do.gif',
'https://i.gifer.com/G0ph.gif',
'https://i.gifer.com/VLgZ.gif',
'https://i.gifer.com/4q.gif'
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
}
handler.customPrefix = /jaja/i
handler.command = new RegExp
handler.exp = 50
export default handler
