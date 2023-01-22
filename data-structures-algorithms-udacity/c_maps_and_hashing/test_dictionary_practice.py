from dictionary_practice import print_locations

def test_print_locations(capfd):
    print_locations()
    out, err = capfd.readouterr()
    assert out == """1
Atlanta
Mountain View
2
Bangalore - India
Shanghai - China
"""