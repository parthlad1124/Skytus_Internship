class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width
    
    def area(self):
        a = self.length * self.width
        print("Area of rectangle: ",a)

    def perimeter(self):
        p = 2 * (self.length + self.width)
        print("Preimeter of Rectangle: ",p)

rectangle = Rectangle(50,30)
rectangle.area()
rectangle.perimeter()