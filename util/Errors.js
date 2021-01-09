module.exports = {
    embedBase: new (require('discord.js')).MessageEmbed({ title: 'Uh oh!', color: 16233177 }),
    errorResponses: {
        'Unknown': 'An unknown error occured whilst trying to run that command! Please try again in a few seconds.',
        'Generic': 'An error occured whilst running this command!',
        'GuildOnly': 'You\'re trying to use a guild-only command in a DM!',
        'AvatarUsage': 'Invalid usage.\nUsage: `a!avatar [member]`',
        'AvatarMember': 'I can\'t get the avatar of a someone who isn\'t in the server!',
        'CatNotFound': 'Unable to find a kitty!',
        'DogNotFound': 'Unable to find a puppy!',
        'GifUsage': 'Invalid usage.\nUsage: `a!gif <query>`',
        'GifQuery': 'Failed to find a gif that matched your query!',
        'SayUsage': 'Invalid usage.\nUsage: `a!say <text>`',
        'ChangelogUsage': 'Invalid usage.\nUsage: `a!changelog [version/--latest/--version=<version>]`',
        'BanPermission': 'You do not have permission to ban members!',
        'BanPermissionClient': 'I don\'t have permission to ban members!',
        'BanUsage': 'Invalid usage.\nUsage: `a!ban <member> [reason]`',
        'BanMember': 'Invalid user specified.\nUsage: `a!ban <member> [reason]`',
        'BanSelf': 'You can\'t ban yourself!',
        'BanSelfClient': 'I can\'t ban myself!',
        'BanImmune': 'The specified member is immune to bans!',
        'BanExisting': 'That user is already banned!',
        'KickPermission': 'You do not have permission to kick members!',
        'KickPermissionClient': 'I don\'t have permission to kick members!',
        'KickUsage': 'Invalid usage.\nUsage: `a!kick <member> [reason]`',
        'KickMember': 'Invalid user specified.\nUsage: `a!kick <member> [reason]`',
        'KickUnknown': 'You can\'t someone who isn\'t in the server!',
        'KickSelf': 'You can\'t kick yourself!',
        'KickSelfClient': 'I can\'t kick myself!',
        'KickImmune': 'The specified member is immune to kicks!',
        'MessagePermission': 'You don\'t have permission to manage messages!',
        'MessagePermissionSelf': 'I don\'t have permission to manage messages!',
        'PurgeUsage': 'Invalid usage.\nUsage: `a!purge <amount> [--silent|--anon]`',
        'PurgeAmount': 'Amount must be more than `1` and less than `100`\nUsage: `a!purge <amount> [--silent|--anon]`',
        'SoftbanUsage': 'Invalid usage.\nUsage: `a!softban <member> [reason]`',
        'SoftbanMember': 'Invalid user specified.\nUsage: `a!softban <member> [reason]`',
        'SoftbanSelf': 'You can\'t softban yourself!',
        'SoftbanSelfClient': 'I can\'t softban myself!',
        'SoftbanImmune': 'The specified member is immune to softbans!',
        'UnbanUsage': 'Invalid usage.\nUsage: `a!unban <member> [reason]`',
        'UnbanMember': 'Invalid user specified.\nUsage: `a!unban <member> [reason]`',
        'UnbanSelf': 'If you\'re here, you\'re not banned 🤔',
        'UnbanSelfClient': 'I\'m already unbanned!',
        'UnbanUnbanned': 'That user isn\'t banned!',
    },
    throw(type, destination) {
        if (!['DMChannel', 'TextChannel', 'NewsChannel'].includes(destination?.constructor?.name)) {
            throw new Error('Invalid destination type. Destination must be a valid channel object of type dm, text, or news.');
        } else if (!this.errorResponses[type]) {
            throw new Error(`Could not find error of type '${type ? type?.toString() : 'undefined'}'.`);
        }
        return destination.send(this.embedBase.setDescription(this.errorResponses[type]));
    },
};