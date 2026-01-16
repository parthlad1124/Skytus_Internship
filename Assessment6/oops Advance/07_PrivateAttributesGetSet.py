class Person:
    def __init__(self):
        self.__age = 0  # private

    def set_age(self, age):
        self.__age = age

    def get_age(self):
        return self.__age

p = Person()
p.set_age(21)
print("Age: ", p.get_age())