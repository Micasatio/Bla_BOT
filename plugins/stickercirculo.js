import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
let img = await q.download()
let url = await uploadImage(img)
let scircle = global.API('dzx', '/api/canvas/circle', { url }) 
let stiker = await sticker(null, scircle, global.packname, global.author)
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, { asSticker: true })
} catch (e) {
m.reply(`${fg}πππΎππππΏπ πππΌπ ππ πΎπππΌππΏπ *${usedPrefix + command}* πππππππΏππππΏπ πΌ πππΌ πππΌπππ, ππΌππΌ ππΌπΎππ ππ ππππΎπππ πΎπππΎπππΌπ\n\nππππππ½ππ ππ πππ πππ πΎππππΌππΏ *${usedPrefix + command}* πππππππΏπππ ππ πΌπ πππΌππ, ππ ππΌππ πΌ πΎπππΎπππΌπ ππππΎπππ`)
}}
handler.command = /^scircle|circle|cΓ­rculo|circulo|scΓ­rculo|scirculo|sircle|redondo|circular$/i
export default handler
