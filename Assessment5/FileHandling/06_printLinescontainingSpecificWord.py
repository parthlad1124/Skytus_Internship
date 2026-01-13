filename = "sentences.txt"
search_word = input("Enter word to search: ")

with open(filename, "r") as file:
    for line in file:
        if search_word in line:
            print(line.strip())
