class Shop:
    def __init__(self):
        self.products = []
    
    def add_product(self, product):
        self.products.append(product)

    def list_products(self):
        print("Products in shop: ")
        for p in self.products:
            print("-", p)

shop = Shop()
shop.add_product("Bottle")
shop.add_product("Tiffin Box")
shop.list_products()