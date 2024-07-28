const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("255675233245")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '255675233245'
global.devs = '255675233245';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'dragon😘' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'dragon🌹🥰🤣🔒' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUFqQ29BeTdnVFVRaGZUYzk0YjU1TlZLOUJGMTRPZlN4UHg4SzgwV1NGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFZodkZQdU9HOXNubklUMUQzNmp0L0J4c0tvczdmdUZGdk1WVnN5Rjhocz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtR1l3ay84cDM2aDFWaUdUZ1JhN29mMlAyTm9DSXVqdjBmL0liRjVWeDNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTy8rRkgzKzdrWStvT3NTcmEzUTlOQmRKQ1ZraDhuazArRjIwOGN0STNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9GZVJWdG8rRlhhb3Q4MHJ2dDVDOXlQbHpROVFpMDZoeklPYmxNajZObDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhyNFNzb25ScWtMQWt0em56UisxRDJseUlPU05HMjMxRHNJUnNOY0VQbmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU93aG5TWHcvUk9YQ29CRmZXY2IxVU1LVXA4OVZSdzg0UWdwVDFoUGdGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1BWL1F3SDNDZzRRaWM4Z0YyamNGVlkyZUlDOVBSWk9JUmd2MlFEbkhnbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJpS3hpNlN5MUI3V2pJVGY1OVE0b1JRZ3RVbS9zRnJlSlJuUnFYbmNnL1ZSU0ZkUmw4RFl3Mm9DaXVJUmxxblZUZzA2OEVRWW41TU5nb3J0TWlXbEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQxLCJhZHZTZWNyZXRLZXkiOiI1N08yR2dFNlNHNkRzdzhyS3lIRjJFTmxCcVBuV25HcWQ1QkNDZjNRRTJNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOMDlLeGdXQlNydVFDdmRDR1piQXFRIiwicGhvbmVJZCI6Ijc2NTgxODU2LWM3ZGItNGI0ZC1hYTlhLTc3NWQ3MWI4MDVmMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBbWpuL3ZyVDQ4SU11SGlTRWZLYjBETjIzTVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEZEdGRmaHRxNldNMzBmcjNDVmpQSi9UZVlzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhXQkZQOE5NIiwibWUiOnsiaWQiOiIyNTU2NzUyMzMyNDU6MzNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0k3ZzJKb0dFT21UbTdVR0dCUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InRVdEJ5Nk03SXZnNjExbXU2cnBDbHN0RS90UkJWUGdIN0k5ZVM2US81ejQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImE3aE0rSTcvSEVVMlB6azBFMG5RK2pINFFYNWl6ZXowNDhreG56NUhJc1REeXhFYnJCNXVZV1Z5Z3VnbGZTdDNaaGw3VWI4dlJOY2hXMm8vTGgwZkRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqWjhwdHY1RjJLdVBSaERGclkwV09raHNJNHpFeHBWZEgzWGk5SklTeDJyaC9ENXpaMEdrUDQ4Tk9RQ25iVGRXZmJOME9FMWV4L3pWMGpPRTlnNzVCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTY3NTIzMzI0NTozM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiVkxRY3VqT3lMNE90ZFpydXE2UXBiTFJQN1VRVlQ0Qit5UFhrdWtQK2MrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMjA2NzEwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJidSJ9 : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'dragon' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'dragon' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '255' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '*' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'true' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true: process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
