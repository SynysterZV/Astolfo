module.exports.run = async (client, message, args) => {
    const { MessageEmbed } = require('discord.js'),
        config = require('../../config/config.json');
    if (!args[0] || args[0] == '12/3' || args[0] == 'v4-b048') {
        message.channel.send(
            new MessageEmbed()
                .setTitle('Changelog - December 3rd, 2020')
                .addField('(v4-b048) Internal changes', '- Cleaned up a bunch of code')
                .setFooter(`Astolfo ${config.version}`),
        );
    } else if (args[0] == '12/2' || args[0] == 'v4-b035' || args[0] == 'v4-b037' || args[0] == 'v4-b044') {
        message.channel.send(
            new MessageEmbed()
                .setTitle('Changelog - December 2nd, 2020')
                .addField('(v4-b045) Change GIF retrieval method', '- GIF commands now send files, not links')
                .addField('(v4-b037) GIF commands to v4', '- Upgraded gif commands to match v4style')
                .addField('(v4-b035) More GIFs', '- Implemented `v4gif` + `dog` and `v4cat`')
                .setFooter(`Astolfo ${config.version}`),
        );
    } else if (args[0] == '12/1' || args[0] == 'v4-b024' || args[0] == 'v4-b025' || args[0] == 'v4-b031') {
        message.channel.send(
            new MessageEmbed()
                .setTitle('Changelog - December 1st, 2020')
                .addField('(v4-b031) Avatar command', '- Implemented ~~v3avatar~~ `v4avatar` complete\n- Fixed a few bugs with using no args')
                .addField('(v4-b025) Patch', '- Fixed error with `upcoming` and `changelog` not sending')
                .addField('(v4-b024) v4 Ban/Kick commands + changelog', '- Ban and kick commands finally polished;\n- `changelog` and `upcoming` added to track bot changes')
                .setFooter(`Astolfo ${config.version}`),
        );
    } else {
        return message.channel.send(
            new MessageEmbed()
                .setColor('#f7b2d9')
                .setTitle('Uh oh!')
                .setDescription('Cannot find that date or version number.'),
        );
    }
};