import fs from 'fs'
function handler(m, { conn }) {
let text = `
*πΎπ€π£π©πππ©π€ | πΎπ€π£π©πππ©* 
*Wa.me/12163503324 (BOT)*
**
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ERIKA-BOT | ERIKA-BOT',
body: 'ππ«ππππ¨π«π | ππ«πππ­π¨π«',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://wa.me/595983186566`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `π§‘ *Eso son los contactos para ti.*\nπ *That's the contacts for you.*`

conn.sendHydrated(m.chat, str, wm, pp, 'https://www.instagram.com/abiguelreyes75/', 'ππ£π¨π©πππ§ππ’', null, null, [
['ππ£ππ€π§π’πππΓ³π£ | ππ£ππ€π§π’ππ©ππ€π£', '.infobot'],
['β ππ§ ππ‘ ππ£ππππ€ | ππ€ π©π€ π¨π©ππ§π©', '/menu']
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueΓ±o|dueΓ±a|propietaria|dueΓ±o|creadora|creador)$/i
export default handler
