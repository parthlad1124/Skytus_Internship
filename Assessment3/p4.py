# 1. Create a dictionary of student names and marks
students = {"Taksh": 85, "Darshan": 92, "Parth": 95}

# 2. Add a new key-value pair
students["Daksh"] = 90
print("After adding student:", students)

# 3. Delete a key-value pair
del students["Darshan"]
print("After deleting student:", students)

# 4. Merge two dictionaries
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}
merged_dict = dict1 | dict2
print("Merged dictionary:", merged_dict)

# 5. Check if a key exists
key = "Riya"
print("Key exists?" , key in students)

# 6. Count word frequency in a string
text = "python is easy and python is powerful"
words = text.split()
word_count = {}

for word in words:
    word_count[word] = word_count.get(word, 0) + 1

print("Word frequency:", word_count)

# 7. Find key with maximum value
max_key = max(students, key=students.get)
print("Student with highest marks:", max_key)

# 8. Reverse keys and values
reversed_dict = {value: key for key, value in students.items()}
print("Reversed dictionary:", reversed_dict)

# 9. Update value for a specific key
students["Parth"] = 95
print("After updating marks:", students)

# 10. Convert list of tuples into dictionary
tuple_list = [("x", 10), ("y", 20), ("z", 30)]
converted_dict = dict(tuple_list)
print("Dictionary from tuples:", converted_dict)
