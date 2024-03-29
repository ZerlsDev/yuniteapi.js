const fetch = require('node-fetch');
const config = require('../config.js');

module.exports = async function (id, authorization, guildId, endpoint) {
    let data = { "type": 'EPIC', 'userIds': id };
    return fetch(`https://${config.domain}${endpoint.replace(':guildId', `${guildId}`)}`, {
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