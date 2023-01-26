from bst_practice import BST, Node

def test_search():
    tree = BST(4)
    tree.insert(2)
    tree.insert(1)
    tree.insert(3)
    tree.insert(5)

    assert tree.search(4) == True
    assert tree.search(6) == False