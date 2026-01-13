a = int(input("Enter first Number: "))
b = int(input("Enter second Number: "))
op = input("Enter operator (+,-,*,/): ")

if op == "+":
    print("Result: ", a+b)
elif op == "-":
    print("Result: ", a-b)
elif op == "*":
    print("Result: ", a*b)
elif op == "/":
    if b !=0:
        print("Result: ", a/b)
    else:
        print("Division by zero not allowed")
else:
    print("Invalid Operator")