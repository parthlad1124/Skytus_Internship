tasks = []

while True:
    print("\n1. Add Task  2. View Task  3. Delete Task  4. Exit")
    choice = input("Enter your choice:")

    if choice == "1":
        task = input("Enter Task:")
        tasks.append(task)
        print("Task Added!")

    elif choice == "2":
        if not tasks:
            print("No Tasks!")
        else:
            for i, t in enumerate(tasks,1):
                print(i, t)

    elif choice == "3":
        num = int(input("Enter task number:"))
        if 1 <= num <= len(tasks):
            tasks.pop(num-1)
            print("Task deleted!")
        else:
            print("Invalid number")

    elif choice == "4":
        break
    else:
        print("Invalid choice")