/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
var addTwoNumbers = function (l1, l2) {
    const dummy = new ListNode();// new list node to return for the anwser
    let cur = dummy;// have a iteratir "" for dumm node we just made

    let carry = 0;//carry value for adding 
    while (l1 || l2 || carry) {// while l1 or l2 or carry are not null/empty we keep this loop going "for a edge case/s"
        const v1 = l1 ? l1.val : 0;
        const v2 = l2 ? l2.val : 0;// if l1 or l2 is not empty then use its val and if it is empty then put a zero

        let val = v1 + v2 + carry;// add vals plus carr
        carry = Math.floor(val / 10);// now we use / 10 to derive the first number so instead of hte 
        val = val % 10;// we use modulo to derive the second number 
        cur.next = new ListNode(val);// we nmake another node with the cur val

        cur = cur.next;// iterating cur next
        l1 = l1 ? l1.next : null;//if they are not empty then continue but if it is the make it point to null signifing the end
        l2 = l2 ? l2.next : null;
    }

    return dummy.next;// retunr dummy .next wich is the start of the list 
};













