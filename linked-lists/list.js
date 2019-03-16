class ListNode {
  constructor(val) {
    this.head = {
      data: val,
      next: null
    }            
  }

  prepend(val) {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
  }
}

const List = new ListNode(10);
List.prepend(5);
console.log(List);