from recursion_practice import get_fib

# 0, 1,1,2,3,5,8,13,21,34,55,89
def test_get_fib():
    assert get_fib(9) == 34
    assert get_fib(11) == 89
    assert get_fib(0) == 0