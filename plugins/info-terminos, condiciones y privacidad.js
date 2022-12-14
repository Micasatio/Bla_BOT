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
*_Toda la informaciΓ³n que se mencione aquΓ­ no excluye a la Propietaria del Bot, y Propietarios Acredores al uso de GataBot-MD_*
*_No Somos responsables del desconocimiento que tenga por parte de esta informaciΓ³n._* 
*TΓRMINOS DE PRIVACIDAD*
_- Somos consciente del constante uso que le pueda dar al Bot, y tambiΓ©n Garantizamos que la informaciΓ³n como (imΓ‘genes, vΓ­deos, enlaces, ubicaciΓ³n, Audios, Stickers, Gif, Contactos que Usted Proporcione en torno a NΓΊmero(s) Oficial(es) No son ni serΓ‘n Compartido Con Nadie, ni se usaran dicho Datos fuera del entorno del BOT._
_- Lo que realicΓ© con el BOT queda solo en Usted ya que en NΓΊmero(s) Oficial(es) El Chat se Borra cada 24 Horas, segΓΊn el tiempo de Mensajes Temporales de WhatsApp._
_- Es posible que en NΓΊmero(s) Oficial(es) el Bot no estΓ© Activado las 24 Horas de los 7 dΓ­as de la Semana, eso no implica que no lo estΓ© o que Propietarios NO OFICIALES puedan Hacerlo._
_- El chat anΓ³nimo del comando #start, valga la redundancia no mostrarΓ‘ ningΓΊn dato de los Usuarios por parte de GataBot. Eso no implica que las personas que hagan uso de esta funciΓ³n puedan dar a conocer sus datos. en NΓΊmero(s) Oficial(es)._
_- Los Datos que Obtenga GataBot en Cuentas Oficiales de Usuarios(as), Grupos y Ajustes del Mismo puede verse Reiniciado, Modificado, y/o Retificado con el fin de que el Bot este en Γptimas Condiciones para su Uso. (Usuarios(as) Pueden Pedir CompensaciΓ³n Por Instagram o por el comando #Reporte. Debe de Presentar Pruebas)._
_- NO somos responsable si Hay alteraciones de este Bot no siendo NΓΊmero(s) Oficial(es) y tengan de uso un Repositorio de GitHub que no corresponda al Oficial, o que implementen Usuarios de Terceros integraciones que comprometan a los(as) Usuarios(as) al utilizar Versiones no Oficiales._
*TΓRMINOS DE USO* 
_- La informaciΓ³n que haya en este Bot y el/la usuario/a Haga uso de las Mismas asumirΓ‘ saber los TΓ©rminos y Condiciones de tal forma que no habrΓ‘ incovenientes al hacer un uso Particular de las Funciones del Bot._
_- El Bot contiene Material que solo puede ser visible para mayores de 18 AΓ±os, NO somos responsable si no cumple con la edad mΓ­nima para usar el Material para Adultos._
_- Las imΓ‘genes, VΓ­deos y Audios que tenga este Bot son de uso PΓΊblico, Pero se considerarΓ‘ Falta de Respeto al realizar Ediciones en el Material ya exitente que porte Nombre del Bot o informaciΓ³n relevante._
_- Al hacer uso de una solicitud para ingreso de grupo con Una Cuenta Oficial, es recomendable que el grupo no cuente con temas de Odio, virus, contenido indebido, temas de discriminaciΓ³n u campaΓ±as sin fundamentos._
_- Si ha recibido un Comunicado Oficial siendo NΓΊmero(s) Oficial(es) Mantener el Respeto de la misma manera si recibe un Mensaje sin haber usado un Comando Mantener el Respeto ya que puede en este ultimo caso ser una Persona Real._
*CONDICIONES DE USO*
_- NO haga ni intente Llamar o hacer Videollamada al Bot siendo NΓΊmero(s) Oficial(es) ya que obstaculiza el funcionamiento del BOT._
_- NO usar el Bot siendo NΓΊmero(s) Oficial(es) para llevar a cabo alguna acciΓ³n hostil que pueda verse comprometida el Funcionamiento del BOT._
_- NO use el comando de SPAM repetidamente, ya que ProvocarΓ‘ un Mal funcionamiento en el BOT, tampoco envie al BOT mensajes que puedan comprometer el Funcionamiento de la misma._
_- Al hacer uso de ciertos comandos que tengan como objetivo socavar la incomodidad, intranquilidad, molestia u otro termino tajante, se tomarΓ‘n las respectivas sanciones o llamados de alerta para prevalecer la integridad de los/las Usuarios(as) y funcionamiento de GataBot._
*ESTE ES EL REPOSITORIO OFICIAL*
*https://github.com/GataNina-Li/GataBot-MD*
*CUENTA OFICIAL DE ASISTENCIA - INSTAGRAM*
~ _Solo en esta Cuenta Respondo si tiene Dudas, Preguntas o Necesita Ayuda sobre GataBot, TambiΓ©n puede Comunicarse en Caso de Temas de ColaboraciΓ³n_
*https://www.instagram.com/gata_dios*
*DONAR A LA CREADORA EN ESTA CUENTA OFICIAL*
~ _Si te Agrada y valoras el Trabajo que he realizado, puedes ayudarme en Donar para que pueda continuar en este Proyecto_
*https://paypal.me/OficialGD*
*~ Muchas Gracias Por tomarte el tiempo en informate sobre GataBot*
β°ββββββββββββββββββββββ¬£`, footer: `${wm}`, //${name} ${ucapan()}
title: null,
buttonText: "πππππΌ πΏπ ππππ | ππππ ππππ", 
sections }

await conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(terminos)$/i
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
