try:
    lst = [10, 20, 30]
    index = int(input("Enter index: "))
    print(lst[index])
except IndexError:
    print("Error: Index out of range")
