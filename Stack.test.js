const Stack = require("./Stack");

describe("Stack", () => {
  const myStack = new Stack();
  it("should return 'there iz nothinz to peekz' when nothing to peek", () => {
    expect(() => myStack.peek()).toThrow(
      new Error("there iz nothinz to peekz")
    );
  });

  it("should return undefined when nothing to remove", () => {
    const currentStack = myStack.pop();
    expect(currentStack).toEqual(undefined);
  });

  it("should take in an item and add it to the stack", () => {
    const currentStack = myStack.push(1, 2, 10);
    expect(currentStack).toEqual([1, 2, 10]);
  });

  it("should take in an item and add it to the stack", () => {
    const currentStack = myStack.push();
    expect(currentStack).toEqual([1, 2, 10]);
  });

  it("should return and remove last item when pop", () => {
    const lastItemRemoved = myStack.pop();
    expect(lastItemRemoved).toEqual(10);
    expect(myStack.array).toEqual([1, 2]);
  });

  it("should return last item when peek", () => {
    const lastItemInStack = myStack.peek();
    expect(lastItemInStack).toEqual(2);
  });

  it("should return popped item sequentially from the end of the array", () => {
    const lastItemInStack = myStack.push(1, 2, 3);
    expect(myStack.pop()).toEqual(3);
    expect(myStack.pop()).toEqual(2);
    expect(myStack.pop()).toEqual(1);
  });
});
