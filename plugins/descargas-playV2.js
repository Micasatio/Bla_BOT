import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, usedPrefix, conn, text}) => {
if (!text) throw `${mg}πππΎπππ½πΌ ππ ππππ½ππ π ππππππ\nπππππππ\n*${usedPrefix + command} Billie Eilish - Bellyache*\n\nπππππ πππ ππΌππ ππ πππππ\nπππΌππππ\n*${usedPrefix + command} Billie Eilish - Bellyache*`
try {
if (command == 'play.1') {
conn.reply(m.chat, `${eg}ππππππ ππ πππππππ ππ πΌππΏππ πππ ππΌπππ\n\nππΌππ πΌ ππππππ πππ πππ πΌππΏππ ππππΌππ`, m)  
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.dlmp3, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `${eg}ππππππ ππ πππππππ ππ πππΏππ πππ ππΌπππ\n\nππΌππ πΌ ππππππ πππ πππ πππΏππ ππππΌππ`, m)
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.dlmp4, 'error.mp4', `${wm}`, m)}
} catch (e) {
m.reply(`${fg}πππππππ πΏπ πππππ\nπππ πΌππΌππ`)
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
handler.level = 8
handler.limit = 1
export default handler
