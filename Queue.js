class Queue {
  constructor() {
    this.queue = [];
    this.queueLimit = false;
  }

  enQueue(item) {
    if (this.queueLimit && this.queue.length >= this.queueLimit) {
      throw new Error("Queue limit reached.");
    }
    this.queue.push(item);
  }

  deQueue() {
    if (this.queue.length > 0) {
      return this.queue.shift();
    } else {
      throw new Error("There is no queue.");
    }
  }

  peek() {
    if (this.queue.length > 0) {
      return this.queue[0];
    } else {
      throw new Error("There is no queue.");
    }
  }

  setQueueLimit(queueLimit) {
    this.queueLimit = queueLimit;
  }
}

module.exports = Queue;
