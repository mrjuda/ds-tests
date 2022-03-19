// STACK
class Stack {
  constructor() {
    this.storage = {}
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }

  pop() {
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }

  peek() {
    return this.storage[this.size];
  }
}

// const stack = [];
const stack = new Stack();

// push
stack.push('dog');
stack.push('cat');
stack.push('bear');

console.log(stack);

// pop
stack.pop();

console.log(stack);

// peek
stack.peek();

console.log(stack);
