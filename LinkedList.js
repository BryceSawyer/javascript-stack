const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    if (this.head) {
      newHead.setNextNode(this.head);
    }
    this.head = newHead;
  }

  removeHead() {
    if (!this.head) return null;
    const removedHead = this.head;
    if (removedHead.getNextNode) {
      this.head = removedHead.getNextNode();
    }
    return removedHead.data;
  }

}

module.exports = LinkedList;
