/* Problem 4: LRU Cache (very backend-relevant)

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(capacity int)

get(key int) int

return the value if the key exists, otherwise -1

marks the key as most recently used

put(key int, value int) void

insert/update the key-value

marks the key as most recently used

if capacity is exceeded, evict the least recently used item

Required: get and put must run in O(1) average time.

Example:

capacity = 2

put(1,1) cache: {1=1}

put(2,2) cache: {1=1, 2=2}

get(1) → 1 (now 1 is most-recent)

put(3,3) evicts key 2

get(2) → -1

put(4,4) evicts key 1

get(1) → -1

get(3) → 3

get(4) → 4 */

class Node {
  constructor(key, val) {
    this.key = key
    this.val = val
    this.prev = null
    this.next = null
  }
}

class LRUCache {
  constructor(capacity) {
    this.cap = capacity
    this.map = new Map()

    // dummy nodes
    this.head = new Node(0, 0) // MRU side
    this.tail = new Node(0, 0) // LRU side
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  _remove(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
  }

  _addToFront(node) {
    node.next = this.head.next
    node.prev = this.head
    this.head.next.prev = node
    this.head.next = node
  }

  get(key) {
    if (!this.map.has(key)) return -1
    const node = this.map.get(key)
    this._remove(node)
    this._addToFront(node)
    return node.val
  }

  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key)
      node.val = value
      this._remove(node)
      this._addToFront(node)
      return
    }

    const node = new Node(key, value)
    this.map.set(key, node)
    this._addToFront(node)

    if (this.map.size > this.cap) {
      const lru = this.tail.prev
      this._remove(lru)
      this.map.delete(lru.key)
    }
  }
}

// Quick test (matches prompt)
const c = new LRUCache(2)
c.put(1, 1)
c.put(2, 2)
console.log(c, "hello there")
console.log(c.get(1)) // 1
c.put(3, 3)
console.log(c.get(2)) // -1
c.put(4, 4)
console.log(c.get(1)) // -1
console.log(c.get(3)) // 3
console.log(c.get(4)) // 4
console.log(c, "yo")



class Node2 {
    constructor(key, val){
        this.key = key
        this.val = val
        this.prev = null
        this.next = null
    }
}

class LRUCache2{
    constructor(capacity){
        this.capacity = capacity
        this.map = new Map()

        // now we will actually create dummy nodes first, which is the first node and the last node
        this.head = new Node2(0, 0)
        this.tail = new Node2(0, 0)

        // the initial head's next is actually the last node
        this.head.next = this.tail
        // the previous node of the last node is actually the first node initially
        this.tail.prev = this.head
    }

    _remove(node){
        node.prev.next = node.next
        node.next.prev = node.prev
    }

    _addToFront(node){
        node.next = this.head.next
        node.prev = this.head
        this.head.next.prev = node
        this.head.next = node
    }

    put(key, value){
        if(this.map.has(key)){
            const node = this.map.get(key)
            node.val = value
            this._remove(node)
            this._addToFront(node)
            return
        }

        const newNode = new Node2(key, value)
        this._addToFront(newNode)
        this.map.set(key, newNode)
        if(this.map.size > this.capacity){
            const lru = this.tail.prev
            this._remove(lru)
            this.map.delete(lru.key)
        }
    }

    get(key){
        if(!this.map.has(key)){
            return -1
        }
        const node = this.map.get(key)
        this._remove(node)
        this._addToFront(node)

        return node.val
    }
}


console.log("-----------------------------------")

// Quick test (matches prompt)
const c2 = new LRUCache2(2)
c2.put(1, 1)
c2.put(2, 2)
console.log(c2, "hello there")
console.log(c2.get(1)) // 1
c2.put(3, 3)
console.log(c2.get(2)) // -1
c2.put(4, 4)
console.log(c2.get(1)) // -1
console.log(c2.get(3)) // 3
console.log(c2.get(4)) // 4
console.log(c2, "yo")


class Node3{
    constructor(key, value){
        this.key = key
        this.value = value
        this.next = null
        this.previous = null
    }
}

class LRUCache3 {
    constructor(capacity){
        this.capacity = capacity
        this.map = new Map()

        // now we will create a head and a tail for it
        this.head = new Node3(0, 0)
        this.tail = new Node3(0,0)

        this.head.next = this.tail
        this.tail.previous = this.head
    }

    _remove(node){
        node.previous.next = node.next
        node.next.previous = node.previous
    }

    _addToFront(node){
        node.next = this.head.next
        node.previous = this.head
        this.head.next.previous = node
        this.head.next = node
    }

    put(key, value){
        if(this.map.has(key)){
            // we might need to update the value as well
            const node = this.map.get(key)
            node.value = value
           this._remove(node)
           this._addToFront(node) 
           return
        }

        const newNode = new Node3(key, value)
        this._addToFront(newNode)
        this.map.set(key, newNode)

        if(this.map.size > this.capacity){
            const lru = this.tail.previous
            this._remove(lru)
            this.map.delete(lru.key)
        }
    }

    get(key){
        if(!this.map.has(key)){
            return -1
        }
        const node = this.map.get(key)
        this._remove(node)
        this._addToFront(node)
        return node.value
    }
}

const cache = new LRUCache3(2)
cache.put(1,1)
cache.put(2,2)
console.log(cache.get(1)) // 1
cache.put(3,3)
console.log(cache.get(2)) // -1
cache.put(4,4)
console.log(cache.get(1)) // -1
console.log(cache.get(3)) // 3
console.log(cache.get(4)) // 4
