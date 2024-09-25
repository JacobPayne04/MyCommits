/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(head === null || head.next === null) return head;

    let slow = head;
    let fast = head;

    while(fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let h1 = head;
    let h2 = reverse(slow.next);
    slow.next = null;

    while(h2 !== null) {
       let nextNode = h1.next;
       let temp = h2.next;
       h1.next = h2;
       h2.next = nextNode;

       h2 = temp;
       h1 = nextNode;
    }

    return head;
};

var reverse = function(head) {
    let temp = head;
    let prev = null;
    while(temp !== null) {
        let after = temp.next;
        temp.next = prev;
        prev = temp;
        temp = after;
    }
    return prev;
}


// second attempt
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (head === null || head.next === null) return head// this is so if empty or 1 return the 1 or []

    let fast = head //starting fast and slow at the start
    let slow = head

    while (fast.next !== null && fast.next.next !== null) {// mvoing fast and slow to the end and the middle
        slow = slow.next
        fast = fast.next.next

    }

    let h1 = head// start h1 at head
    let h2 = reverse(slow.next)//start secondon list at slow.next
    slow.next = null

    //make slow.next point null to cut the tie from the first list
    while (h2 !== null) {// while second list isnt empty
        let nextNode = h1.next
        let temp = h2.next// we hold the next nodes in place

        h1.next = h2
        h2.next = nextNode

        h2 = temp// only missed where h1 and h2 are made thier next nodes
        h1 = nextNode


    }


    return head
};
// Helper function to reverse the second half of the list
var reverse = function (head) {
    let temp = head
    let prev = null
    while (temp !== null) {
        let after = temp.next
        temp.next = prev
        prev = temp
        temp = after
    }
    return prev
}
