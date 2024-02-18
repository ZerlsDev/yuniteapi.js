const fetch = require('node-fetch');
const config = require('../config.js');

module.exports = async function (authorization, guildId, from, to) {
    let url = `https://${config.domain}/guild/${guildId}/acss/stats?`;
    if (from) { url += `from=${from}&`; };
    if (to) { url += `to=${to}`; };

    return fetch(url, {
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