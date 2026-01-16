class Laptop:
    def __init__(self, brand, price):
        self.brand = brand
        self.price = price

    def discount(self, percent):
        dis = self.price * percent / 100
        self.price -= dis
        print("Price after disocunt: ", self.price)

l1 = Laptop("ASUS",95000)
l1.discount(10)