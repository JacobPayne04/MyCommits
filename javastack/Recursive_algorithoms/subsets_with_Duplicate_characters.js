function get_distinct_subsets(s) {
    const results = [];
    const sortedS = s.split('').sort().join('');
    helper(sortedS, 0, '', results);
    return results;
}

function helper(s, idx, slate, results, excluded = null) {
    if (idx === s.length) {
        results.push(slate);
        return;
    }

    // exclusion
    // also exclude all other repetitions
    helper(s, idx + 1, slate, results, s[idx])
    if (s[idx] === excluded) {
        return;
    }
    // inclusion
    helper(s, idx + 1, slate + s[idx], results)
}
