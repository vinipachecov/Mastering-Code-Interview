

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) %
      this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
      this.data[address].push([key,value]);        
  }    

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if(currentBucket) {
      for (let i = 0; i < array.length; i++) {        
        // check for the key
       if (currentBucket[i][0] === key) {
         // return the value
         return currentBucket[i][1];                   
       }
      }      
    } else {
      return undefined;
    }    
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      //  we want to loop all shelves 
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}


const myHashTable = new HashTable(50);
myHashTable._hash('grapes');
myHashTable.set('grapes', 1000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
console.log(myHashTable.keys());