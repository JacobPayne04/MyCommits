/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    let validStringsList = [];

    function findValidStrings(currentString, targetLength) {
        if (currentString.length === targetLength) {
            validStringsList.push(currentString);
            return;
        }

        let lastChar = currentString[currentString.length - 1];
        if (lastChar === '0') {
            findValidStrings(currentString + "1", targetLength);
        } else {
            // Both '1' and '0' can be added to the current string.
            findValidStrings(currentString + "1", targetLength);
            findValidStrings(currentString + "0", targetLength);
        }
    }

    // Find valid strings starting with '0' and '1'.
    findValidStrings("0", n);
    findValidStrings("1", n);

    return validStringsList;
};