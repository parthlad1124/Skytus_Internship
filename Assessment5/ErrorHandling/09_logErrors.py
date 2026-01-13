import logging

logging.basicConfig(filename="error.log", level=logging.ERROR)

try:
    x = int(input("Enter number: "))
    y = int(input("Enter another number: "))
    print(x / y)
except Exception as e:
    logging.error(e)
