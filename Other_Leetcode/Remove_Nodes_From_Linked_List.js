/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var removeNodes = function(head) {
    if(!head) {//base case when we reach the end 
        return head //return head to pop out of recursion
    }                       
    removeNodes(head.next)//move to the next node
    if(head.val < (head?.next?.val || 0)) {//if head.val is less then the next value
        head.val = head.next.val//then make the current node value we are one the value of the next node
        head.next = head.next.next//swapping head.val val to head.next.next.val skipping the smaller value bc this way it wont return in the list for answer
                                  
    }
    return head//popped out of recursion return linked list
};
                   
                  