function get_words_from_phone_number(phone_number) {
    const digitToLetters = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };

    let results = [];

    function backtrack(index, path) {
        if (index === phone_number.length) {
            results.push(path);
            return;
        }

        const digit = phone_number[index];
        // Skip the loop if the digit is not found in the mapping (e.g., '1')
        if (!digitToLetters.hasOwnProperty(digit)) {
            backtrack(index + 1, path); // Proceed without adding any character for this digit
            return;
        }
        
        const letters = digitToLetters[digit];

        for (let c of letters) { // Use 'of' to iterate over characters of the string
            backtrack(index + 1, path + c);
        }
    }

    backtrack(0, "");
    return results;
}