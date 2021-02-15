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
* [addPlayerToQueue(userid)](#addPlayerToQueue) - Join a player into a custom queue
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

## blockUser(userId)
Block a user from using Yunite on provided guild
```js
Yunite.blockUser('123456789123456789', { reason: 'Test', blockLinkedEpic: true }).then((result => console.log(result)));
```

## blockEpic(epicId)
Block an epic account from using Yunite on provided guild
```js
Yunite.blockEpic('epicId', { reason: 'Test', blockLinkedUser: true }).then((result => console.log(result)));
```
