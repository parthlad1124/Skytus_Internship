class Circle:
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        a = 3.14 * self.radius * self.radius
        print("Area of Circle: ", a)

    def circumference(self):
        c = 2 * 3.14 * self.radius
        print("Circumference of Circle: ", c)

circle = Circle(5)
circle.area()
circle.circumference()