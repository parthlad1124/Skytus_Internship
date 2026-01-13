filename = "sample.txt"

with open(filename,"r") as file:
    lines = file.readlines()
    print("Number of lines in a file: ", len(lines))