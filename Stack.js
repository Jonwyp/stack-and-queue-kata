class Stack {
  constructor() {
    this.array = [];
  }

  push(...item) {
    [...item].forEach(item => {
      this.array.push(item);
    });
    return this.array;
  }
  pop() {
    return this.array.pop();
  }
  peek() {
    if (this.array.length === 0) {
      throw new Error("there iz nothinz to peekz");
    }
    const lastItem = this.array.length - 1;
    return this.array[lastItem];
  }
}

module.exports = Stack;
