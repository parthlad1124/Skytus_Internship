class Flight:
    def __init__(self, flight_no, seats):
        self.flight_no = flight_no
        self.seats = seats

    def booking(self):
        if self.seats > 0:
            self.seats -= 1
            print("Seat Booked. Remaining Seats: ", self.seats)
        else:
            print("NO Seats Available")

f1 = Flight("SpiceJet-101",5)
f1.booking()
f1.booking()