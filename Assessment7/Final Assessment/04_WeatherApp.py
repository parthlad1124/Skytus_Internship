import requests

city = input("Enter city name: ")
api_key = "e36ee6fd4a038b7dad872a562443596e"

url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
data = requests.get(url).json()

if data["cod"] == 200:
    print("Temperature:", data["main"]["temp"], "°C")
    print("Weather:", data["weather"][0]["description"])
else:
    print("City not found")
