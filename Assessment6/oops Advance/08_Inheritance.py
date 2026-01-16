class Teacher:
    def teach(self):
        print("Teaching Students")

class Student(Teacher):
    def study(self):
        print("Studying")

s = Student()
s.teach()
s.study()