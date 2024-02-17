class MyStack {
    private items: number[];
    constructor() {
        this.items = []
    }

    push(x: number): void {
        this.items.push(x)
    }

    pop(): number | undefined {
        return this.items.pop()
    }

    top(): number {
        return this.items[this.items.length - 1]
    }

    empty(): boolean {
        return this.items.length === 0
    }
}


function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const helperStack = new MyStack();
    let nextGreaterElements = new Map()

    for (let i = nums2.length - 1; i >= 0; i--) {
        let el = nums2[i]
        if (helperStack.empty()) {
            helperStack.push(el);
            nextGreaterElements.set(nums2[i], -1)
            continue;
        }

        // else remove all elements < el
        while (!helperStack.empty()) {
            if (helperStack.top() > el) {
                nextGreaterElements.set(nums2[i], helperStack.top())
                helperStack.push(el)
                break
            } else {
                helperStack.pop()
            }
        }
        if (helperStack.empty()) {
            nextGreaterElements.set(nums2[i], -1)
            helperStack.push(el)
        }
    }
    for (let j = 0; j < nums1.length; j++) {
        nums1[j] = nextGreaterElements.get(nums1[j])

    }
    return nums1
};
let nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]

console.log(nextGreaterElement(nums1, nums2))