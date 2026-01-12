# 1. Create a list of ur 5 favourite movies
movies = ["Drishyam","Moonfall","Blackmail","Badla","Phir Hera Pheri"]

# 2. Add a new movie
movies.append("Jawan")
print(movies)

# 3. Remove the first movie
movies.pop(0)
print(movies)

# 4. Sort numbers in ascending order
numbers = [45, 12, 78, 34, 23]
numbers.sort()
print("Sorted numbers:", numbers)

# 5. Reverse a list
numbers.reverse()
print("Reversed list:", numbers)

# 6. Find the largest number in a list
print("Largest number:", max(numbers))

# 7. Merge two lists
list1 = [1, 2, 3]
list2 = [4, 5, 6]
merged_list = list1 + list2
print("Merged list:", merged_list)

# 8. Access last element without using index number
print("Last element:", merged_list[-1])

# 9. Create a nested list and access an inner element
nested_list = [[10, 20], [30, 40], [50, 60]]
print("Inner element:", nested_list[1][1])  # 40

# 10. Count how many times an element appears
count_list = [1, 2, 3, 2, 4, 2, 5]
print("Count of 2:", count_list.count(2))
