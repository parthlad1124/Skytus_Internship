def is_armstrong(n):
    digits = str(n)
    power = len(digits)
    total = 0
    for d in digits:
        total += int(d) ** power
    return total == n
n = int(input("Enter a number: "))
if is_armstrong(n):
    print("Armstrong Number")
else:
    print("Not a Armstrong Number")