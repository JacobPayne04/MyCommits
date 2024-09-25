/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0)
    dummy.next = head
   
    let fast = dummy
    let slow = dummy
   
    for(let i = 0; i < n;i++){
       fast = fast.next
    }
   
    while(fast.next !== null){
       fast = fast.next
       slow = slow.next
    }
   
   slow.next = slow.next.next
   
   return dummy.next
   
   
   };
   

   // second attempt was able to do it from understanding

   var removeNthFromEnd = function (head, n) {
      let dummy = new ListNode(0)// dummy list nodes where its tart wiht 0
      dummy.next = head// the next to the dummy 0 node is head
     
     let fast = dummy// fast and slow starting at the dummy head
     let slow = dummy
     
     for(let i = 0; i < n; i++){
         fast = fast.next// fast will move till n
     }
     
     while(fast.next !== null){//fast.next is not null we move fast adn slwo the same bc fast has already move n amount
         fast = fast.next
         slow = slow.next
     }
     slow.next = slow.next.next// connecting slow.next to the next nexst wihc is the node over hte nth node
     
     
     
     
     return dummy.next// returning dummy.next give the orginal head 
     };
     