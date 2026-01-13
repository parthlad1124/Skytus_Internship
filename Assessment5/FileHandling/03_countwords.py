filename = "sample.txt"
word_count = {}

with open(filename, "r") as file:
    for line in file:
        words = line.split()
        for word in words:
            word_count[word] = word_count.get(word, 0)+1

for word, count in word_count.items():
    print(word,":",count)