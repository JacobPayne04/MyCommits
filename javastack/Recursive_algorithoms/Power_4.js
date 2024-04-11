/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    return isPower(n, false); // Invoke isPower function with initial value of false
};

function isPower(n, istrue) {
    if (n <= 0) {
        istrue = false; // Return false if n is less than or equal to 0
    } else if (n == 1) {
        istrue = true; // Return true if n is 1
    } else {
        if (n !== 1) {
            return isPower(n / 4, istrue); // Recursively call isPower with updated n value
        }
    }
    return istrue; // Return the value of istrue if none of the conditions are met
}


