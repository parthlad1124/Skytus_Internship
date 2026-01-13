filename = "sample.txt"
city = ["Valsad", "Surat", "Mumbai"]

with open(filename, "a") as file:
    for item in city:
        file.write(item + "\n")

print("Data appended successfully.")
