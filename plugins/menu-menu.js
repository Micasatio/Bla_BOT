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
      {title: "π ππππ πΎπππππππ | ππππ ππππ π", description: null, rowId: `${usedPrefix}allmenu`},
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
β­βββγ *${wm}* γββββ¬£
β*<πβπ½πβππΈβππβ π»πΌπ πΉππ/>*
Β° ΰΆ¬ β π _${usedPrefix}terminos y condiciones y privacidad_
Β° ΰΆ¬ β π _${usedPrefix}grupos_
Β° ΰΆ¬ β π _${usedPrefix}cuentaserikabot_
Β° ΰΆ¬ β π _${usedPrefix}estado_
Β° ΰΆ¬ β π _${usedPrefix}infobot_
Β° ΰΆ¬ β π _${usedPrefix}donar_
Β° ΰΆ¬ β π _${usedPrefix}listagrupos_
Β° ΰΆ¬ β π _${usedPrefix}velocidad_
Β° ΰΆ¬ β π _${usedPrefix}owner_
Β° ΰΆ¬ β π _Bot_ (π’π π π ππ πππππππ)
*<πβπΌ πβ πΉππ πΈ ππ πΎβπβπ/>*
Β° ΰΆ¬βπ½ _${usedPrefix}join *<enlace / link / url>*_
*<πππΌπΎππ/>*
Β° ΰΆ¬βποΈ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
Β° ΰΆ¬βποΈ _${usedPrefix}ppt *<papel / tijera /piedra>*_
Β° ΰΆ¬βποΈ _${usedPrefix}prostituto *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}prostituta *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}gay2 *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}lesbiana *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}pajero *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}pajera *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}puto *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}puta *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}manco *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}manca *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}rata *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}love *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}doxear *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}pregunta *<texto>*_
Β° ΰΆ¬βποΈ _${usedPrefix}slot *<apuesta>*_
Β° ΰΆ¬βποΈ _${usedPrefix}simi *<texto>*_
Β° ΰΆ¬βποΈ _${usedPrefix}topgays_
Β° ΰΆ¬βποΈ _${usedPrefix}topotakus_
Β° ΰΆ¬βποΈ _${usedPrefix}formarpareja_
Β° ΰΆ¬βποΈ _${usedPrefix}verdad_
Β° ΰΆ¬βποΈ _${usedPrefix}reto_
*<ππΌβπ π»πΌ πΈβππΌπππΈπ>*
Β° ΰΆ¬β π€ _${usedPrefix}apostar_
Β° ΰΆ¬β π€ _${usedPrefix}hacerapuesta_
*<πΈβππππΈβ π π»πΌππΈβππππΈβ/>*
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *welcome*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *welcome*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *modohorny*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *modohorny*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *antilink*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *antilink*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *antilink2*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *antilink2*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *detect*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *detect*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *audios*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *audios*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *autosticker*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *autosticker*_
*<βπΌβπβππΌπ π»πΌ π½πΈππππ/>*
 
Β° ΰΆ¬βπ° _${usedPrefix}reporte *<texto>*_
*<π»πΌπβπΈβπΎπΈπ/>*
Β° ΰΆ¬βπ₯ _${usedPrefix}facebook *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}instagram *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}mediafire *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}instagram *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}gitclone *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}tiktok *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}ytmp3 *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}ytmp4 *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}play.1 *<texto / enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}play.2 *<texto / enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}play *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}spotify *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}imagen *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}pinteret *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}wallpaper *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}wallpaper2 *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}pptiktok *<nombre de usuario>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}igstalk *<nombre de usuario>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}tiktokstalk *<nombre de usuario>*_
*<πΎβπβππ/>* 
Β° ΰΆ¬βπ _${usedPrefix}add *<numero>*_
Β° ΰΆ¬βπ _${usedPrefix}kick *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}grupo *<abrir / cerrar>*_
Β° ΰΆ¬βπ _${usedPrefix}promote *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}demote *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}banchat_
Β° ΰΆ¬βπ _${usedPrefix}unbanchat_
Β° ΰΆ¬βπ _admins *<texto>*_ (π’π π π ππ πππππππ)
Β° ΰΆ¬βπ _${usedPrefix}demote *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}infogroup_
Β° ΰΆ¬βπ _${usedPrefix}link_
Β° ΰΆ¬βπ _${usedPrefix}setname *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}setdesc *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}invocar *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}setwelcome *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}setbye *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}hidetag *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}simular *<welcome / bye / promote / demote>*_
*<βπβππΌβπππ»πβπΌπ/>*
Β° ΰΆ¬βπ§§ _${usedPrefix}toimg *<responde a un sticker>*_
Β° ΰΆ¬βπ§§ _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
Β° ΰΆ¬βπ§§ _${usedPrefix}toptt *<responde a un video / audio>*_
Β° ΰΆ¬βπ§§ _${usedPrefix}tovideo *<responde a un audio>*_
Β° ΰΆ¬βπ§§ _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
Β° ΰΆ¬βπ§§ _${usedPrefix}tts es *<texto>*_
*<πΌπ½πΌβπππ π πππΎππ/>*
Β° ΰΆ¬βποΈ _${usedPrefix}logos *<efecto> <texto>*_
Β° ΰΆ¬βποΈ _${usedPrefix}simpcard *<@tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}hornycard *<@tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}lolice *<@tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}ytcomment *<texto>*_
Β° ΰΆ¬βποΈ _${usedPrefix}itssostupid_
Β° ΰΆ¬βποΈ _${usedPrefix}pixelar_
Β° ΰΆ¬βποΈ _${usedPrefix}blur_
Β° ΰΆ¬βποΈ _${usedPrefix}phmarker_
*<βπΈβπ»ππ/>*
Β° ΰΆ¬βπΎ _${usedPrefix}cristianoronaldo_
Β° ΰΆ¬βπΎ _${usedPrefix}messi_
Β° ΰΆ¬βπΎ _${usedPrefix}meme_
Β° ΰΆ¬βπΎ _${usedPrefix}itzy_
Β° ΰΆ¬βπΎ _${usedPrefix}blackpink_
Β° ΰΆ¬βπΎ _${usedPrefix}kpop *<blackpink / exo / bts>*_
Β° ΰΆ¬βπΎ _${usedPrefix}lolivid_
Β° ΰΆ¬βπΎ _${usedPrefix}loli_
Β° ΰΆ¬βπΎ _${usedPrefix}navidad_
Β° ΰΆ¬βπΎ _${usedPrefix}ppcouple_
Β° ΰΆ¬βπΎ _${usedPrefix}neko_
Β° ΰΆ¬βπΎ _${usedPrefix}waifu_
Β° ΰΆ¬βπΎ _${usedPrefix}akira_
Β° ΰΆ¬βπΎ _${usedPrefix}akiyama_
Β° ΰΆ¬βπΎ _${usedPrefix}anna_
Β° ΰΆ¬βπΎ _${usedPrefix}asuna_
Β° ΰΆ¬βπΎ _${usedPrefix}ayuzawa_
Β° ΰΆ¬βπΎ _${usedPrefix}boruto_
Β° ΰΆ¬βπΎ _${usedPrefix}chiho_
Β° ΰΆ¬βπΎ _${usedPrefix}chitoge_
Β° ΰΆ¬βπΎ _${usedPrefix}deidara_
Β° ΰΆ¬βπΎ _${usedPrefix}erza_
Β° ΰΆ¬βπΎ _${usedPrefix}elaina_
Β° ΰΆ¬βπΎ _${usedPrefix}eba_
Β° ΰΆ¬βπΎ _${usedPrefix}emilia_
Β° ΰΆ¬βπΎ _${usedPrefix}hestia_
Β° ΰΆ¬βπΎ _${usedPrefix}hinata_
Β° ΰΆ¬βπΎ _${usedPrefix}inori_
Β° ΰΆ¬βπΎ _${usedPrefix}isuzu_
Β° ΰΆ¬βπΎ _${usedPrefix}itachi_
Β° ΰΆ¬βπΎ _${usedPrefix}itori_
Β° ΰΆ¬βπΎ _${usedPrefix}kaga_
Β° ΰΆ¬βπΎ _${usedPrefix}kagura_
Β° ΰΆ¬βπΎ _${usedPrefix}kaori_
Β° ΰΆ¬βπΎ _${usedPrefix}keneki_
Β° ΰΆ¬βπΎ _${usedPrefix}kotori_
Β° ΰΆ¬βπΎ _${usedPrefix}kurumi_
Β° ΰΆ¬βπΎ _${usedPrefix}madara_
Β° ΰΆ¬βπΎ _${usedPrefix}mikasa_
Β° ΰΆ¬βπΎ _${usedPrefix}miku_
Β° ΰΆ¬βπΎ _${usedPrefix}minato_
Β° ΰΆ¬βπΎ _${usedPrefix}naruto_
Β° ΰΆ¬βπΎ _${usedPrefix}nezuko_
Β° ΰΆ¬βπΎ _${usedPrefix}sagiri_
Β° ΰΆ¬βπΎ _${usedPrefix}sasuke_
Β° ΰΆ¬βπΎ _${usedPrefix}sakura_
Β° ΰΆ¬βπΎ _${usedPrefix}cosplay_
*<βπππΈβπ»ππ +ππ />*
*β­βββ[ CONTENIDO π ]βββ¬£*
β *Visita el MenΓΊ de Comandos*
β *Para Adultos!!*
βββββββββββββββββββ
βπβΊ _${usedPrefix}hornymenu_
*β°βββββββββββββ¬£*
*<πΌπ½πΌβπππ π»πΌ πΈππ»πππ/>*
*- ππ΄ππΏπΎπ½π³π΄ π° ππ½ π°ππ³πΈπΎ πΎ π½πΎππ° π³π΄ ππΎπ*
Β° ΰΆ¬βπ€ _${usedPrefix}bass_
Β° ΰΆ¬βπ€ _${usedPrefix}blown_
Β° ΰΆ¬βπ€ _${usedPrefix}deep_
Β° ΰΆ¬βπ€ _${usedPrefix}earrape_
Β° ΰΆ¬βπ€ _${usedPrefix}fast_
Β° ΰΆ¬βπ€ _${usedPrefix}fat_
Β° ΰΆ¬βπ€ _${usedPrefix}nightcore_
Β° ΰΆ¬βπ€ _${usedPrefix}reverse_
Β° ΰΆ¬βπ€ _${usedPrefix}robot_
Β° ΰΆ¬βπ€ _${usedPrefix}slow_
Β° ΰΆ¬βπ€ _${usedPrefix}smooth_
Β° ΰΆ¬βπ€ _${usedPrefix}tupai_
*<ββπΈπ πΈβπβπππ/>*
Β° ΰΆ¬βπ³ _${usedPrefix}start_
Β° ΰΆ¬βπ³ _${usedPrefix}next_
Β° ΰΆ¬βπ³ _${usedPrefix}leave_
*<πΉππβπΈπ»πβπΌπ/>*
Β° ΰΆ¬βπ _${usedPrefix}animeinfo *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}google *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}letra *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}wikipedia *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}ytsearch *<texto>*_
*<πΈππ»πππ/>* 
*- π΄ππ²ππΈπ±π΄ π»π°π ππΈπΆππΈπ΄π½ππ΄π πΏπ°π»π°π±ππ°π πΎ π΅ππ°ππ΄π ππΈπ½ π½πΈπ½πΆππ½ πΏππ΄π΅πΈπΉπΎ (#, /, *, .)* 
_(π’π π π ππ πππππππ)_
Β° ΰΆ¬βπ _Quien es tu sempai botsito 7w7_
Β° ΰΆ¬βπ _Te diagnostico con gay_
Β° ΰΆ¬βπ _A nadie le importa_
Β° ΰΆ¬βπ _Fiesta del admin_
Β° ΰΆ¬βπ _Fiesta del administrador_
Β° ΰΆ¬βπ _Lo mismo pero mas barato_
Β° ΰΆ¬βπ _Vivan los novios_
Β° ΰΆ¬βπ _Feliz cumpleaΓ±os_
Β° ΰΆ¬βπ _Noche de paz_
Β° ΰΆ¬βπ _Caiste_
Β° ΰΆ¬βπ _escuchame una cosa_
Β° ΰΆ¬βπ _Que suerte tienen algunos_
Β° ΰΆ¬βπ _Madres que pedo_
Β° ΰΆ¬βπ _Esto se va a poner feo_
Β° ΰΆ¬βπ _Quieres que me ponga rudo_
Β° ΰΆ¬βπ _entradaepica_
Β° ΰΆ¬βπ _casi me cago del susto_
Β° ΰΆ¬βπ _Buenos dias_
Β° ΰΆ¬βπ _el mamut_
Β° ΰΆ¬βπ _Es lo mas estupido que eh oido_
Β° ΰΆ¬βπ _algo anda mal_
Β° ΰΆ¬βπ _Puta que oferton_
Β° ΰΆ¬βπ _Ya es toda wey_
Β° ΰΆ¬βπ _acercate viejo_
Β° ΰΆ¬βπ _donde esta tu honor basura_
Β° ΰΆ¬βπ _Alan que pendejada hiciste_
Β° ΰΆ¬βπ _abduzcan_
Β° ΰΆ¬βπ _corre perra corre_
Β° ΰΆ¬βπ _si dicelo al juez rosadito_
Β° ΰΆ¬βπ _ahorita vemos que pedo_
Β° ΰΆ¬βπ _Buenos tardes_
Β° ΰΆ¬βπ _pasen contexto_
Β° ΰΆ¬βπ _risa del arabe_
Β° ΰΆ¬βπ _aver que paso_
Β° ΰΆ¬βπ _esto no era parte del trato_
Β° ΰΆ¬βπ _que buen servicio_
Β° ΰΆ¬βπ _Buenos noches_
Β° ΰΆ¬βπ _Esponja enloqueciste_
Β° ΰΆ¬βπ _Uy si claro_
Β° ΰΆ¬βπ _Audio hentai_
Β° ΰΆ¬βπ _Chica lgante_
Β° ΰΆ¬βπ _Feliz navidad_
Β° ΰΆ¬βπ _bien pensado woody_
Β° ΰΆ¬βπ _Vete a la vrg_
Β° ΰΆ¬βπ _Pasa pack Bot_
Β° ΰΆ¬βπ _Sustos que dan gusto_
Β° ΰΆ¬βπ _Atencion grupo_
Β° ΰΆ¬βπ _Marica quien_
Β° ΰΆ¬βπ _Murio el grupo_
Β° ΰΆ¬βπ _Oh me vengo_
Β° ΰΆ¬βπ _Viernes_
Β° ΰΆ¬βπ _Baneado_
Β° ΰΆ¬βπ _Sexo_
Β° ΰΆ¬βπ _puerco_
Β° ΰΆ¬βπ _Hola_
Β° ΰΆ¬βπ _Un pato_
Β° ΰΆ¬βπ _Nyanpasu_
Β° ΰΆ¬βπ _Te amo_
Β° ΰΆ¬βπ _Yamete_
Β° ΰΆ¬βπ _BaΓ±ate_
Β° ΰΆ¬βπ _Es puto_
Β° ΰΆ¬βπ _La biblia_
Β° ΰΆ¬βπ _Onichan_
Β° ΰΆ¬βπ _Mierda de Bot_
Β° ΰΆ¬βπ _Siuuu_
Β° ΰΆ¬βπ _Rawr_
Β° ΰΆ¬βπ _UwU_
Β° ΰΆ¬βπ _:c_
Β° ΰΆ¬βπ _a_
*<βπΌββπΈπππΌβππΈπ/>*
Β° ΰΆ¬βπ οΈ _${usedPrefix}afk *<motivo>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}acortar *<enlace / link / url>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}calc *<operacion math>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}del *<respondre a mensaje del Bot>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}qrcode *<texto>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}readmore *<texto1| texto2>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}styletext *<texto>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}traducir *<texto>*_
*<ββπΎ - ππππππΌπ - πΌβπβππππΈ/>*
Β° ΰΆ¬βπ΅ _${usedPrefix}balance_
Β° ΰΆ¬βπ΅ _${usedPrefix}claim_
Β° ΰΆ¬βπ΅ _${usedPrefix}top_
Β° ΰΆ¬βπ΅ _${usedPrefix}levelup_
Β° ΰΆ¬βπ΅ _${usedPrefix}myns_
Β° ΰΆ¬βπ΅ _${usedPrefix}perfil_
Β° ΰΆ¬βπ΅ _${usedPrefix}work_
Β° ΰΆ¬βπ΅ _${usedPrefix}minar_
Β° ΰΆ¬βπ΅ _${usedPrefix}buy_
Β° ΰΆ¬βπ΅ _${usedPrefix}buyall_
Β° ΰΆ¬βπ΅ _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
Β° ΰΆ¬βπ΅ _${usedPrefix}verificar_
Β° ΰΆ¬βπ΅ _${usedPrefix}unreg *<numero de serie>*_
*<πππβππΌβπ/>*
Β° ΰΆ¬βπ½ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
Β° ΰΆ¬βπ½ _${usedPrefix}attp *<texto>*_
Β° ΰΆ¬βπ½ _${usedPrefix}ttp *<texto>*_
Β° ΰΆ¬βπ½ _${usedPrefix}pat *<@tag>_
Β° ΰΆ¬βπ½ _${usedPrefix}slap *<@tag>_
Β° ΰΆ¬βπ½ _${usedPrefix}kiss *<@tag>*_
Β° ΰΆ¬βπ½ _${usedPrefix}dado_
Β° ΰΆ¬βπ½ _${usedPrefix}wm *<packname> <author>*_
Β° ΰΆ¬βπ½ _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
Β° ΰΆ¬βπ½ _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_
*<ππβπΌβ π πππ»πΌβπΈπ»πβπΌπ/>*
Β° ΰΆ¬βπ _${usedPrefix}cajafuerte_
Β° ΰΆ¬βπ _${usedPrefix}enable *restrict*_
Β° ΰΆ¬βπ _${usedPrefix}disable *restrict*_
Β° ΰΆ¬βπ _${usedPrefix}enable *autoread*_
Β° ΰΆ¬βπ _${usedPrefix}disable *autoread*_
Β° ΰΆ¬βπ _${usedPrefix}enable *public*_
Β° ΰΆ¬βπ _${usedPrefix}disable *public*_
Β° ΰΆ¬βπ _${usedPrefix}enable *pconly*_
Β° ΰΆ¬βπ _${usedPrefix}disable *pconly*_
Β° ΰΆ¬βπ _${usedPrefix}enable *gconly*_
Β° ΰΆ¬βπ _${usedPrefix}disable *gconly*_
Β° ΰΆ¬βπ _${usedPrefix}banchat2_
Β° ΰΆ¬βπ _${usedPrefix}unbanchat2_
Β° ΰΆ¬βπ _${usedPrefix}banuser *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}unbanuser *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}banuser *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}bc *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}bcchats *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}bcgc *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}cleartpm_
Β° ΰΆ¬βπ _${usedPrefix}restart_
Β° ΰΆ¬βπ _${usedPrefix}update_
Β° ΰΆ¬βπ _${usedPrefix}addprem *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}delprem *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}listprem_
Β° ΰΆ¬βπ _${usedPrefix}aΓ±adirdiamantes *<@tag> <cantidad>*_
Β° ΰΆ¬βπ _${usedPrefix}aΓ±adirxp *<@tag> <cantidad>*_
β°ββββββββββββββββββββββ¬£`, footer: `${wm}`, //${name} ${ucapan()}
title: null,
buttonText: "πππππΌ πΏπ ππππ | ππππ ππππ", 
sections }

await conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menucompleto)$/i
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
