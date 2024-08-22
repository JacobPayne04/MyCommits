/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {

    // Sort the restaurants by rating (index 1) and then by id (index 0) if ratings are equal
    restaurants.sort((a, b) => {
        if (b[1] !== a[1]) {
            return b[1] - a[1]; // Sort by rating
        } else {
            return b[0] - a[0]; // Sort by id if ratings are equal
        }
    });

    let vfr = [];

    for (let restaurant of restaurants) {
        let id = restaurant[0];
        let rating = restaurant[1];
        let isVegan = restaurant[2];
        let price = restaurant[3];
        let distance = restaurant[4];

        if (veganFriendly === 0) {
            if (price <= maxPrice && distance <= maxDistance) {
                vfr.push(id);
            }
        } else if (veganFriendly === 1) {
            if (isVegan === 1 && price <= maxPrice && distance <= maxDistance) {
                vfr.push(id);
            }
        }
    }

    return vfr;
};





/**
push to a new array based on if its vegan friendly 

for(let i = 0; i < restaurants.length;i++){
    for(let j = restaurants[i]; j < restaurants[i];j++){
        if(resturants[i][isvegan] == veganFriendly && resturants[i][price] <= maxPrice && resturants[i][distance] <= maxDistance){
            arr.push(resturants(i))
        }
    }
}

    let id = restaurants[0]
    let rating = restaurants[1]
    let isVegan = restaurants[2]
    let price = restaurants[3]
    let distance = restaurants[4]


return arr.sort((a,b) => b[id] - a[id])

 */