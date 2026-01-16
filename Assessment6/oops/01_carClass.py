class Car:
    def __init__(self, brand, model, speed):
        self.brand = brand
        self.model = model
        self.speed = speed
    
    def accelerate(self, increase):
        self.speed += increase
        print("Speed after acceleration: ", self.speed)

    def brake(self, decrease):
        self.speed -= decrease
        print("Speed after brake: ", self.speed)

car = Car("Volvo","XC90",0)
car.accelerate(50)
car.brake(10)