from datetime import date

date1 = date(2024, 1, 1)
date2 = date(2025, 1, 1)

diff = date2 - date1

print("Difference in days:",diff.days)