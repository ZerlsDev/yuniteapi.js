const fetch = require('node-fetch');
const config = require('../config.js');

module.exports = async function (teamId, tournamentId, authorization, guildId) {
    let data = { "id": teamId, "players": null, "disqualified": true};

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