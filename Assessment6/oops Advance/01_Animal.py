class Animal:
    def sound(self):
        print("Animal makes sound")

class Dog(Animal):
    def sound(self):
        print("Dog Barks")

class Cat(Animal):
    def sound(self):
        print("Cat Meows")

d = Dog()
c = Cat()
d.sound()
c.sound()