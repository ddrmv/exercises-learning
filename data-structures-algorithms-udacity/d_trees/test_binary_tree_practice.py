from binary_tree_practice import BinaryTree, Node

def test_search():
    tree = BinaryTree(1)
    tree.root.left = Node(2)
    tree.root.right = Node(3)
    tree.root.left.left = Node(4)
    tree.root.left.right = Node(5)

    assert tree.search(4) == True
    assert tree.search(6) == False
    assert tree.print_tree() == "1-2-4-5-3"