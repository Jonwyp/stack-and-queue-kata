const Queue = require("./Queue");

describe("Queue", () => {
  it("should return 'There is no queue.' if dequeueing from an empty queue", () => {
    const myQueue = new Queue();
    expect(() => myQueue.deQueue()).toThrow(new Error("There is no queue."));
  });

  it("should return 'There is no queue.' if peeking an empty queue", () => {
    const myQueue = new Queue();
    expect(() => myQueue.peek()).toThrow(new Error("There is no queue."));
  });

  it("should return 'Queue limit reached.' if adding to a queue with limits", () => {
    const myQueue = new Queue();
    myQueue.setQueueLimit(1);
    myQueue.enQueue("Tom");
    expect(() => myQueue.enQueue("Jane")).toThrow(
      new Error("Queue limit reached.")
    );
  });

  it("should return name of people in queue when dequeueing", () => {
    const myQueue = new Queue();
    myQueue.enQueue("Tom");
    myQueue.enQueue("Jane");
    myQueue.enQueue("Peter");
    expect(myQueue.deQueue()).toEqual("Tom");
    expect(myQueue.deQueue()).toEqual("Jane");
    expect(myQueue.deQueue()).toEqual("Peter");
  });

  it("should return name of people in queue when dequeueing", () => {
    const myQueue = new Queue();
    myQueue.enQueue("Tom");
    myQueue.enQueue("Jane");
    myQueue.enQueue("Peter");
    expect(myQueue.peek()).toEqual("Tom");
  });
});
