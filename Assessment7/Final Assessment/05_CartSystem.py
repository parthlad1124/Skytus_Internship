cart = {}

while True:
    print("\n 1. Add item  2. View cart  3. Remove  item  4. Total  5. Exit")
    choice = input("Enter your choice: ")

    if choice == "1":
        item = input("Enter Item:")
        price = float(input("Enter price: "))
        cart[item] = price
        print("Item Added")

    elif choice == "2":
        if not cart:
            print("Cart is empty")
        else:
            for item, price in cart.items():
                print(item,"$",price)

    elif choice == "3":
        item = input("Item name:")
        cart.pop(item, None)
        print("Item Removed")

    elif choice == "4":
        total = sum(cart.values())
        print("Total: ", total)

    elif choice == "5":
        break

    else:
        print("Invalid choice")