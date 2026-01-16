class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def averageMarks(self):
        avg = sum(self.marks)/len(self.marks)
        print("Average Marks: ", avg)

s = Student("Parth",[90,92,95])
s.averageMarks()
