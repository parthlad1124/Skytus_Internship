def countVowels(s):
    vowels = "aeiouAEIOU"
    count = 0
    for ch in s:
        if ch in vowels:
            count +=1
    return count

s = input("Enter text: ")
print(countVowels(s))