const Discord = require("discord.js");
const superagent = require("superagent");
const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args, level) => {
    
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);
    if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
  
    let hentaiEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Hentai")
    .setImage(body.url)
    .setFooter("Powered by nekos.life");


    message.channel.send(hentaiEmbed);

}

exports.conf = {
    aliases: [],
    permLevel: "User"
  };
    
  exports.help = {
    name: 'hentaigif',
    category: "NSFW",
    description: 'Get a gif of hentai.',
    usage: 'hentaigif'
  };