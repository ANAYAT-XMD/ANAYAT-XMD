const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-XMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0pFZ09tenpsamJlLzR5MVFBNkc1b2dBNG1mV25GMjljTTlPazZLRkoyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1dvSHBkRjgxemUvNVMxOXI5UDZORFRpYzJMYUFKanNETGlnTEtWanduVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBT0NCTWhJMlA2ZGFxT2F0V2FMSjBNSXNWSzdFZXFVQzZuSlVaL2RwN2x3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzZDI1SDc3NDc4ZHlwRlR0Z2JjVGd6ZXZQUnVqcm1XNmJNSkZZSFZvaldNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllDVE1yakRpQVNrZ1cydVlidEhOVU9LRmdaaHBlQytBckZ5WUJraWNObmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJRM2p5eW45MytYT3czaFZoVmRjUXIzNGNOaVAyRnVRK01nVkoza1hTa3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY09idjVaSHRpVUJRWlJGY2ZmaU5pZDZkMDhGcTgzYlhxaDRZb1BCUXRXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzlOQzlZdHVzWjZTeVJSQlBDZ0JObGxkV005Nmkyaksva3R2RytLQnAwQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdiTG1WZDZ4Z2dOWkpyUmVwc2tMM0F4Ym16NUpKV05DY3UvcjJ5QXRhc1RsTTR4bU1GblAwd1Q0UDExRDJJM0xOUU9xK1RWNllrMUlITHhrVzFuWkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg2LCJhZHZTZWNyZXRLZXkiOiJsUXZ1bEF0a2E4dVBibFBGbWtrWmh2WjRiMWk3Rm5iOVltQWcyeXVrcGo4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ1MzcxMjk1MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUNGMjY3Mjk4MEVDQjg3QjdDREVBNUI5MEQwRTM0NTIiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3OTk0NTM5MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDUzNzEyOTUwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQzhEMjZDMjY0OTA3OTQxODFBQzM2RDBFMDY5MTQxMyIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc5OTQ1MzkwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0NTM3MTI5NTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDODQzMkQyNEQ1REYzQTdFNTEwMDc4MzMwRkEyMDU4IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Nzk5NDUzOTF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ1MzcxMjk1MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUNDQjE4QTEwN0Q1MTgyMTAzQUVERjg5QkI4REYzMjUiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3OTk0NTM5MX1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJHSDRBQ0c3OCIsIm1lIjp7ImlkIjoiOTIzNDUzNzEyOTUwOjEzQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNDMyNTUwNjg2NTU3NzQ6MTNAbGlkIiwibmFtZSI6IlFhZGVlbSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUDNGMi84RUVLZWYzOUFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia2JoejZDNVZ5clZhakQ2NVdOM050NlpWZDJJTVdJRHM3MG0yZVIyazVIdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiL1NwdUhsUVBibG5qc2p6TUxlU1RnRG5IZnVjWmZpSUJPd09IV2NIdE5kMTBlUFlaS1VJemdlVUI4WHNXTFdoc1AzdlF6eWtHWUJvNGZpcytLaE5DQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IlJsekM3aDlzWjlJWGl3UE5YMkVXc2syeXFEUEtYMTJmR2R4ckZKOWpLNkNsMmtRbGo4YTFSaXdtN2RFS0FmNndYOThERHVPNlc3VE5NZkhQU0ExdURnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNDMyNTUwNjg2NTU3NzQ6MTNAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpHNGMrZ3VWY3ExV293K3VWamR6YmVtVlhkaURGaUE3TzlKdG5rZHBPUjgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQWdOIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3OTk0NTM4OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFON0YifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY DARK-ADEEL-MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true or false for auto voice reply
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/pf9a6s.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "DARK-ADEEL-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "DARK-ADEEL-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923174838990",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "DARK-ADEEL-MD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*📌 ᴘᴏᴡᴇʀ ʙʏ ᴍᴀғɪᴀ ᴀᴅᴇᴇʟ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/pf9a6s.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*DARK-ADEEL-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923174838990",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 
ANTI_CALL: process.env.ANTI_CALL || "false"
// make it true for auto call reject 
};
