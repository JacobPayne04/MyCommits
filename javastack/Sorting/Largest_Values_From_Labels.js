/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */






var largestValsFromLabels = function(values, labels, numWanted, useLimit) {
    // Initialize variables
    let numbersUsed_count = 0;
    let map = new Map();
    let sum = 0;

    // Create an array of objects with value and label, then sort by value in descending order
    const pairedArray = values.map((value, index) => ({
        val: value,
        label: labels[index]
    })).sort((a, b) => b.val - a.val);

    // Iterate through the sorted array
    for (let i = 0; i < pairedArray.length; i++) {
        const { val, label } = pairedArray[i];

        // Check if we have already used enough numbers
        if (numbersUsed_count < numWanted) {
            // Check if the label is already in the map and if we can use it again
            if (map.has(label)) {
                let count = map.get(label);
                if (count < useLimit) {
                    map.set(label, count + 1); // Increment the label count in the map
                    sum += val; // Add the value to the sum
                    numbersUsed_count++; // Increment the count of numbers used
                }
            } else {
                map.set(label, 1); // Initialize the label count in the map
                sum += val; // Add the value to the sum
                numbersUsed_count++; // Increment the count of numbers used
            }
        } else {
            break; // If we've used enough numbers, exit the loop
        }
    }

    return sum; // Return the total sum
};
