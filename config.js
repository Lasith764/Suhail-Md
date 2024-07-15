const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_22_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDc3LFxuICAgICAgICA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUxLFxuICAgICAgICA0NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI3LFxuICAgICAgICA4MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDg3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1LFxuICAgICAgICA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgODgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQxLFxuICAgICAgICA4MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NixcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxODgsXG4gICAgICAgIDc5LFxuICAgICAgICAxOSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDc5LFxuICAgICAgICAzOSxcbiAgICAgICAgOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDksXG4gICAgICAgIDEyLFxuICAgICAgICAyNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMixcbiAgICAgICAgMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgOTIsXG4gICAgICAgIDgxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODYsXG4gICAgICAgIDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxODMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMck03bWpJQkhZTk95UWVDdW9tUG1VWUI3U0NTZVVLbkR5TFhXbVRBUlpFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoQmVhOHBPcFF6YW0xQWZkVElHSWJnXCIsXG4gIFwicGhvbmVJZFwiOiBcImE0ZjJlNDZjLWM3NTAtNGJjNy1hNDJlLWRhMzA4ZGEyN2UxY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICA4NSxcbiAgICAgIDIwOCxcbiAgICAgIDEwMixcbiAgICAgIDIxMixcbiAgICAgIDIzMSxcbiAgICAgIDg4LFxuICAgICAgMjM5LFxuICAgICAgOTAsXG4gICAgICAyMzMsXG4gICAgICAxNCxcbiAgICAgIDI5LFxuICAgICAgMjYsXG4gICAgICAyNDIsXG4gICAgICAxNixcbiAgICAgIDE0MyxcbiAgICAgIDEwNixcbiAgICAgIDEwMCxcbiAgICAgIDcwLFxuICAgICAgMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM3LFxuICAgICAgNDMsXG4gICAgICAzNixcbiAgICAgIDE2OSxcbiAgICAgIDEwNyxcbiAgICAgIDEyMCxcbiAgICAgIDE4NSxcbiAgICAgIDcyLFxuICAgICAgMTE2LFxuICAgICAgMTIyLFxuICAgICAgMTE3LFxuICAgICAgNTcsXG4gICAgICAyMTksXG4gICAgICAxNDgsXG4gICAgICAxMzMsXG4gICAgICAxOTYsXG4gICAgICAxNjAsXG4gICAgICAyMTMsXG4gICAgICAxNDUsXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWlZQM1Q5N1JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzg4MjMxMTY2OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiREVPWFwiLFxuICAgIFwibGlkXCI6IFwiNzA5NzkxMzI4OTEzMzI6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjMyOHFRQ0VPekUxTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzQnZBVnc5cnZWWjNHZG94eGszQVVDdG5TSzEwRm9OZkJaOGNkdVZkSmpvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtTZTZsSXdnRDl6UGlFamR4cGROWloyWlJOQTQyTEt3Nk10bENDSmcrT0dMSmgza2xmQjB5SGNyL1Y5NCtSSGxpQ0piQzNVUmhweXp1b0UrVDc4eEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNiUzB0QUttQkhLVmV4L0wyTFRiclFoRmFNbmdOR3NaL2JGTEY4NEtsMTcxOXU3WXJzVi9FdHM3dENrcG9ZenNybFFOM2pnME1MYVgya0l5V2lWbGdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzg4MjMxMTY2OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDQ5NzEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTlo3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOWjcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxMnJQZ1NMdkxrVmlqNFAvUGZqeHdiaC9iNHYrNm5aS2JKalZaSEsyT3hzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYxNDI1MTM1NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMDQ5NzE2NjMyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
