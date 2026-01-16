class BankAccount:
    def __init__(self, balance):
        self.balance = balance

class SavingAccount(BankAccount):
    def interest(self):
        print("Interest added")

class CurrentAccount(BankAccount):
    def overdraft(self):
        print("Overdraft available")

s = SavingAccount(5000)
c = CurrentAccount(10000)
s.interest()
c.overdraft()