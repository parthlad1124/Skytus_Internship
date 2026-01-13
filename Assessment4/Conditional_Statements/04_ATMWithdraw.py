balance = 10000
amt = int(input("Enter amount you want to withdraw: "))
if amt > balance:
    print("Insufficient Balance!!")
else:
    print("Withdrawal Successful!!")
    print("Current Balance: ",balance-amt)