module.exports = {
    domain: 'yunite.xyz/api/v3',
    endpoints: {
        registration: '/guild/:guildId/registration/links',
        block_user: '/guild/:guildId/registration/blocks',
        custom_games: '/guild/:guildId/customs/current/join/:userId',
        list_tournaments: '/guild/:guildId/tournaments',
        tournaments_leaderboards: '/guild/:guildId/tournaments/:tournamentId/leaderboard',
        tournament_matches: '/guild/:guildId/tournaments/:tournamentId/matches',
        single_tournament_leaderboard: '/guild/:guildId/tournaments/:tournamentId/matches/:sessionId',
        appData: '/app'

    }   
};