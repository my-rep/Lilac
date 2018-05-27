const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
//All Fields are Optional Pick Any some
const UserInfo = new Discord.MessageEmbed()
exports.run = function(client, message, args, level) {
let target = message.mentions.users.first();
const UserInfo = new Discord.MessageEmbed()
.setTitle('UserInfo')
.setColor('RANDOM') //You Can Use HexColour Ex:- #000000


.addField('Avatar', message.author.avatar, true) //The ID of the user's avatar //Inline True or false
.addField('AvatarURL', message.author.avatarURL({
    format: 'png'
}), true) //{options} options are Size?: 128 | 256 | 512 | 1024 | 2048, Format?: "webp" | "png" | "jpg" | "gif" //.defaultAvatarURL() A link to the user's default avatar //.displayAvatarURL() A link to the user's avatar if they have one. Otherwise a link to their default avatar will be returned
.addField('AvatarURL', message.author.avatarURL({
    size: '2048'
}), true)
.addField('Bot', message.author.bot, true) //Returns True If Message Author = Bot || False If Message Author not Bot.
.addField('Created At', message.author.createdAt, false) //The time the user was created || .createdTimestamp - The timestamp the user was created at
.addField('Discrim', message.author.discriminator, true) //A discriminator/tag based on username for the user Ex:- 0001
.addField('DMChannel', message.author.dmChannel) //The DM between the client's user and this user || If Nothing Returns "Null"
.addField('ID', message.author.id) //The ID of the User/author
.addField('Last Message', message.author.lastMessage) //The Message object of the last message sent by the user, if one was sent
.addField('Last Message ID', message.author.lastMessageID) //The ID of the last message sent by the user, if one was sent
.addField('Presence', message.author.presence) //The presence of this user
.addField('Presence Status', message.author.presence.status) //The presence status of this user
.addField('Presence Game', message.author.presence.activity.name) //The presence Game of this user
.addField('Tag', message.author.tag) //The Discord "tag" for this user || Ex:- Sai Chinna#6718
.addField('Username', message.author.username) //The username of the user || Ex:- Sai Chinna
//.addField('Nick Name', message.guild.member(target).displayName) //Nick Name In That (message sent) server || Define target as message Author Ex:- let target = message.author; || Add This Line in Top

.setFooter('Requested By', message.author.tag) //Change To Anything As You Wish
.setTimestamp() //The timestamp of this embed

message.channel.send(UserInfo);
}


exports.conf = {
    aliases: [],
    permLevel: "User"
  };
    
  exports.help = {
    name: 'userinfo',
    description: 'Userinfo <user>.',
    usage: 'userinfo'
  };
