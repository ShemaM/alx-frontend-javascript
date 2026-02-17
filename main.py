class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def total_value(self):
        # Optional: print for debugging
        # print(f"Calculating total value for product {self.name}")
        return self.price * self.quantity

product_name = input("Enter product name: ")
product_price = float(input("Enter product price: "))
product_quantity = int(input("Enter product quantity: "))

product = Product(product_name, product_price, product_quantity)
total = product.total_value()
print(f"Total value of {product.name}: {total}")