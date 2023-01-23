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
