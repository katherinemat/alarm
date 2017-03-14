var apiKey = require('./../.env').apiKey;

Alarm = function(){
}

Alarm.prototype.getTime = function() {
  return moment().format('MMMM Do YYYY, h:mm:ss a');
}

exports.alarmModule = Alarm;
