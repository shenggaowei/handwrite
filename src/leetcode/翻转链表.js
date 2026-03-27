/**
 * 时间复杂度o(n) n是链表的长度
 * 空间复杂度o(1) 
 */

var reverseList = function(head) {
    let current = head;
    let previous = null;
    while(current) {
        // 存储一下当前指针的下一个节点
        const next = current.next;
        // 当前节点的 next 指向前一个节点
        current.next = previous;
        // previous 指针后移
        previous = current;
        // current 指针后移
        current = next;
    }
    return previous
};