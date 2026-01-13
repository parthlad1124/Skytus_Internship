try:
    file = open("example.txt", "w")
    file.write("Hello World")
except Exception as e:
    print("Error occurred:", e)
finally:
    file.close()
    print("File closed successfully")
