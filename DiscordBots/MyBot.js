const Discord = require('discord.js');
const client = new Discord.Client();

var means = ["Dumb", "Stupid", "Retarded", "Gei", "Stanky", "Poopy", "a turkey licker", "a bruh moment", "autistic", "james charles", "goose", "a tumour", "melon", "bucket", "Shut cho dum dum bubble gum belt buckle banana truphle huned kunucklenuckle skin tone chicken bone google chrome no home flip phone disowned ice cream cone post Malone garden gnome extra chromosome metronome dimmadome genome full blown monochrome student loan indiana jones overgrown flintstone x and y hormone friend zone sylvester stallone sierra leone autozone professionally seen silver patrone stone cheek bone alone cyclone homegrown jawbone postpone unknown mega phone un grown hydrozone moricone muscle tone safety stone microphone progenstarone mountain anemone boan groan allophone cyclacone ankle bone leave me alone Tik tok Knock Knock 12 O'Clock Plug walk Millie Rock Nighthawk pea cock Moon walk Engine block interlock penny stalk after talk alarm clock interspawk sour dock down the block poison hemlock Jay walk chalk walk hawk squak electrical shock metamorphic rock sedimentary rock my glock has a lock jack sack six pack lack around the track pack the snack in the crack kodak black backpack feedback attack a kodiak asma attack in my back data track maniac telephone rack in my stack bushwack dentist plaque bumper track heart attack smack hack tac quak quak flack pack in rack tippy tap slap the baseball cap frap trap nap gap zap trap lap whack back lap handicap weather map air sac comeback halfback knickknack bounce back hatchback look back macaque Pat back unstack clack similac megalomaniac trick or treat smell my feet tweet the girl on the main street complete concrete defeat take a seat neat meat eat athlete back seat blow doe flow borrow elbovw combo grow glow joe hoe snow throw willow audio gizmo show micro metro tobacco tornado torpedo free throw John Doe slow borrow torso templo woe cargo strow know the beau looking splatoon up"];

var obamapics = [];
var leaderboard = [];

obamapics["prism"] = 'https://i.kym-cdn.com/entries/icons/original/000/030/873/Screenshot_20.jpg';
obamapics["sphere"] = 'https://i.redd.it/wpaly0elyrw31.png';
obamapics["cube"] = 'https://i.redd.it/j2xa07cddcy31.png';
obamapics["cylinder"] = 'https://i.redd.it/wpgchmyaa6141.png';
obamapics["donut"] = 'https://preview.redd.it/csmuseb573541.png?width=948&format=png&auto=webp&s=81b44bdf47beafcd9ee0b76caa20ef23a2c75fb2';
obamapics["ultimate"] = 'https://i.redd.it/mm1ge6j3mk941.jpg';
obamapics["banana"] = 'https://i.redd.it/i30yo9zhbbo51.jpg';

var rps = [];

function rpswin(p1,p2) {
    if (p1 === "rock") {
        if (p2 === "rock") {
            return "Draw";
        } else if (p2 === "paper"){
            return p2;
        } else if (p2 === "scissors"){
            return p1;
        }
    } else if (p1 === "paper"){
        if (p2 === "rock") {
            return p1;
        } else if (p2 === "paper"){
            return "Draw";
        } else if (p2 === "scissors"){
            return p2;
        }
    } else if (p1 === "scissors"){
        if (p2 === "rock") {
            return p2;
        } else if (p2 === "paper"){
            return p1;
        } else if (p2 === "scissors"){
            return "Draw";
        }
    }
}

function at(member, message) {
    if ((member.user.bot) === false) {  
	    if (member.user !== message.author) {
		var iden = member.id
	    	message.channel.send(`<@${iden}>`);
	}
    } 
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function generateinsult(person) {
    var random = getRndInteger(1, means.length);
    var roast = means[random];
    var str1 = person.concat(" ur ");
    return str1.concat(roast);
}

client.on('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (message.content.substring(0,2) === "!r") {  
        var updatestring = message.content.substring(2);
        message.channel.send(reverseString(updatestring));
    } else if (message.content.substring(0,5) === "roast") {
        var person = message.content.substring(6);
        var updatestring = generateinsult(person);
        message.channel.send(updatestring);
    } else if (message.content.substring(0,5) === "obama") {
        if ((obamapics[(message.content.substring(6))]) === undefined) {
            message.channel.send("please send one of the following things: prism, sphere, cube, cylinder, donut, banana or ultimate");
        } else {
            var shape = message.content.substring(6);
            var image = obamapics[shape];
	    message.channel.send(" ", {files: [image]});
        }
    } else if (message.content === "!callbois") {
        const list = client.guilds.cache.get('675032518730317865'); 
        const members = list.members;
        list.members.cache.forEach(member => at(member, message)); 
    } else if (message.content.substring(0,3) === "rps") {
        if (message.mentions.members.first()) {
	    var starter = message.author;
	    var atuser = message.mentions.members.first().user;
            message.channel.send(` \`\`\` ${atuser.username} Would You Like to play against ${starter.username}?\`\`\``).then((msg) => {
		    var mesage = msg;
		    var playing;

		    var plr1c; 
		    var plr2c;
		    
		    msg.react('👍').then(r => {
			    msg.react('👎');
		    });

		    // First argument is a filter function
		    msg.awaitReactions((reaction, user) => user.id == atuser.id && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'), { time: 20000 }).then(collected => {

			if (collected.first().emoji.name == '👍') {
				var win;
				msg.edit(`\`\`\`${starter.username} is picking\`\`\``);

			    	starter.send("choose!").then((msg1) => {
					msg1.react('🗿').then(r => {
						msg1.react('📜');
						msg1.react('✂️');
					});

					// First argument is a filter function
					msg1.awaitReactions((reaction, user) => user.id == starter.id && (reaction.emoji.name == '🗿' || reaction.emoji.name == '📜' || reaction.emoji.name == '✂️'), { time: 20000 }).then(collected1 => {

						if (collected1.first().emoji.name == '🗿') {
							plr1c = "rock";
						} else if (collected1.first().emoji.name == '📜'){
							plr1c = "paper";
						} else if (collected1.first().emoji.name == '✂️'){
							plr1c = "scissors";
						}

						if (collected1.first().emoji.name == '🗿' || collected1.first().emoji.name == '📜' || collected1.first().emoji.name == '✂️') {
							msg.edit(`\`\`\`${atuser.username} is picking\`\`\``);

							atuser.send("choose!").then((msg2) => {
								msg2.react('🗿').then(r => {
									msg2.react('📜');
									msg2.react('✂️');
								});

								// First argument is a filter function
								msg2.awaitReactions((reaction, user) => user.id == atuser.id && (reaction.emoji.name == '🗿' || reaction.emoji.name == '📜' || reaction.emoji.name == '✂️'), { time: 20000 }).then(collected2 => {

									if (collected2.first().emoji.name == '🗿') {
										plr2c = "rock";
									} else if (collected2.first().emoji.name == '📜'){
										plr2c = "paper";
									} else if (collected2.first().emoji.name == '✂️'){
										plr2c = "scissors";
									}

									if (collected2.first().emoji.name == '🗿' || collected2.first().emoji.name == '📜' || collected2.first().emoji.name == '✂️') {
										if (plr2c !== undefined) {
											var winner;
											win = rpswin(plr1c,plr2c);
											message.channel.send(`\`\`\` ${starter.username} chose ${plr1c} and ${atuser.username} chose ${plr2c}\`\`\``)
											if (win === plr1c) {
											    msg.edit(`\`\`\`${starter.username} is the winner\`\`\``);
												winner = starter;
											} else if (win === plr2c){
											    msg.edit(`\`\`\`${atuser.username} is the winner\`\`\``);
											    winner = atuser;	
											} else if (win === "Draw"){
											    msg.edit("```Draw!```");
											}
											
											if (winner !== undefined) {
												if (leaderboard.winner === undefined) {
													leaderboard[winner.username] = 1;
												} else {
													leaderboard[winner.username] = leaderboard[winner.username] + 1;
												}
											}
										}
									}

								}).catch(() => {
									win = plr1c;
								});
							});
						}

					}).catch(() => {
						win = plr2c;
					});
				});
			} else {
			    message.channel.send('Game Cancelled');
			}

		    }).catch(() => {
		        message.channel.send('Game Cancelled');
		    });
	    });
            
        } else {
            message.channel.send('please @ someone to play');
        }
    } else if (message.content.substring(0,7) === "!leader") {
	for (var key in leaderboard) {
		message.channel.send(`\`\`\` ${key} : ${leaderboard[key]}\`\`\``);
	}
    }
});

client.login(process.env.BOTTOKEN);
