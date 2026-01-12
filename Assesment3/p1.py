# 1. Take a string input and print its length.
s = input("Enter a string:")
print(f"Length of string is {len(s)}")

# 2. Convert a sentence to lower case
sentence = "Welcome to Skytus Pvt Ltd"
print(sentence.lower())

# 3. Replace spaces with underscore in a string
print(sentence.replace(" ", "_"))

# 4. Extract the first and last character of the string
str1 = "Hello World"
print(str1[0], str1[-1])

# 5.Reverse a string using slicing
print(str1[::-1])

# 6. Count how many times a letter appears in a string
letter = input("Enter a letter: ")
print(str1.count(letter))

# 7. Check if word is present in sentence
word = input("Enter a word: ")
if word in sentence:
    print("Word Found in sentence")
else:
    print("Not found")

# 8. Take name and age and print using f-string format
name = "Parth"
age = 21
print(f"Name is {name} and age is {age}")

# 9. Remove extra spaces from the start and end of a string
text = " Welcome "
print(text.strip())

# 10. Join a list of words using "-"
words = ["My","name","is","Parth"]
joined_string = "-".join(words)
print(joined_string)