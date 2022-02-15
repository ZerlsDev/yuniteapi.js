const fetch = require('node-fetch');
const config = require('../config.js');

module.exports = async function (teamId, tournamentId, authorization, guildId, playersArray) {
    let data = { "id": teamId, "players": []};

    if (playersArray.player1) { data.players.push(playersArray.player1);};
    if (playersArray.player2) { data.players.push(playersArray.player2);};
    if (playersArray.player3) { data.players.push(playersArray.player3);};
    if (playersArray.player4) { data.players.push(playersArray.player4);};

    console.log(JSON.stringify(data));

    return fetch(`https://yunite.xyz/api/v3/guild/${guildId}/tournaments/${tournamentId}/teams`, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Y-Api-Token': authorization
        },
    }).then(res => res.json()).then(async json => {
        return await json;
    }).catch(async error => {
        throw new Error(error);
    });
};