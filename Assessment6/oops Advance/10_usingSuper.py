class Person:
    def __init__(self, name):
        self.name = name

class Employee(Person):
    def __init__(self, name, salary):
        super().__init__(name)
        self.salary = salary

    def display(self):
        print("Name: ", self.name)
        print("Salary: ", self.salary)

e = Employee("Parth",50000)
e.display()