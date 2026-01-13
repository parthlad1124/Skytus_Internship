file1 = "sample.txt"
file2 = "sentences.txt"
file3 = "merged.txt"

with open(file3, "w") as outfile:
    with open(file1, "r") as infile1:
        outfile.write(infile1.read())
    with open(file2, "r") as infile2:
        outfile.write(infile2.read())

print("Files merged successfully.")
