filename = "sentences.txt"
old_word = input("Enter word to replace: ")
new_word = input("Enter new word: ")

with open(filename, "r") as file:
    content = file.read()

content = content.replace(old_word, new_word)

with open(filename, "w") as file:
    file.write(content)

print("Word replaced successfully.")
