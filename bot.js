const Discord = require('discord.js');
const { prefix, token} = require('./config.json')
const client = new Discord.Client();

// Junior is a homo
client.once('ready', () => {
	console.log('Ready!');
});

// List of 'Boofers'
var booflist = [];
// Basic Test Command
client.on('message', message => {
	// Tells people to stop boofing
  if(message.content.startsWith(`${prefix} boof`)) {
		message.channel.send("STOP BOOFING!")

	// Describes what the bot does
	} else if(message.content.startsWith(`${prefix} info`)) {
			message.channel.send("A bot which adds and removes users to the 'boofer list'.")

	// Adds a user to the 'booflist'
	} else if(message.content.startsWith(`${prefix} add`)) {
			let member = message.mentions.members.first();
				message.channel.send("User " + member + " is a boofer")
				booflist.push(member)

	// Prints out the users in the 'booflist'
	} else if(message.content.startsWith(`${prefix} list`)) {
			message.channel.send("The following are boofers: " + booflist)

	// Removes a user from the 'booflist'
	} else if(message.content.startsWith(`${prefix} remove`)) {
			let member = message.mentions.members.first();
				message.channel.send("User " + member + " is no longer a boofer")
				booflist.splice(member)

	} else if(message.content.startsWith(`${prefix} twitch`)) {
				message.channel.send("Follow twitch.tv/PixelStrafe and twitch.tv/onedenseboy")

	}
})


client.login(token);
