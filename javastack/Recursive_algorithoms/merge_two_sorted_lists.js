
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1 || !list2) return list1 || list2

    let head

    if(list1.val < list2.val) {
        head = list1
        head.next = mergeTwoLists(list1.next, list2)

    } else {
        head = list2
        head.next = mergeTwoLists(list1, list2.next)
    }

    return head
};

//second solution

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Base cases: if one list is empty, return the other list
    if (!list1) return list2;
    if (!list2) return list1;

    // Recursive comparison of list nodes
    if (list1.val < list2.val) {
        // list1 node is smaller, so it should be part of the result
        list1.next = mergeTwoLists(list1.next, list2); // Recur with next of list1
        return list1;
    } else {
        // list2 node is smaller, so it should be part of the result
        list2.next = mergeTwoLists(list1, list2.next); // Recur with next of list2
        return list2;
    }
};
