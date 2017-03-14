var Alarm = require('./../js/alarm.js').alarmModule;


$(document).ready(function() {
  var alarm = new Alarm();
  setInterval(function(){
    $('#time').text(alarm.getTime());
  }, 1000);
});
