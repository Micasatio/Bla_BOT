let handler = async m => {
 let old = performance.now()
 let neww = performance.now()
 let speed = neww - old
 let txt = `${eg}*_COMENZANDO PRUEBA DE VELOCIDAD..._*\n*_STARTING SPEED TEST..._*`.trim()
  m.reply(txt) 

await m.reply('š')
await m.reply('šš')
await m.reply('ššš')
await m.reply(`ā°ā±āā± *ššššššš¼šæš | šššššš* ā±āā±ā®`)
 
let veloz = 
`š *VELOCIDAD:*\n *${speed}* *Milisegundos*\n\nš *SPEED:*\n *${speed}* *Milliseconds*`
let tm = {
text: veloz,
footer: global.wm,
}
conn.sendMessage(m.chat, tm, m)
}

handler.help = ['ping']
handler.tags = ['info']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
export default handler
