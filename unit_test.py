import unittest

# Import or include the buggy function here
def square(number):
    return number + number  # intentional bug


class TestSquareFunction(unittest.TestCase):

    # Test with valid positive number
    def test_positive_number(self):
        self.assertEqual(square(4), 16, "Square of 4 should be 16")

    # Test with zero
    def test_zero(self):
        self.assertEqual(square(0), 0, "Square of 0 should be 0")

    # Test with negative number
    def test_negative_number(self):
        self.assertEqual(square(-3), 9, "Square of -3 should be 9")

    # Test invalid input (string)
    def test_invalid_input(self):
        with self.assertRaises(TypeError):
            square("5")


if __name__ == "__main__":
    unittest.main()
