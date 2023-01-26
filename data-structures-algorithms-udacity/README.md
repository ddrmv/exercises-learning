# Data Structures and Algorithms - Udacity - Notes

## List-based collections

### Arrays
ordered, with index

### Linked lists
ordered, no index, keep pointer/reference to next element  
doubly linked lists (both next and previous)  
null next if last

### Stacks
lifo  
push - add element  
pop - take element off  
both constant time

### Queues
fifo  
head - first(oldest) element  
tail - latest(newest) element  
enqueue() - add element at tail  
dequeue() - take element off head  
peek() - look at the head element but don't take it off  

deque - double-ended queue (enqueue and dequeue on both ends)  
can use deque as generalised stack or queue

priority queue - assign a priority on enqueue, dequeue element with highest priority

## Searching and sorting

### Binary search
O=log2(n) efficiency - search space halved every step

### Recursion
Needs initial condition (base case).  
The parameter needs to be updated.  
The function calls itself.

### Bubble sort
Constant space complexity, in-place sorting. O(n**2)

### Merge sort
Divide and conquer. O(n*log(n)), auxilliary space O(n)

### Quick sort
Using pivot. Worst case for near sorted arrays (recursion don't cut the array much).  
In place, O(nlog(n)).  
Different implenentations.
Pivot can be at start, end, middle, take median of range at end, etc.

## Maps and hashing

### Maps
Map = <key, value>  
The keys of a map are a Set.  
Lookups in constant time (1), not linear time (n).
A hash function takes a value and uses it to create a list index to the value.  
Collisions - solutions (with donsides): larger lists, buckets storing collections.  
Load factor = Number of entries / Number of buckets.

## Trees

### Trees info

Rood, nodes, fully connected, no cycles. Ancestor/descendant (parent/child) - levels.  
Siblinds, leaves.  Extenral node (leaf), internal node (intermediate).
Edges - connections.  
Pack - group of nodes.  
Height - distance from root to most distant leaf. A leaf has height of 0.  
Dept - distance to the root. Root has 0, first child 1.  

### Traversal

BFS - Breath First Search - Every node on same level before visiting child nodes.  
* Level order (a BFS) - Root, all level 1, all level 2 (convention is left to right)...  
DFS - Depth First Search - All clind nodes first.  
* Pre-order - Check off a parent immediately, before seeing its children.
* In-order - Check off a parent after checking its left child and coming back to it.
* Post-order - Check off a parent after checking all its children.

Binary tree - at most two children (0, 1 or 2).  
Perfect tree - each node has 2 children.  
Use helper recursive function plus starting-point function.

### Binary Search Tree (BST)
log(n)  
Unbalanced is worst case - lenear time O(n).  
