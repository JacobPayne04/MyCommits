/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
    // Step 1: Extract and sort unique food items
    let foodItemsSet = new Set();
    for (let order of orders) {
        foodItemsSet.add(order[2]);
    }
    let foodItems = Array.from(foodItemsSet).sort();

    // Step 2: Create a map to track orders by table
    let tableMap = new Map();

    for (let order of orders) {//going through each order
        let tableNumber = order[1];//the table number is = to order at index 1
        let foodItem = order[2];//the food item is order at index 2

        if (!tableMap.has(tableNumber)) { // if the table map doesnt have the table number
            tableMap.set(tableNumber, new Map());// set the table number with an food items map
        }

        let foodCountMap = tableMap.get(tableNumber);// get the food items map for that table
        if (!foodCountMap.has(foodItem)) {// if the item is not in the food item map
            foodCountMap.set(foodItem, 0);// set the food item and the count
        }

        foodCountMap.set(foodItem, foodCountMap.get(foodItem) + 1);//we set food count map of hte food and add to its count when we see it
    }

    // Step 3: Build the display table
    let result = [];//res array

    // Header row
    let header = ["Table", ...foodItems];//head is string of table and all food items that are already sorted
    result.push(header);//pushing header into results

    // Rows for each table, sorted by table number
    let tableNumbers = Array.from(tableMap.keys()).sort((a, b) => Number(a) - Number(b));// sort the table in ascending order

    for (let tableNumber of tableNumbers) {//
        let row = [tableNumber];// new row for each table
        let foodCountMap = tableMap.get(tableNumber);// referencing the items map in the table map

        for (let foodItem of foodItems) {//for every food items in fooditems we push the food item and its count but if it has no count set it to 0
            row.push(foodCountMap.get(foodItem) ? String(foodCountMap.get(foodItem)) : "0");//
        }

        result.push(row);// push the row for that table into the results array
    }

    return result;// return the results array
};

