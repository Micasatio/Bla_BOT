let media = './media/menus/Menuvid2.mp4'
let handler = async (m, { conn, usedPrefix }) => {
//let handler = async (m, { conn, command }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
let str = `
π π½ππππππππΏπ(πΌ) πΌ ππΌπ πΎπππππΌπ ππππΎππΌπππ
π ππππΎπππ ππ πππ πππππΎππΌπ πΌπΎπΎπππππ
βββββββββββββββββ
β *GITHUB*
*${md}*
βββββββββββββββββ
β *INSTAGRAM - ASISTENCIA*
*${ig}*
βββββββββββββββββ
β *YOUTUBE*
*${yt}*
βββββββββββββββββ
*Si tienen dudas, sugerencias, o preguntas solo escriban por Instagram.*\n
*If you have doubts, suggestions or questions just write on Instagram.*
`.trim()
 
let buttonMessage= {
'document': { url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD` },
'mimetype': `application/${document}`,
'fileName': `γ  π―ππππ πΎππππ γ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/BrunoSobrino/TheMystic-Bot-MD',
'mediaType': 2,
'previewType': 'pdf',
'title': 'α΄Κ α΄α΄α΄α΄Κ Κα΄α΄ α΄α΄ α΄‘Κα΄α΄sα΄α΄α΄β©',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA' }},
'caption': str,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'πΌπ΄π½π'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: 'π³πΎπ½π°π'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}

/*conn.sendHydrated(m.chat, str, wm, media, 'LOS AMO USUARIOS', 'Erika-BOT', null, null, [
['ππ§πͺπ₯π€π¨ πππππππ‘ππ¨ | ππ§π€πͺπ₯π¨ π°', '.grupos'],
['πΎπ§ππππ€π§π | πΎπ§πππ©π€π§ π', '#owner'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)}  */

handler.command = /^cuentasoficiales|gataig|cuentasgb|cuentagb|accounts|gataaccounts|account|iggata|cuentasdegata|cuentasdegatabot|cuentagatabot|cuentasgatabot$/i
handler.exp = 35
export default handler
