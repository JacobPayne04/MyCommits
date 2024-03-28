/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let cur = head;
     let prev = null;
     let next;
 
     while (cur !== null) {
         next = cur.next;
         
         if (cur.val === val) {
             // Node to be removed is found, update pointers to skip it
             if (prev !== null) {
                 prev.next = next; // Skip over the current node
             } else {
                 head = next; // If the head itself needs to be removed
             }
             cur = next; // Move to the next node
         } else {
             prev = cur; // Move prev forward if the current node's value is not the target value
             cur = next; // Move cur forward
         }
     }
 
     return head;
 };
 
 
 