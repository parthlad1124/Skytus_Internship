signal = input("Enter signal colour: ").lower()
if signal == "red":
    print("STOP!!")
elif signal == "yellow":
    print("Wait")
elif signal == "green":
    print("Go")
else:
    print("Invalid Colour")