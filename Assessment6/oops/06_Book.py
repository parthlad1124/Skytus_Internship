class Book:
    def __init__(self, title, author, price):
        self.title = title
        self.author = author
        self.price = price

    def display(self):
        print("Title: ", self.title)
        print("Author name: ", self.author)
        print("Price: ", self.price)

b1 = Book("Gitanjali","Rabindranath Tagore",500)
b1.display()
