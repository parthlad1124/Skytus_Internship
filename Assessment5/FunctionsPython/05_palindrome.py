def is_palindrome(s):
    if s == s[::-1]:
        return True
    else:
        return False
s = input("Enter a word: ")
if is_palindrome(s):
    print(s," is palindrome")
else:
    print(s," is not Plaindrome")