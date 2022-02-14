const { registrationData, blockUser, blockEpic, unblockUser, unblockEpic, addPlayerToQueue, listTournaments, tournamentLeaderboards, tournamentMatches, sessionLeaderboard, acssStatistics, singleTournament, listAllTournamentTeams, epicRegistrationData } = require('./functions');
const config = require('./config');

/**
 * @property {String} token Yunite API Token
 * @property {String} guildId Guild ID of API Token
 */
class YuniteAPI {
    /**
     * Main Class
     * @param {String} token Yunite Api Token\
     * @param {String} guildId Guild ID of API Token
     */
    constructor(token, guildId) {
        if (!token) throw new TypeError('No Yunite API Token Provided');
        if (!guildId) throw new TypeError('No Guild ID Provided')
        this._token = token;
        this._guildId = guildId;
    }

    /**
     * Get Registration Data
     * @param {Array} id The users id who you're getting registration data of
     */
    async registrationData(id = this.id) {
        if (!Array.isArray(id)) throw new TypeError('User Ids is an array');
        if (id.length === 0) throw new TypeError('No User Ids');
        return registrationData(id, this._token, this._guildId, config.endpoints.registration);
    }

    /**
     * Block User
     * @param {String} id User ID of the user you're blocking
     * @param {Object} options Block Options
     */
    async blockUser(id = this.id, options = this.options) {
        if (!id) throw new TypeError(`No User ID Provided`);
        if (!options) options = { reason: 'No Reason Provided', blockLinkedEpic: true };
        return blockUser(id, this._token, this._guildId, config.endpoints.block_user, options);
    }

    /**
     * Block Epic
     * @param {String} id Epic ID of the epic account you're blocking
     * @param {Object} options Block Options
     */
    async blockEpic(id = this.id, options = this.options) {
        if (!id) throw new TypeError(`No Epic ID Provided`);
        if (!options) options = { reason: 'No Reason Provided', blockLinkedUser: true };
        return blockEpic(id, this._token, this._guildId, config.endpoints.block_user, options);
    }

    /**
     * Unblock User
     * @param {String} id User ID of the user you're unblocking
     */
    async unblockUser(id = this.id) {
        if (!id) throw new TypeError(`No User ID Provided`);
        return unblockUser(id, this._token, this._guildId, config.endpoints.block_user);
    }

    /**
     * Unblock Epic
     * @param {String} id Epic ID of the epic account you're unblocking
     */
    async unblockEpic(id = this.id) {
        if (!id) throw new TypeError(`No Epic ID Provided`);
        return unblockEpic(id, this._token, this._guildId, config.endpoints.block_user);
    }

    /**
     * Add Player To Custom Game
     * @param {String} id User ID of the player you're adding to queue
     */
    async addPlayerToQueue(id = this.id) {
        if (!id) throw new TypeError('No User ID Provided');
        return addPlayerToQueue(id, this._token, this._guildId)
    }

    /**
     * Get list of tournaments
     */
    async listTournaments() {
        return listTournaments(this._token, this._guildId, config.endpoints.list_tournaments);
    }

    /**
     * Get list of tournaments
     * @param {String} id Tournament ID
     */
    async tournamentLeaderboards(tournamentId = this.id) {
        if (!tournamentId) throw new TypeError('No Tournament ID Provided');
        return tournamentLeaderboards(tournamentId, this._token, this._guildId);
    }

    /**
     * Get list of matches in tournament
     * @param {String} id Tournament ID
     */
    async tournamentMatches(tournamentId = this.id) {
        if (!tournamentId) throw new TypeError('No Tournament ID Provided');
        return tournamentMatches(tournamentId, this._token, this._guildId);
    }

    /**
     * Get leaderboard of a single match
     * @param {String} tournamentId Tournament ID
     * @param {String} sessionId Session ID
     */
    async sessionLeaderboard(tournamentId = this.tournamentId, sessionId = this.sessionId) {
        if (!tournamentId) throw new TypeError('No Tournament ID Provided');
        if (!sessionId) throw new TypeError('No Session ID Provided');
        return sessionLeaderboard(tournamentId, sessionId, this._token, this._guildId, config.endpoints.single_tournament_leaderboard);
    }

    /**
     * Get ACSS statistics
     * @param {Number} from The UNIX-timestamp of the from date 
     * @param {Number} to The UNIX-timestamp of the to date
     */
    async acssStatistics(from, to) {
        return acssStatistics(this._token, this._guildId, from, to);
    }

    /**
     * Get single tournament 
     * @param {String} tournamentId Tournament ID
     */
    async singleTournament(tournamentId = this.tournamentId) {
        if (!tournamentId) throw new TypeError('No Tournament ID Provided');
        return singleTournament(this._token, this._guildId, tournamentId);
    }

    /**
     * Get all teams in a tournament
     * @param {String} tournamentId Tournament ID
     */
     async listAllTournamentTeams(tournamentId = this.tournamentId) {
        if (!tournamentId) throw new TypeError('No Tournament ID Provided');
        return listAllTournamentTeams(this._token, this._guildId, tournamentId);
    }

    /**
     * Get Epic registration data
     * @param {Array} id The Epic users id who you're getting registration data of
     */
    async epicRegistrationData(id = this.id) {
        if (!Array.isArray(id)) throw new TypeError('User Ids is an array');
        if (id.length === 0) throw new TypeError('No User Ids');
        return epicRegistrationData(id, this._token, this._guildId, config.endpoints.registration);
    }
}

module.exports = YuniteAPI;
