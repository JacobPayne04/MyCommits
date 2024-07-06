/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */


/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);

    let i = 0;
    for (let j = 0; j < trainers.length; j++) {
        if (i >= players.length) break; // Prevent out-of-bounds access
        if (players[i] <= trainers[j]) {
            i++;
        }
    }

    return i;
};

