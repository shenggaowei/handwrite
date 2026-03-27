/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 时间复杂度 o(n) 空间复杂度 o(n)
 */
var isPalindrome = function(head) {
    let list = [], current = head;
    while(current) {
        list.push(current.val)
        current = current.next;
    }
    let pl = 0, pr = list.length - 1;
    while(pl < pr) {
        if(list[pl] !== list[pr]) {
            return false
        }
        pl ++;
        pr --;
    }
    return true
};