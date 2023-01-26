class Node(object):
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BST(object):
    def __init__(self, root):
        self.root = Node(root)

    def insert(self, new_val):
        self.insert_helper(self.root, new_val)

    def search(self, find_val):
        return self.search_helper(self.root, find_val)
        
    def insert_helper(self, source, new_val):
        if new_val < source.value:
            if source.left:
                self.insert_helper(source.left, new_val)
            else:
                source.left = Node(new_val)
        if new_val > source.value:
            if source.right:
                self.insert_helper(source.right, new_val)
            else:
                source.right = Node(new_val)

    def search_helper(self, source, find_val):
        if source == None:
            return False
        if find_val == source.value:
            return True
        if find_val < source.value:
            return self.search_helper(source.left, find_val)
        else:
            return self.search_helper(source.right, find_val)