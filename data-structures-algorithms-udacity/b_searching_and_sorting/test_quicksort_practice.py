from quicksort_practice import quicksort

def test_quicksort():
    test = [21, 4, 1, 3, 9, 20, 25, 6, 21, 14]
    quicksort(test)
    assert test == [1, 3, 4, 6, 9, 14, 20, 21, 21, 25]