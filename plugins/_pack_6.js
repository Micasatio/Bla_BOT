import fetch from 'node-fetch'
let handler = async (m, {conn, command }) =>
let url = pack6 [Math.floor(Math.random() * pack6.length)]
conn.sendButton(m.chat, `pack6`, author, url,[['siguiente',`/${command}`]],m)
}
handler.help = ['pack6']
handler.tags = ['internet']
handler.exp = 50
export default handler

global.pack6 = [
 
 "data:image/jpeg;base64,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",
 "https://images.locanto.com.mx/Chica-vendo-mi-pack/vap_5238243099.jpg",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF0popYkedsgnM-bTzRKSgt7FGVRMCjhjak1KBhm-nzT4In_eCcZrL4iUEdeiv0H3A-yo&usqp=CAU",
  ]
  
  
  
  
  
  
  
  
  
  
