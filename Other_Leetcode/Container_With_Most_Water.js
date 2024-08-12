var maxArea = function(height) {
    let left = 0;            // Left pointer starting from the leftmost edge
    let right = height.length - 1; // Right pointer starting from the rightmost edge
    let maxWater = 0;        // Initialize the maximum water capacity
    
    while (left < right) {
        // Calculate the width of the container
        let width = right - left;
        
        // Calculate the height of the container (the minimum height between the two lines)
        let h = Math.min(height[left], height[right]);
        
        // Calculate the water capacity of the current container
        let water = width * h;
        
        // Update the maximum water capacity if the current container holds more water
        maxWater = Math.max(maxWater, water);
        
        // Move the pointers towards each other
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
};