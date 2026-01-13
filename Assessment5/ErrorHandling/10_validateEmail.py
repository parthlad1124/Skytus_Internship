class InvalidEmailError(Exception):
    pass

try:
    email = input("Enter email: ")
    if "@" not in email or "." not in email:
        raise InvalidEmailError("Invalid email format")
    print("Valid email")
except InvalidEmailError as e:
    print("Error:", e)
