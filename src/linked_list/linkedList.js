import { Node } from "./utils/node";
import { defaultEquals } from "./utils/lodash";

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      // 保存头指针，不能变
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;

      // 会改变头指针
      // while(this.head.next !== null) {
      //     this.head = this.head.next
      // }
    }
    this.count++;
  }

  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }
    return null;
  }

  insert(element, index) {
    const node = new Node(element);
    if(index >= 0 && index < this.count) {
        if(index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            const previousNode = this.getElementAt(index - 1);
            // 插入先改变后面的 node 指向，再改前面的 node 指向
            node.next = previousNode.next;
            previousNode.next = node;
        }
        this.count ++;
        return true;
    }
    return false
  }

  removeAt(index) {
    // 先检验是否越界
    if (index >= 0 && index < this.count) {
      // 如果移除的是第一个，头指针后移
      if (index === 0) {
        this.head = this.head.next;
      } else {
        let previous,
          current = this.head;
        /**
         * 此处 i 不用 <= index。
         * head 指针后移 index 次，可以找到 current
         * current 赋值为第4项, 循环只需要走三次
         */
        for (let i = 0; i < index; i++) {
          // 先获取前面的节点
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return null;
  }
}
