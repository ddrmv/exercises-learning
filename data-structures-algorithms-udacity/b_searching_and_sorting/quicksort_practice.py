"""Implement quick sort in Python.
Input a list.
Output a sorted list."""

def partition(array, start, end):
    i = start
    pivot = end
    while True:
        if array[i] >= array[pivot]:
            array[i], array[pivot-1], array[pivot] = array[pivot-1], array[pivot], array[i]
            pivot-=1
        else:
            i+=1
        if i>=pivot:
            return pivot

def quicksort_recursion(array, start, end):
    if start < end:
        pivot = partition(array, start, end)
        quicksort_recursion(array, start, pivot-1)
        quicksort_recursion(array, pivot+1, end)

def quicksort(array):
    quicksort_recursion(array, 0, len(array)-1)
    return array