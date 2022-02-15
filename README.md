# yuniteapi.js

yuniteapi.js is a node.js API wrapper for Yunite allowing you to easily interact with their API.

# Installation
To install **yuniteapi.js**, run the following command into your terminal from your bot folder:

> Install yuniteapi.js:
>
>```
>npm install yuniteapi.js
>```

# Example Usage

```js
const YuniteAPI = require('yuniteapi.js');
const Yunite = new YuniteAPI('Yunite API Key', 'Guild ID');

Yunite.registrationData(['array of user Ids']).then((result => console.log(result)));
```

# Methods

* [registrationData(['array of user Ids'])](#registrationdataarray-of-user-ids) - Access registration data of a guild and know which Discord user is linked to which Epic user.
* [addPlayerToQueue(userId)](#addplayertoqueueuserid) - Join a player into a custom game
* [blockUser(userId, options)](#blockuseruserid-options) - Block a user from using Yunite on provided guild
* [blockEpic(epicId, options)](#blockepicepicid-options) - Block an epic account from using Yunite on provided guild
* [unblockUser(userId)](#unblockuseruserid) - Unblock a user from Yunite on provided guild
* [unblockEpic(epicId)](#unblockepicepicid) - Unblock an epic account from Yunite on provided guild
* [listTournaments()](#listtournaments) - Get list of tournaments
* [tournamentLeaderboards(tournamentId)](#tournamentleaderboardstournamentid) - Get leaderboard of tournament
* [tournamentMatches(tournamentId)](#tournamentmatchestournamentid) - Get list of matches in tournament
* [sessionLeaderboard(tournamentId, sessionId)](#sessionleaderboardtournamentid-sessionid) - Get leaderboard of single match
* [acssStatistics(from, to)](#acssstatistics) - Get ACSS statistics from Yunite on a provided guild
* [singleTournament()](#singletournamenttournamentid) - Get a single tournament
* [listAllTournamentTeams(tournamentId)](#listalltournamentteamstournamentid) - Get all teams in a tournament
* [epicRegistrationData(['array of user Ids'])](#epicRegistrationData) - Access registration data of a guild and know which Epic user is linked to which Discord user.
* [addTeamToTournament(tournamentId, epicId, discordId)](#addteamtotournamenttournamentid-epicid-discordid-1) - Add team to a tournament (only one of Epic or Discord Id needed)
* [disqualifyTeamFromTournament(teamId, tournamentId)](#disqualifyteamfromtournamentteamid-tournamentid) - Disqualifty a team from a tournament 
* [updateTeam(teamId, tournamentId, players)](#updateteamteamid-tournamentid-players) - Update players in a team in a tournament

## registrationData(['array of user Ids'])
Access registration data of a guild and know which Discord user is linked to which Epic user.
```js
Yunite.registrationData(['123456789123456789', '987654321987654321']).then((result => console.log(result)));
```

## addPlayerToQueue(userId)
Join a player into a custom game
```js
Yunite.addPlayerToQueue('123456789123456789').then((result => console.log(result)));
```

## blockUser(userId, options)
Block a user from using Yunite on provided guild
```js
Yunite.blockUser('123456789123456789', { reason: 'Test', blockLinkedEpic: true }).then((result => console.log(result)));
```

## blockEpic(epicId, options)
Block an epic account from using Yunite on provided guild
```js
Yunite.blockEpic('epicId', { reason: 'Test', blockLinkedUser: true }).then((result => console.log(result)));
```

## unblockUser(userId)
Unblock a user from Yunite on provided guild
```js
Yunite.unblockUser('123456789123456789').then((result => console.log(result)));
```

## unblockEpic(epicId)
Unblock an epic account from Yunite on provided guild
```js
Yunite.unblockEpic('epicId').then((result => console.log(result)));
```

## listTournaments()
Get list of tournaments
```js
Yunite.listTournaments().then((result => console.log(result)));
```

## tournamentLeaderboards(tournamentId)
Get leaderboard of tournament
```js
Yunite.tournamentLeaderboards('bd4e8807-629f-4820-9207-13d899e76a67').then((result => console.log(result)));
```

## tournamentMatches(tournamentId)
Get list of matches in tournament
```js
Yunite.tournamentMatches('bd4e8807-629f-4820-9207-13d899e76a67').then((result => console.log(result)));
```

## sessionLeaderboard(tournamentId, sessionId)
Get leaderboard of single match
```js
Yunite.tournamentMatches('bd4e8807-629f-4820-9207-13d899e76a67', '56acd6f7627a4763b1b38c58f3fe5169').then((result => console.log(result)));
```

## acssStatistics(<from>, <to>)
Get ACSS statistics from Yunite on a provided guild, optional from and to dates (UNIX-timestamp)
```js
Yunite.acssStatistics(1000, 2000).then((result => console.log(result)));
```

## singleTournament(tournamentId)
Get single tournmanet by ID
```js
Yunite.singleTournament('bd4e8807-629f-4820-9207-13d899e76a67').then((result => console.log(result)));
```

## listAllTournamentTeams(tournamentId)
Get all teams in a tournament
```js
Yunite.listAllTournamentTeams('bd4e8807-629f-4820-9207-13d899e76a67').then((result => console.log(result)));
```

## epicRegistrationData(['array of user Ids'])
Access registration data of a guild and know which Epic user is linked to which Discord user
```js
Yunite.epicRegistrationData(['123456789123456789', '987654321987654321']).then((result => console.log(result)));
```

## addTeamToTournament(tournamentId, epicId, discordId)
Add team to a tournament (only one of Epic or Discord Id needed)
```js
Yunite.addTeamToTournament('bd4e8807-629f-4820-9207-13d899e76a67', undefined, '987654321987654321').then((result => console.log(result)));
```

## disqualifyTeamFromTournament(teamId, tournamentId)
Disqualifty a team from a tournament 
```js
Yunite.disqualifyTeamFromTournament('75757394-906f-461e-b33f-b51534d2563f', 'bd4e8807-629f-4820-9207-13d899e76a67').then((result => console.log(result)));
```

## updateTeam(teamId, tournamentId, players)
Update players in a team in a tournament (only one of Epic or Discord Id needed)
```js
Yunite.updateTeam('75757394-906f-461e-b33f-b51534d2563f', 'bd4e8807-629f-4820-9207-13d899e76a67', {
    player1: {
        epicId: '1b17b72aaa36r579ebb47f832053cc30',
        discordId: '987654321987654321'
    },

    player4: {
        epicId: '1b17b72aaa36r579ebb47f832053cc30'
    }
}).then((result => console.log(result)));
```
