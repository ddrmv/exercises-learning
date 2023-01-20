"""You're going to write a binary search function.
You should use an iterative approach - meaning
using loops.
Your function should take two inputs:
a Python list to search through, and the value
you're searching for.
Assume the list only has distinct elements,
meaning there are no repeated values, and 
elements are in a strictly increasing order.
Return the index of value, or -1 if the value
doesn't exist in the list."""

def find_new_half(start, end):
    return start + ((end - start) // 2)

# this code fails on udacity due to type hints, passes without them
def binary_search(input_array: list, value: int):
    start: int = 0
    end: int = len(input_array) - 1
    half: int = find_new_half(start, end)
    while True:
        if input_array[half] == value:
            return half
        else:
            if value < input_array[half]:
                end = half
                half = find_new_half(start, end)
            else:
                start = half
                half = find_new_half(start, end)
        if half == start or half == end:
            return -1
