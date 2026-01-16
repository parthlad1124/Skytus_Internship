class Shape:
    def draw(self):
        print("Draw a shape")

class Circle(Shape):
    def draw(self):
        print("Drawing Circle")

s = Shape()
c = Circle()
s.draw()
c.draw()