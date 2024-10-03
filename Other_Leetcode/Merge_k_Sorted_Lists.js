/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let arr = [];
    let dummy = new ListNode();

    for (let list of lists) {
        let cur = list;
        while (cur) {
            arr.push(cur.val)
            cur = cur.next;
        }
    }

    arr.sort((a, b) => a - b);

    let cur = dummy
    for (let num of arr) {
        let node = new ListNode(num);
        cur.next = node;
        cur = cur.next;
    }

    return dummy.next;
};