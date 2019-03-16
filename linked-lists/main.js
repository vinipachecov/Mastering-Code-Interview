
// 10 --> 5-->16

let aLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
         next: null
      }
    }
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    };    
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {    
    const newNode = {
      next: null,
      value
    };
    this.tail.next = newNode;
    this.tail = newNode;    
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value,
      next: null
    };    
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode.next !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    // check params
    if(index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value,
      next: null
    };
    const leader = this.traverseToIndex(index);
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(2);
myLinkedList.insert(200,99);
console.log(myLinkedList)
console.log(myLinkedList.printList());
