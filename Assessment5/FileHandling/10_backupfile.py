source = "sample.txt"
backup = "backup_sample.txt"

with open(source, "r") as src:
    content = src.read()

with open(backup, "w") as bk:
    bk.write(content)

print("Backup created successfully.")
