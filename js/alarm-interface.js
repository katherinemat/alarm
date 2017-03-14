var Alarm = require('./../js/alarm.js').alarmModule;


$(document).ready(function() {
  var alarm = new Alarm();
  var alarmTime;
  var alarmHours;
  var alarmMinutes;
  var alarmM;
  $('form#alarm').submit(function(event) {
    event.preventDefault();
    alarmTime = $('#alarm-time').val().toString();

    alarmHours = parseInt(alarmTime.substring(0,2));
    if (alarmHours > 12) {
      alarmHours -= 12;
      alarmM = "PM";
    }
    else {
      alarmM = "AM";
    }
    alarmHours.toString();

    alarmMinutes = alarmTime.substring(3);

    alarmTime = alarmHours + ":" + alarmMinutes + ":00 " + alarmM;
  });

  setInterval(function(){
    $('#time').text(alarm.getTime());
    if(alarm.getTime() === alarmTime) {
      alert("time");
      $('.sound').append("<audio controls autoplay='false'><source src='./../sounds/horse.mp3' type='audio/mpeg'></audio>")

    }
  }, 1000);

});
