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

* [registrationData(['array of user Ids'])](#registrationData) - Access registration data of a guild and know which Discord user is linked to which Epic user.
* [addPlayerToQueue(userId)](#addPlayerToQueue) - Join a player into a custom game
* [blockUser(userId, options)](#blockUser) - Block a user from using Yunite on provided guild
* [blockEpic(epicId, options)](#blockEpic) - Block an epic account from using Yunite on provided guild
* [unblockUser(userId)](#unblockUser) - Unblock a user from Yunite on provided guild
* [unblockEpic(epicId)](#unblockEpic) - Unblock an epic account from Yunite on provided guild
* [listTournaments()](#listTournaments) - Get list of tournaments
* [tournamentLeaderboards(tournamentId)](#tournamentLeaderboards) - Get leaderboard of tournament
* [tournamentMatches(tournamentId)](#tournamentMatches) - Get list of matches in tournament
* [sessionLeaderboard(tournamentId, sessionId)](#sessionLeaderboard) - Get leaderboard of single match

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
