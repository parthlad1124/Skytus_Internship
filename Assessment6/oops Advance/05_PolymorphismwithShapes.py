class Rectangle:
    def area(self):
        return 10 * 20

class Circle:
    def area(self):
        return 3.14 * 3**2

def calc_area(shape):
    print("Area: ",shape.area())

calc_area(Rectangle())
calc_area(Circle())