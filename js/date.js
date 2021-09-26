const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agugust",
    "September",
    "October",
    "November",
    "December",
];
const todaysdate = new Date();
const dayName =  dayNames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const currentdate = dayNames  + ", " + todaysdate.getDate() + " " + monthName + ", " + todaysdate.getFullYear();


document.getElementById('currentdate').textContent = currentdate;