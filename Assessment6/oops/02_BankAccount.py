class BankAccount:
    def __init__(self,balance = 0):
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
    
    def withdraw(self, amount):
        if amount < self.balance:
            self.balance -= amount
            print("Withdrawn: ", amount)
        else:
            print("Insufficient Balance.")
    
    def curr_balance(self):
        print("Current balance: ", self.balance)

acc = BankAccount(1000)
acc.deposit(1000)
acc.withdraw(500)
acc.curr_balance()