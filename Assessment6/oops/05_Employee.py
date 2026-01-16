class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def display(self):
        print("Employee name: ", self.name)
        print("Salary: ", self.salary)

emp = Employee("Parth",50000)
emp.display()