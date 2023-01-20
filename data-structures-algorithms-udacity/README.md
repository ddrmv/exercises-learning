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