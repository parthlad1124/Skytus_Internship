n = int(input("Enter a number: "))
if n <= 1:
    print("Not a Prime Number")
else:
    is_Prime = True
    for i in range(2, n):
        if n%i == 0:
            is_Prime = False
            break
    if is_Prime:
        print("Prime Number")
    else:
        print("Not a Prime Number")