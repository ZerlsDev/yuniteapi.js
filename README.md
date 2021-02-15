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
* [blockUser(userId, reason, options)](#blockUser) - Block users from using Yunite on provided guild
* [unblockUser(userId, reason)](#unblockUser) - Unblock users from Yunite on provided guild

## getUserStats(userId)
Return the users Elite Creative statistics
```js
elite.getUserStats('some user id').then((result => console.log(result)));
```

## getUserQueue(userId)
Returns information about the users queue (if they're queuing)
```js
elite.getUserQueue('some user id').then((result => console.log(result)));
```

## inGame(userId)
Whether or not the user is in an on going match
```js
elite.inGame('some user id').then((result => console.log(result)));
```

## getMatchByGameId(gameId)
Get a games statistics by it's game Id
```js
elite.getMatchByGameId('some game id').then((result => console.log(result)));
```

## getMatchByUserId(userId)
Get a games statistics by one of the players (either player 1 or 2) 
```js
elite.getMatchByUserId('some user id').then((result => console.log(result)));
```

## getTeamByTeamId(teamId)
Return information about a team by it's Id
```js
elite.getTeamByTeamId('some team id').then((result => console.log(result)));
```

## getTeamByUserId(userId)
Return information about a team by either the captain or member's Id
```js
elite.getTeamByUserId('some user id').then((result => console.log(result)));
```