# 1. Create a tuple with 5 numbers
numbers = (10, 20, 30, 40, 50)

# 2. Access the third element
print("Third element:", numbers[2])

# 3. Unpack a tuple into variables
a, b, c, d, e = numbers
print("Unpacked values:", a, b, c, d, e)

# 4. Create a set of 5 fruits
fruits = {"apple", "banana", "mango", "orange", "grapes"}

# 5. Add a new fruit
fruits.add("pineapple")
print("After adding fruit:", fruits)

# 6. Remove an element from a set
fruits.remove("banana")
print("After removing fruit:", fruits)

# 7. Find union of two sets
set1 = {1, 2, 3}
set2 = {3, 4, 5}
print("Union:", set1.union(set2))

# 8. Find intersection of two sets
print("Intersection:", set1.intersection(set2))

# 9. Check if one set is subset of another
print("Is set1 subset of set2?", set1.issubset(set2))

# 10. Convert list with duplicates into set
dup_list = [1, 2, 2, 3, 4, 4, 5]
unique_set = set(dup_list)
print("Set without duplicates:", unique_set)
