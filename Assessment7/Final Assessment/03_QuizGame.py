score = 0

questions = {
    "Capital of India? ": "Delhi",
    "2 + 2 = ? ":"4",
    "100 - 10 = ? ": "90",
    "10 * 10 = ? ": "100"
}

for q, ans in questions.items():
    user_ans = input(q)
    if user_ans.lower() == ans.lower():
        score += 1
        print("Correct answer!")
    else:
        print("Wrong answer!")

print("Final Score: ",score)