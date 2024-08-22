/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    if (s.length !== t.length) return false

    let map = new Map()



    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            let count = map.get(s[i])
            map.set(s[i], count + 1)

        } else {
            map.set(s[i], 1)
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (map.has(t[i])) {

            let count = map.get(t[i])

            if (count >= 1) {

                map.set(t[i], count - 1)

            } else {

                return false
            }

        } else {
            return false
        }
    }



    return true

}

