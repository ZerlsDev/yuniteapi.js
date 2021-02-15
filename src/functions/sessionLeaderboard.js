const fetch = require('node-fetch');
const config = require('../config.js');

module.exports = async function (tournamentId, sessionId, authorization, guildId) {
    return fetch(`https://${config.domain}/guild/${guildId}/tournaments/${tournamentId}/matches/${sessionId}`, {
        method: 'get',
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