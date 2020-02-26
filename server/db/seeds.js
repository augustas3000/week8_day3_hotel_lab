use hotel;

db.dropDatabase();

db.bookings.insertMany([
  {
   name: "Jan Jindra",
   email: "Jan.Jindra@codeclan.co.uk",
   isCheckedIn: true
  },
  {
   name: "Augustas Juskevicius",
   email: "Augustas.J@codeclan.co.uk",
   isCheckedIn: false
  },
  {
   name: "Alan Bond",
   email: "AlanB@hotmail.com",
   isCheckedIn: true
  }
]);
