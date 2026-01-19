balance = 0

while True:
    print("\n1. Deposit  2. Withdraw  3.Check Balance  4.Exit")
    choice = input("Enter your choice:")

    if choice == "1":
        amount = float(input("Enter amount to deposit: "))
        balance += amount
        print("Deposited Successfully")

    elif choice == "2":
        amount = float(input("Enter amount to withdraw: "))
        if amount < balance:
            balance -= amount
            print("Withdrawal Successful")
        else:
            print("Insufficient Balance")
    
    elif choice == "3":
        print("Current Balance: ",balance)
    
    elif choice == "4":
        break

    else:
        print("Invalid choice")