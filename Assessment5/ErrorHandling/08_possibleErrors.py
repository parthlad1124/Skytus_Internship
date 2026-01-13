try:
    a = int(input("Enter first number: "))
    b = int(input("Enter second number: "))
    print("Result:", a / b)
except ValueError:
    print("Error: Invalid number input")
except ZeroDivisionError:
    print("Error: Division by zero")
except Exception as e:
    print("Unexpected error:", e)
