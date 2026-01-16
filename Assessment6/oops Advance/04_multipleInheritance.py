class Father:
    def skill1(self):
        print("Driving")

class Mother:
    def skill2(self):
        print("Cooking")

class Child(Father, Mother):
    def skill3(self):
        self.skill1()
        self.skill2()

c = Child()
c.skill3()