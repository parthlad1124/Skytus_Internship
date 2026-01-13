def SI(p, r, t):
    return (p*r*t)/100
p = int(input("Enter Principal amount: "))
r = int(input("Enter rate of Interest: "))
t = int(input("Enter Time period: "))
print("Simple Interest: ",SI(p,r,t))