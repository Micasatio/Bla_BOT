import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}πππ πΎπππΌππΏππ πΏπ ππππΎππππ ππππΌπ πΏπππΌπΎππππΌπΏππ πππ *#on stickers* ππΌππΌ πΌπΎππππΌπ\n\nπππ ππππΎππππ πΎππππΌππΏπ πΌππ πΏπππΌπ½πππΏ πππ *#on stickers* ππ πππΌπ½ππ`

let nombre = 'πΉ Black_Bot'
let nombre2 = 'Black_Bot el mejor'
 
const s = [
'https://i.gifer.com/3Pr0.gif',
'https://i.gifer.com/9aM.gif',
'https://i.gifer.com/3BBB.gif',
'https://i.gifer.com/Xi9B.gif'
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
}
handler.customPrefix = /ok|OK|Ok/
handler.command = new RegExp
handler.exp = 50
export default handler
