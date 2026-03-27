/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 使用hash表存储链表节点。
 * 遍历 headA，讲 headA 中的每个节点加入哈希集合中，然后遍历 headB，对于遍历到的每个节点，判断该节点是否在哈希集合中。
 * 如果不在，继续遍历下一个节点
 * 如果当前节点在哈希集合中，则后面的节点都在哈希集合中，即从当前节点开始的所有节点都在两个链表的相交部分，因此在链表 headB 中遍历到的第一个在哈希集合中的节点就是两个链表相交的节点，返回该节点。
 * 如果链表 headB 中的所有节点都不在哈希集合中，则两个链表不相交，返回 null。
 * 
 * 时间复杂度 o(m+n)
 * 空间复杂度 o(m)
 */
var getIntersectionNode = function(headA, headB) {
    let temp = headA
    let setList = new Set()
    /**
     * 需要遍历每一个节点
     * 如果 while(temp.next !== null) 循环内会取不到最后一个节点，导致少 add 一个数据
     */
    while(temp !== null) {
        setList.add(temp)
        temp = temp.next
    }
    temp = headB
    while(temp !== null) {
        if(setList.has(temp)) { return temp }
        temp = temp.next
    }
    return null;
};


/**
 * m链表：a+c n链表：b+c
 * 相交：a+c+b = b+c+a Pa===pb
 * 不相交：a+c+b+c = b+c+a+c Pa===pb = null;
 * 时间复杂度是 o(m+n)
 * 空间复杂度： o(1)
 */
var getIntersectionNode = function(headA, headB) {
    let pA = headA;
    let pB = headB;
    while(pA !== pB) {
        // warning 注意头指针是 headA 和 headB，不是 pA 和 pB
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA
};