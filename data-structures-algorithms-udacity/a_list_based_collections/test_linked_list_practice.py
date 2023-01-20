from linked_list_practice import LinkedList, Element

def test_append():
    # Test cases
    # Set up some Elements
    e1 = Element(1)
    e2 = Element(2)
    e3 = Element(3)
    e4 = Element(4)

    # Start setting up a LinkedList
    ll = LinkedList(e1)
    ll.append(e2)
    ll.append(e3)

    assert ll.head.next.next.value == 3


def test_get_position():
    e1 = Element(1)
    e2 = Element(2)
    e3 = Element(3)
    e4 = Element(4)

    ll = LinkedList(e1)
    ll.append(e2)
    ll.append(e3)

    assert ll.get_position(3).value == 3

def test_insert():
    e1 = Element(1)
    e2 = Element(2)
    e3 = Element(3)
    e4 = Element(4)

    ll = LinkedList(e1)
    ll.append(e2)
    ll.append(e3)
    ll.insert(e4,3)

    assert ll.get_position(3).value == 4

def test_delete():
    e1 = Element(1)
    e2 = Element(2)
    e3 = Element(3)
    e4 = Element(4)

    ll = LinkedList(e1)
    ll.append(e2)
    ll.append(e3)
    ll.append(e4)
    ll.delete(2)
    assert ll.get_position(1).value == 1
    assert ll.get_position(2).value == 3
    assert ll.get_position(3).value == 4
