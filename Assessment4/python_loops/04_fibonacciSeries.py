a = 0
b = 1
n = int(input("Enter a number of terms: "))
for i in range(n):
    print(a, end=" ")
    a = b
    b = a+b
