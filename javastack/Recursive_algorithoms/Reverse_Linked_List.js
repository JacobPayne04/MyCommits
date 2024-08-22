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
var reverseList = function(head) {
    
    if(!head || !head.next) return head
    reversedPart=reverseList(head.next)
    head.next.next=head
    head.next=null
    return reversedPart
};


//second 
var reverseList = function (h) {

    var dfs = function (h) {
      if (!h) return h
      if (!h.next) return h
  
      const last = dfs(h.next)
      if (h.next) {
        h.next.next = h
        h.next = null
      }
      return last
    }
  
    return dfs(h)
  };
  v