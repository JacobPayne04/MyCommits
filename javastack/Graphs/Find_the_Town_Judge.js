/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let trustCounts = new Map();
    
    // Initialize trustCounts for every person
    for (let i = 1; i <= n; i++) {
        trustCounts.set(i, 0);
    }

    // Update trustCounts based on the trust array
    for (let [a, b] of trust) {
        trustCounts.set(a, trustCounts.get(a) - 1); // Person a trusts someone
        trustCounts.set(b, trustCounts.get(b) + 1); // Person b is trusted by person a
    }

    // Find the judge
    for (let [person, count] of trustCounts) {
        if (count === n - 1) {
            return person; // This person is trusted by n-1 people and trusts no one
        }
    }

    return -1; // No judge found
};

