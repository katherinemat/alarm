var apiKey = require('./../.env').apiKey;

Alarm = function(){
}

Alarm.prototype.getTime = function() {
  return moment().format('LTS');
}

exports.alarmModule = Alarm;
