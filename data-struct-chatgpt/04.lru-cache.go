package main

import "fmt"

func main() {
	fmt.Println("hello world")
	c := NewLRUCache(2)
	c.Put(1, 1)
	c.Put(2, 2)
	fmt.Println(c.Get(1)) // 1
	c.Put(3, 3)
	fmt.Println(c.Get(2)) // -1
	c.Put(4, 4)
	fmt.Println(c.Get(1)) // -1
	fmt.Println(c.Get(3)) // 3
	fmt.Println(c.Get(4)) // 4
}

type Node struct {
	key      int
	value    int
	next     *Node
	previous *Node
}

type LRUCache struct {
	capacity int
	mapping  map[int]*Node
	head     *Node
	tail     *Node
}

func NewLRUCache(capacity int) *LRUCache {
	headNode := &Node{}
	tailNode := &Node{}
	headNode.next = tailNode
	tailNode.previous = headNode
	newMapping := make(map[int]*Node)

	lruCache := &LRUCache{
		capacity,
		newMapping,
		headNode,
		tailNode,
	}

	return lruCache
}

func (lru *LRUCache) remove(node *Node) {
	node.previous.next = node.next
	node.next.previous = node.previous
}

func (lru *LRUCache) addToFront(node *Node) {
	node.next = lru.head.next
	node.previous = lru.head
	lru.head.next.previous = node
	lru.head.next = node
}

func (lru *LRUCache) Put(key int, value int) {
	node, found := lru.mapping[key]

	if found {
		node.value = value
		lru.remove(node)
		lru.addToFront(node)
		return
	}

	newNode := &Node{key: key, value: value}
	lru.mapping[key] = newNode
	lru.addToFront(newNode)

	if len(lru.mapping) > lru.capacity {
		lastNode := lru.tail.previous
		lru.remove(lastNode)
		delete(lru.mapping, lastNode.key)
	}
}

func (lru *LRUCache) Get(key int) int {
	node, found := lru.mapping[key]

	if !found {
		return -1
	}

	lru.remove(node)
	lru.addToFront(node)

	return node.value
}
