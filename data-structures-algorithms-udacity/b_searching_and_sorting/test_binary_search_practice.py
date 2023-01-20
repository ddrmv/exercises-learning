from binary_search_practice import binary_search

def test_binary_search():
    test_list = [1,3,9,11,15,19,29]
    test_val1 = 25
    test_val2 = 15
    assert binary_search(test_list, test_val1) == -1
    assert binary_search(test_list, test_val2) == 4