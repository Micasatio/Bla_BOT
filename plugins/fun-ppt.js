/*let handler = async (m, { text, usedPrefix }) => {
let salah = `*_Hola ππ», bienvenido al juego de piedra, papel o tijera_*\n\n*_Opciones Disponibles:_*\n*_piedra, papel o tijera_*\n\n*_${usedPrefix}ppt tijera_*\n\n*_Use las opciones en minusculas como se indica en el ejemplo, no use los _ ni los * para que el Bot lo detecte correctamente_*\n\n_Β©The Mystic - Bot_`
if (!text) throw salah
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == astro) {
m.reply(`*_π° Empate!_*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].money += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
} else {
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].uang += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
} else {
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].uang += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
} else {
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].uang += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
} else {
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].uang += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
} else {
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
}
} else {
throw salah
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
handler.register = false
handler.limit = false
export default handler*/






import { performance } from 'perf_hooks'
let handler = async (m, { text, usedPrefix, command }) => {
let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg' 
if (command == 'ppt') {
let salah = `ππππΏππΌ, ππΌπππ, π ππππππΌ\n\nππͺππππ¨ πͺπ¨ππ§ π‘π€π¨ π½ππππππ π₯ππ§π ππͺπππ§ π€ π©ππ’ππππ£ π₯πͺππππ¨ πͺπ¨ππ§ ππ¨π©π€π¨ ππ€π’ππ£ππ€π¨:\n${usedPrefix + command} π₯ππππ§π\n${usedPrefix + command} π₯ππ₯ππ‘\n${usedPrefix + command} π©ππππ§π\n\nππ¨π ππ£ π’ππ£πͺπ¨ππͺπ‘ππ¨\n\n${wm}`
 
conn.sendHydrated(m.chat, wm, salah, pp, md, 'π¬πΉπ°π²π¨-π©πΆπ»', null, null, [
['πππππ§π π₯', `${usedPrefix + command} piedra`],
['πππ₯ππ‘ π', `${usedPrefix + command} papel`],
['πππππ§π βοΈ', `${usedPrefix + command} tijera`]
], m,)}
  
//  conn.sendHydrated(m.chat, salah, wm, null, md, 'πππ©ππ½π€π©-ππΏ', null, null, [
//['πππ£πͺ ππͺπππ€π¨ | πππ’ππ¨ πππ£πͺ π‘', '#juegosmenu'],
//['ππ©π§π π«ππ― | πΌππππ£ π€­', `ds`],
//['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
//], m,)
                  
//if (!text) throw salah
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
} 
if (text == astro) {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 2
 
//m.reply(`*_π° Empate!_*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `β­ββββ[ ππππΌππ! π€ ]βββββ¬£\nβ${name} ππ¨π©ππ: ${text}\nβπ± π¬πΉπ°π²π¨-π©πΆπ»: ${astro}\nβπΈ π½π€π£π€: $${[money0].getRandom()} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβπ΅ ππͺ πΏππ£ππ§π€: $${money} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβ°ββββββ[ ${vs} ]ββββββ¬£`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['πππ£πͺ ππͺπππ€π¨ | πππ’ππ¨ πππ£πͺ π‘', '#juegosmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)
  
} else if (text == 'papel') {
if (astro == 'piedra') {
//global.db.data.users[m.sender].uang += 1000
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 100
  
//m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `β­ββββ[ ππΌ ππΌππΌπΏπ! π ]ββββ¬£\nβ${name} ππ¨π©ππ: ${text}\nβπ± π¬πΉπ°π²π¨-π©πΆπ»: ${astro}\nβπ° ππ§ππ’ππ€: $${[money0].getRandom()} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβπ΅ ππͺ πΏππ£ππ§π€: $${money} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβ°ββββββ[ ${vs} ]ββββββ¬£`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['πππ£πͺ ππͺπππ€π¨ | πππ’ππ¨ πππ£πͺ π‘', '#juegosmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 25
  
//m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `β­ββββ[ ππΌ ππππΏππΏπ! π€‘ ]βββ¬£\nβ${name} ππ¨π©ππ: ${text}\nβπ± π¬πΉπ°π²π¨-π©πΆπ»: ${astro}\nβπ πππ§ππππ: $${[money0].getRandom()} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβπ΅ ππͺ πΏππ£ππ§π€: $${money} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβ°ββββββ[ ${vs} ]ββββββ¬£`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['πππ£πͺ ππͺπππ€π¨ | πππ’ππ¨ πππ£πͺ π‘', '#juegosmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)
  
}
} else if (text == 'tijera') {
if (astro == 'papel') {
//global.db.data.users[m.sender].uang += 125
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 125
  
//m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `β­ββββ[ ππΌ ππΌππΌπΏπ! π ]ββββ¬£\nβ${name} ππ¨π©ππ: ${text}\nβπ± π¬πΉπ°π²π¨-π©πΆπ»: ${astro}\nβπ° ππ§ππ’ππ€: $${[money0].getRandom()} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβπ΅ ππͺ πΏππ£ππ§π€: $${money} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβ°ββββββ[ ${vs} ]ββββββ¬£`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['πππ£πͺ ππͺπππ€π¨ | πππ’ππ¨ πππ£πͺ π‘', '#juegosmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 75
  
//m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `β­ββββ[ ππΌ ππππΏππΏπ! π€‘ ]βββ¬£\nβ${name} ππ¨π©ππ: ${text}\nβπ± π¬πΉπ°π²π¨-π©πΆπ»: ${astro}\nβπ πππ§ππππ: $${[money0].getRandom()} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβπ΅ ππͺ πΏππ£ππ§π€: $${money} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβ°ββββββ[ ${vs} ]ββββββ¬£`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['πππ£πͺ ππͺπππ€π¨ | πππ’ππ¨ πππ£πͺ π‘', '#juegosmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)  
  
}
} else if (text == 'tijera') {
if (astro == 'papel') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 125
//global.db.data.users[m.sender].uang += 1000
  
//m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `β­ββββ[ ππΌ ππΌππΌπΏπ! π ]ββββ¬£\nβ${name} ππ¨π©ππ: ${text}\nβπ± π¬πΉπ°π²π¨-π©πΆπ»: ${astro}\nβπ° ππ§ππ’ππ€: $${[money0].getRandom()} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβπ΅ ππͺ πΏππ£ππ§π€: $${money} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβ°ββββββ[ ${vs} ]ββββββ¬£`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['πππ£πͺ ππͺπππ€π¨ | πππ’ππ¨ πππ£πͺ π‘', '#juegosmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)  
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 90
  
//m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `β­ββββ[ ππΌ ππππΏππΏπ! π€‘ ]βββ¬£\nβ${name} ππ¨π©ππ: ${text}\nβπ± π¬πΉπ°π²π¨-π©πΆπ»: ${astro}\nβπ πππ§ππππ: $${[money0].getRandom()} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβπ΅ ππͺ πΏππ£ππ§π€: $${money} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβ°ββββββ[ ${vs} ]ββββββ¬£`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['πππ£πͺ ππͺπππ€π¨ | πππ’ππ¨ πππ£πͺ π‘', '#juegosmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)    
  
}
} else if (text == 'papel') {
if (astro == 'piedra') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 75
//global.db.data.users[m.sender].uang += 1000
  
//m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `β­ββββ[ ππΌ ππΌππΌπΏπ! π ]ββββ¬£\nβ${name} ππ¨π©ππ: ${text}\nβπ± π¬πΉπ°π²π¨-π©πΆπ»: ${astro}\nβπ° ππ§ππ’ππ€: $${[money0].getRandom()} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβπ΅ ππͺ πΏππ£ππ§π€: $${money} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβ°ββββββ[ ${vs} ]ββββββ¬£`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['πππ£πͺ ππͺπππ€π¨ | πππ’ππ¨ πππ£πͺ π‘', '#juegosmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)   
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 240
  
//m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `β­ββββ[ ππΌ ππππΏππΏπ! π€‘ ]βββ¬£\nβ${name} ππ¨π©ππ: ${text}\nβπ± π¬πΉπ°π²π¨-π©πΆπ»: ${astro}\nβπ πππ§ππππ: $${[money0].getRandom()} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβπ΅ ππͺ πΏππ£ππ§π€: $${money} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβ°ββββββ[ ${vs} ]ββββββ¬£`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['πππ£πͺ ππͺπππ€π¨ | πππ’ππ¨ πππ£πͺ π‘', '#juegosmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)    
  
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 300
//global.db.data.users[m.sender].uang += 1000
  
//m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `β­ββββ[ ππΌ ππΌππΌπΏπ! π ]ββββ¬£\nβ${name} ππ¨π©ππ: ${text}\nβπ± π¬πΉπ°π²π¨-π©πΆπ»: ${astro}\nβπ° ππ§ππ’ππ€: $${[money0].getRandom()} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβπ΅ ππͺ πΏππ£ππ§π€: $${money} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβ°ββββββ[ ${vs} ]ββββββ¬£`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['πππ£πͺ ππͺπππ€π¨ | πππ’ππ¨ πππ£πͺ π‘', '#juegosmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)     
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 210
  
//m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `β­ββββ[ ππΌ ππππΏππΏπ! π€‘ ]βββ¬£\nβ${name} ππ¨π©ππ: ${text}\nβπ± π¬πΉπ°π²π¨-π©πΆπ»: ${astro}\nβπ πππ§ππππ: $${[money0].getRandom()} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβπ΅ ππͺ πΏππ£ππ§π€: $${money} α΄ΚΙͺα΄α΄α΄α΄ΙͺΙ΄κ±\nβ°ββββββ[ ${vs} ]ββββββ¬£`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['πππ£πͺ ππͺπππ€π¨ | πππ’ππ¨ πππ£πͺ π‘', '#juegosmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)   
  
}
} //else {
//throw salah
} //}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
handler.register = false
handler.limit = false
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

/*
let handler = async (m, { command, text }) => { 
if (!text) throw `error, vuelva a intentar.` 
//let id = text.join(' ')
if (command == 'e1') {
 if (text == 'a') {
 m.reply(`Resultado 1`) }
}
  
  if (command == 'e2') {
 if (text == 'b') {
 m.reply(`Resultado 2`) }
}  
    
    if (command == 'e3') {
 if (text == 'c') {
 m.reply(`Resultado 3`) }
}
}
 
//handler.help = handler.command = ['e1', 'e2', 'e3']
//handler.tags = ['Prueba']
//export default handler  
handler.help = ['e1', 'e2', 'e3']
handler.tags = ['ejemplo']
handler.command = ['e1', 'e2', 'e3'] //'a', 'b', 'c'
export default  handler */ 
