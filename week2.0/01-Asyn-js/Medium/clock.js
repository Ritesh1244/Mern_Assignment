function printClock() {
  const currentDate = new Date();
  let currentHour = currentDate.getHours();
  let currentMinute = currentDate.getMinutes();
  let currentSecond = currentDate.getSeconds();

  currentHour = currentHour < 10 ? "0" + currentHour : currentHour;
  currentMinute = currentMinute < 10 ? "0" + currentMinute : currentMinute;
  currentSecond = currentSecond < 10 ? "0" + currentSecond : currentSecond;

  const time24Format = currentHour + ":" + currentMinute + ":" + currentSecond;

  // Am,Pm format

  const amPm = currentHour > 12 ? "PM" : "AM";
  currentHour = currentHour % 12 || 12;

  const time12Format =
    currentHour + ":" + currentMinute + ":" + currentSecond + " " + amPm;

  console.log(time24Format);
  console.log(time12Format);
}

setInterval(printClock, 1000);
