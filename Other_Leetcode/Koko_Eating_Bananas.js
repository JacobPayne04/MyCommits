function minEatingSpeed(piles, H) {
    // Helper function to determine if Koko can eat all bananas at a given speed
    function canEatAll(speed) {
      let time = 0;  // Initialize the total time spent eating
      for (let p of piles) {  // Iterate over each pile of bananas
        time += Math.ceil(p / speed);  // Calculate time needed for this pile and add to total time
      }
      return time <= H;  // Check if total time is within the allowed hours H
    }
  
    // Initialize the binary search range
    let l = 1;  // Minimum possible eating speed
    let r = Math.max(...piles);  // Maximum possible eating speed (biggest pile)
  
    // Perform binary search
    while (l < r) {
      const m = Math.floor((l + r) / 2);  // Calculate the middle point of current range
      if (!canEatAll(m)) {
        l = m + 1;  // If Koko can't eat all bananas at speed m, increase the speed
      } else {
        r = m;  // If Koko can eat all bananas at speed m, try a smaller speed
      }
    }
  
    // When l == r, we have found the minimum speed at which Koko can eat all bananas
    return l;
  }
  