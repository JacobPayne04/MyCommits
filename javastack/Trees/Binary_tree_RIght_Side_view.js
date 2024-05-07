var rightSideView = function(root) {
    if (!root) return []; // If the tree is completely null, return an empty array.

    let queue = [root]; // Initialize a queue with the root node.
    let res = []; // Initialize an array to store the result.

    // While the queue is not empty, iterate
    while (queue.length) {
        let updatedQueue = []; // Initialize a new queue for the next level.
        let lastVisited; // Initialize a variable to store the last visited node.

        // While not at the end of the current queue, iterate
        while (queue.length) {
            let cur = queue.shift(); // Dequeue the current node.
            if (cur.left) updatedQueue.push(cur.left); // Enqueue the left child, if it exists.
            if (cur.right) updatedQueue.push(cur.right); // Enqueue the right child, if it exists.
            lastVisited = cur; // Update the last visited node.
        }

        res.push(lastVisited.val); // Push the value of the last visited node to the result array.
        queue = updatedQueue; // Update the current queue to the updated queue for the next level.
    }

    return res; // Return the result array containing values of the rightmost nodes.
};
