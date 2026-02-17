class OutOfStockERROR(Exception):
    """Exception raised when an item is out of stock."""
    def __init__(self, item_name):
        self.item_name = item_name

    def __str__(self):
        return f"Sorry, the item '{self.item_name}' is out of stock."


# sample product inventory
product_inventory = {
    "apple": 10,
    "banana": 0,  # out of stock
    "orange": 5
}


def check_stock(item_name, requested_quantity):
    if item_name in product_inventory:
        available_quantity = product_inventory[item_name]

        if available_quantity < requested_quantity:
            raise OutOfStockERROR(item_name)
        else:
            # update stock after purchase
            remaining_quantity = available_quantity - requested_quantity
            product_inventory[item_name] = remaining_quantity

            print(f"{requested_quantity} {item_name}(s) purchased successfully.")
            print(f"Remaining stock of {item_name}: {remaining_quantity}")
            return True
    else:
        raise ValueError(f"Item '{item_name}' not found in inventory.")


# Example usage
try:
    item = "apple"
    quantity = 2
    check_stock(item, quantity)
except OutOfStockERROR as e:
    print(e)
except ValueError as ve:
    print(ve)
