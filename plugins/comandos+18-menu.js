import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)
const sections = [
{
title: `πππππΌ πΏπππππππΌπ½ππ | πΏπππ-πΏπππ ππππ`,
rows: [
      {title: "π πΎπππΌπΏπππΌ | πΎπππΌπππ π", description: null, rowId: `${usedPrefix}creadora`},
      {title: "π πΏπππΌπ | πΏπππΌππ π", description: null, rowId: `${usedPrefix}donar`},
      {title: "π πππππΎππΏπΌπΏ | πππππΏ π", description: null, rowId: `${usedPrefix}ping`},
      {title: "π ππππ πΎπππππππ | ππππ ππππ π", description: null, rowId: `${usedPrefix}menucompleto`},
      {title: "π πππππΌ πΏπ πΎππΌπππππΎπΌπππππΌ π", description: null, rowId: `${usedPrefix}top`},
      {title: "π πππππππΌπΎπΓπ | ππππ ππππ π", description: null, rowId: `${usedPrefix}infomenu`},
      {title: "π‘ ππππππ πΏπππΌπππΎππ | ππΌπππ π‘", description: null, rowId: `${usedPrefix}juegosmenu`},
      {title: "π ππππ πΏπ πΌππΏπππ | πΌππΏπππ π", description: null, rowId: `${usedPrefix}audios`},
      {title: "π§° ππππ πππΏππππΎπΌπΏππ πΏπ πΌππΏππ π§°", description: null, rowId: `${usedPrefix}audioefectomenu`},
      {title: "π° ππππ πΏπ πππππ | πππππ π°", description: null, rowId: `${usedPrefix}grupomenu`},
      {title: "βοΈ πΎπππππ πΏπ πΎππππππππΌπΎπππ βοΈ", description: null, rowId: `${usedPrefix}on`},
      {title: "π ππππ ππππΎπππ π πππππππ π", description: null, rowId: `${usedPrefix}stickermenu`},
      {title: "β¨ ππππ ππππΎπππ π πππππ β¨", description: null, rowId: `${usedPrefix}makermenu`},
      {title: "πͺ ππππ πΏπ πΏπππΎπΌπππΌπ | πΏππππππΌπΏ ππππ πͺ", description: null, rowId: `${usedPrefix}descargasmenu`},
      {title: "π ππππ πΏπ π½ππππππΏπΌπ | πππΌππΎπ ππππ π", description: null, rowId: `${usedPrefix}buscarmenu`},
      {title: "β©οΈ ππΌππΏππ ππππ | πΌππππ β©οΈ", description: null, rowId: `${usedPrefix}randommenu`},
      {title: "βοΈ ππππ πππ βοΈ", description: null, rowId: `${usedPrefix}rpgmenu`},
      {title: "π ππππ ππππππππΌπππ(πΌ) | ππππ πππππ π", description: null, rowId: `${usedPrefix}ownermenu`},
      {title: "π ππππ πΎπππΌππΏππ +18 | πΎππππΌππΏπ +18 π", description: null, rowId: `${usedPrefix}hornymenu`},
      {title: "π ππππππππ, πΎπππΏππΎπππππ π πππππΌπΎππΏπΌπΏ π", description: null, rowId: `${usedPrefix}terminos`},
      {title: "π€ πππππ πππππππ|ππππ π πππ π€", description: null, rowId: `${usedPrefix}hacerapuesta`},
      

]}, ]
 
let name = await conn.getName(m.sender)
//let name = conn.getName(m.sender)
const listMessage = {
text: `β­ββββββββββββββββββββββ\nβ${ucapan()}\nβπβ’.ΒΈπΒΈ.β’ *${name}* β’.ΒΈπΒΈ.β’π\nβ°ββββββββββββββββββββββ
γ ππππ *+18* γ
βπβΊ _${usedPrefix}nsfwloli_
βπβΊ _${usedPrefix}nsfwfoot_
βπβΊ _${usedPrefix}nsfwass_
βπβΊ _${usedPrefix}nsfwbdsm_
βπβΊ _${usedPrefix}nsfwcum_
βπβΊ _${usedPrefix}nsfwero_
βπβΊ _${usedPrefix}nsfwfemdom_
βπβΊ _${usedPrefix}nsfwfoot_
βπβΊ _${usedPrefix}nsfwglss_
βπβΊ _${usedPrefix}nsfworgy_
βπβΊ _${usedPrefix}pies_
βπβΊ _${usedPrefix}yuri_
βπβΊ _${usedPrefix}yuri2_ 
βπβΊ _${usedPrefix}yaoi_
βπβΊ _${usedPrefix}yaoi2_
βπβΊ _${usedPrefix}panties_ 
βπβΊ _${usedPrefix}tetas_ 
βπβΊ _${usedPrefix}booty_
βπβΊ _${usedPrefix}ecchi_
βπβΊ _${usedPrefix}furro_
βπβΊ _${usedPrefix}hentai_
βπβΊ _${usedPrefix}trapito_
βπβΊ _${usedPrefix}imagenlesbians_
βπβΊ _${usedPrefix}pene_
βπβΊ _${usedPrefix}porno_
βπβΊ _${usedPrefix}porno2_
βπβΊ _${usedPrefix}randomxxx_
βπβΊ _${usedPrefix}pechos_
βπβΊ _${usedPrefix}pack_
βπβΊ _${usedPrefix}pack2_
βπβΊ _${usedPrefix}pack3_
βπβΊ _${usedPrefix}videoxxx_
βββββββββββββββββββ
β π₯΅ πΎπππππππΏπ πΏπππΌπππΎπ π₯΅
βββββββββββββββββββ
βΒ»π₯΅ _${usedPrefix}pornovideo | pornovid_
βΒ»π₯΅ _${usedPrefix}pornovidgay | pornogayv_
βΒ»π₯΅ _${usedPrefix}pornolesbivid | pornolesbiv_
βΒ»π₯΅ _${usedPrefix}pornobisexualvid | pornobiv_
βββββββββββββββββββ
β π₯ πΎπππππππΏπ ππππ π₯
βββββββββββββββββββ
β *Usar bajo su responsabilidad* 
β *VΓ­deos +18 aleatorios*
β *Puede tardar en enviar*
β *Contenido de Calidad*
βββββββββββββββββββ
βΒ»π₯ _${usedPrefix}pornopremium_
β°ββββββββββββββββββββββ¬£`, footer: `${wm}`, //${name} ${ucapan()}
title: null,
buttonText: "πππππΌ πΏπ ππππ | ππππ ππππ", 
sections }

await conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(hornymenu)$/i
handler.exp = 50
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "π *BIENVENIDO(A) | WELCOME* π"
  if (time >= 4) {
    res = "π *Buenos DΓ­as | Good Morning* β"
  }
  if (time >= 11) {
    res = "ποΈ *Buenas Tardes | Good Afternoon* π€οΈ"
  }
  if (time >= 15) {
    res = "π *Buenas tardes | Good Afternoon* π₯οΈ"
  }
  if (time >= 17) {
    res = "π *Buenas noches | Good Evening* π«"
  }
  return res
}
