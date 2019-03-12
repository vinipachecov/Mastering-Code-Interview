
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {}; 
  }

  get(index) {
    return this.data[index];
  }
  
  push(item) {
    this.data[this.length] = item;    
    this.length += 1;
  }

  pop() {
    const lastItem = this.data[this.length -1];
    delete this.data[this.length -1];    
    this.length -=1;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for(let i = index; i < this.length - 1; i++) {
      //swap
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length-1];
    this.length-=1;
  }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('there')
newArray.push('!');
newArray.delete(0);
newArray.push("I'm joe");
newArray.push(",javascript is awesome!");
console.log(newArray);
newArray.delete(1);
