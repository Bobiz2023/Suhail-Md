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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_52_06_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzksXG4gICAgICAgIDM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDMxLFxuICAgICAgICAxODksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDg3LFxuICAgICAgICA2NixcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgyLFxuICAgICAgICA0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDkzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDczLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgxLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDY1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDYyLFxuICAgICAgICA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWURjc2xKbzJHZ0o0UzZpd1FRaitRdm5wajVnSklsazhTYlNqeEtvN2t1Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMTI2NDQ1MjM4MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgwQjMwMUJFNDc5MTJBOEVDNDMwMEY1QkZDRjM2Q0UyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzcxMDc1MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0c1A0LVVfWlRtdTlCWkthUTJHOVRBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVlMjJkYTBjLWQxNjAtNGFlMy04MDNmLTE1ZDVmOWEzZTFlNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICA4NSxcbiAgICAgIDIyNCxcbiAgICAgIDYyLFxuICAgICAgODAsXG4gICAgICAyMjIsXG4gICAgICAxMjYsXG4gICAgICAyNyxcbiAgICAgIDEwNSxcbiAgICAgIDExNixcbiAgICAgIDE5OCxcbiAgICAgIDEzLFxuICAgICAgMTksXG4gICAgICAyMzcsXG4gICAgICAyNTAsXG4gICAgICAzMCxcbiAgICAgIDg4LFxuICAgICAgMTkyLFxuICAgICAgMjIsXG4gICAgICA0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMSxcbiAgICAgIDExOCxcbiAgICAgIDE0MyxcbiAgICAgIDE1LFxuICAgICAgMTYxLFxuICAgICAgMTQ5LFxuICAgICAgNTcsXG4gICAgICA2NSxcbiAgICAgIDU3LFxuICAgICAgMTYyLFxuICAgICAgMTk1LFxuICAgICAgMzcsXG4gICAgICAxMyxcbiAgICAgIDMxLFxuICAgICAgMTcwLFxuICAgICAgMTUyLFxuICAgICAgNSxcbiAgICAgIDI0NixcbiAgICAgIDIyMixcbiAgICAgIDE3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQNlFUUDU3TlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjEyNjQ0NTIzODE0OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiYS4wYjAuY1wiLFxuICAgIFwibGlkXCI6IFwiMTQyMzA5ODE1NTMzNjgwOjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tqVGxKWUNFSlhmaUxNR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSDV0RnFvYTJPSnppWStBNXh5akhZTm9iMmprclhqY2ZUcnZvZmtlU2VpMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3MS9aWlNKQkJyQStvWFBYWWVqdm0vdWtuTHdDM1JqekNGRUdJYy9QemNXZ1E1SHNZclpRV3E0MGxNbVdKMkZoSzR5YkJyUVlzOFFyeUIxQzBpT0JEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFS09Gb0VuZUZmT21NZDZFeDM2ZE5tbkVBSy9SSnlocUh0ZTBRdlZGVi8rU2RIbzQyWk5ZZmw1Y1VzLzl1WjlZOTNabDZiSUUxK25qd295dVAvMFJCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMTI2NDQ1MjM4MTQ6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzcxMDc0NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUx4a1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHhrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiajJTTnVzVXVZNWZhdlo2NTg4K1JEOXA3Vjl6aHR6M0hnb0dzY20vNTY4bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1ODMzNDY2MDAsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDUsOF19LFwidGltZXN0YW1wXCI6XCIxNzE3NzAyMjAyODgxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
