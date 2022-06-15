objHours = document.getElementById("hours");
objDate = document.getElementById("date")

months = new Array(
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря"
);
days = new Array(
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота"
);

function stonksDate(){
  time = new Date()

  day = time.getDate()
  month = time.getMonth()
  fullYear = time.getFullYear()
  wr = (day < 10 ? "0" : "") + day
  wr += "."
  wr += (month < 10 ? "0" : "") + month
  wr += "."
  wr += fullYear

  wr = "<span id='date'>" + " " + wr + "</span>"
  objDate.innerHTML = wr
}

stonksDate()

function wrHours() {
  time = new Date();

  sec = time.getSeconds();
  min = time.getMinutes();
  hour = time.getHours();
  format = hour < 12 || (hour <= 12 && min === 0) ? "AM" : "PM";
  wr = (hour < 10 ? "0" : "") + hour;
  wr += ":";
  wr += (min < 10 ? "0" : "") + min;
  wr += ":";
  wr += (sec < 10 ? "0" : "") + sec;
  wr += " " + format;

  wr =
    "<div id='hours'><div class='md'>" +
    days[time.getDay()] +
    ", " +
    time.getDate() +
    " " +
    months[time.getMonth()] +
    " " +
    time.getFullYear() +
    "</div><div class='time'><span>Ташкент <br/>UZ</span><span>" +
    wr +
    "</span></div></div>";

  objHours.innerHTML = wr;
}

wrHours();
setInterval("wrHours()", 1000);

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  IOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.IOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");
} else {
  document.body.classList.add("_pc");
}