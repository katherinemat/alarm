var apiKey = require('./../.env').apiKey;

Alarm = function(){
}

Alarm.prototype.getTime = function() {
  return moment().format('LTS');
}

Alarm.prototype.getAlarmTime = function(time) {
  var alarmTime = time;

  var alarmHours = parseInt(alarmTime.substring(0,2));
  var alarmM;

  if (alarmHours > 12) {
    alarmHours -= 12;
    alarmM = "PM";
  }
  else {
    alarmM = "AM";
  }
  alarmHours.toString();

  var alarmMinutes = alarmTime.substring(3);

  alarmTime = alarmHours + ":" + alarmMinutes + ":00 " + alarmM;
  return alarmTime;
}

exports.alarmModule = Alarm;
