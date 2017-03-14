var Alarm = require('./../js/alarm.js').alarmModule;


$(document).ready(function() {
  var alarm = new Alarm();
  var alarmTime;

  $('form#alarm').submit(function(event) {
    event.preventDefault();
    var input = $('#alarm-time').val().toString();
    alarmTime = alarm.getAlarmTime(input);
  });

  setInterval(function(){
    $('#time').text(alarm.getTime());
    if(alarm.getTime() === alarmTime) {
      alert("time");
      $('.sound').append("<audio controls autoplay='false'><source src='./../sounds/horse.mp3' type='audio/mpeg'></audio>")

    }
  }, 1000);

});
