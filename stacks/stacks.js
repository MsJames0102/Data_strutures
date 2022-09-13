//Notes:
//1.) a data structure with the some similiars functionality to a linked list or an array.
//2.) Analogy for stacks would be a stack of plates, just pile one on top of another, but you can only pick the plate on the top.
//3.) (FIFO - first in, first out).
//4.) Stacks has less functionality then linked list, design this way. You want to have data structures that only allows a few operations to be preformed on it.

// create a object


// create a stack
class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    pop() {// take one away
        
        let top = this.top
        if (this.length === 1) {
            this.top = null
            this.bottom = null
        } else {
            this.top = this.top.next
        }
        this.length--
        return top
    }

    push(data) {// to add one
        const node = new Node(data)

        if (!this.top) {
            this.top = node
            this.bottom = node
        } else {
            let temp = this.top
            this.top = node
            this.top.bottm = temp
        }
        this.length++
        return this
    }
}
const stack = new Stack();
    stack.push("waffle")
    stack.pop()

    console.log(stack)