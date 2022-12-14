
import { webp2mp4 } from '../lib/webp2mp4.js'
import { ffmpeg } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `${mg}πππππππΏππ πΌπ πΌππΏππ ππΌππΌ πΎππππππππ ππ πππΏππ\n\nπππππππΏ ππ πΌππΏππ ππ πΎππππππ ππ πππΏππ\n\n*${usedPrefix + command}*`
let mime = m.quoted.mimetype || ''
if (!/webp|audio/.test(mime)) throw `${mg}πππππππΏππ πΌπ πΌππΏππ ππΌππΌ πΎππππππππ ππ πππΏππ\n\nπππππππΏ ππ πΌππΏππ ππ πΎππππππ ππ πππΏππ\n\n*${usedPrefix + command}*`
let media = await m.quoted.download()
let out = Buffer.alloc(0)
if (/webp/.test(mime)) {
out = await webp2mp4(media)
} else if (/audio/.test(mime)) {
out = await ffmpeg(media, [
'-filter_complex', 'color',
'-pix_fmt', 'yuv420p',
'-crf', '51',
'-c:a', 'copy',
'-shortest'
], 'mp3', 'mp4')
}
await conn.sendFile(m.chat, out, 'error.mp4', '*FUE UN ΓXITO!!*', m, 0, { thumbnail: out })
}
handler.help = ['tovideo']
handler.tags = ['sticker']
handler.command = ['tovideo']
export default handler
