# Sum of Even number between 1 - 100
sum = 0
for i in range(1,101):
    if i%2 == 0:
        sum += i

print("Sum of Even numbers between 1 to 100 is ",sum)