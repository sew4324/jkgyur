const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '^'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` `,"")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith('^bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "Emerald Bot";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('السيرفر', message.guild.name)
.addField('المرسل', message.author.username)
.addField('الرسالة', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});


client.on('message', message => {
     if (message.content === "T~help") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **T~ping** ' ,' **سرعة إتصال البوت** ')
.addField('     **T~id**  ' ,' **معلومــات عــن حســابــك** ')
.addField('     **T~say** ' , '**يكرر الكلام الذي تقولة**')
.addField('     **T~info** ' ,' ** معلومات عن السيرفر**')
.addField('     **T~avatar** ' , '**صورتك في الدسكورد أو صورة الشخص المذكور**')
.addField('     **معلومة** ' , '**لإظهار معلومة عشوائية**')
.addField('     **لإظهار بعض صور الحيوانات** ' ,' **حيوانات ** ')
.addField('     ** ** ' ,' ** ** ')
.addField('     ** ** ' ,' ** أوآمر الإدآرة ** ')
.addField('     **T~kick ** ' ,' ** للطرد  ** ')
.addField('     **T~bc ** ' ,' ** للبرودكاست ** ')
.addField('     **T~clear** ' , '**لـ مسح الشات** ')
.addField('     **T~roles** ' , '**لـ اظهار الرتب الخاصة في السيرفر** ')
.addField('للأستفسار أو الرد على أسئلتكم وأفكـــاركم كلمني على الديسكورد ' , '**! ҜṦẰ - KBOOSH - كبوش—Ƴ丅 0.3K#3128**')
.addField('**لدعوة البوت للسيرفر ..**' , '**https://discordapp.com/oauth2/authorize?client_id=345157648531849216&scope=bot&permissions=0**')
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});












client.login(process.env.BOT_TOKEN);
