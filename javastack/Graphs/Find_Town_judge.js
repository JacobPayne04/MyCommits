var findJudge = function(n, trust) {
    const getTrust = new Array(n + 1).fill(0);
    const giveTrust = new Array(n + 1).fill(0);

    for (const [a, b] of trust) {
        giveTrust[a]++;
        getTrust[b]++;
    }

    for (let i = 1; i <= n; i++) {
        if (giveTrust[i] === 0 && getTrust[i] === n - 1) {
        return i;
        }
    }

    return -1;
};