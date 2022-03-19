// HASH TABLE

const hash = (key, size)} => {
  let hashedKey = 0;
  for(let i = 0; i < key.length; i++) {
    hashedKey = key.charCeAt(i);
  }

  return hashedKey % size;
}

class HashTable {
  constructor() {
    this.size = 20
    this.buckets = Array(this.size)

    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map()
    }
  }

  insert(key, value) {
    let idx = hash(key, this.size)
    this.buckets[idx].set(key, value)
  }

  remove(key) {
    let idx = hash(key, this.size)
    let deleted = this.buckets[idx].get(key)
    this.buckets[idx].delete(key)
    return deleted
  }

  search() {
    let idx = hash(key, this.size)
    return this.buckets[idx].get(key)
  }
}

const HashTable = new HashTable();

HashTable.insert('serena', 'moon');
HashTable.insert('amy', 'mercury');
HashTable.insert('rei', 'mars');
HashTable.insert('lita', 'jupiter');
HashTable.insert('mina', 'venus');
HashTable.insert('darien', 'tuxedo mask');


