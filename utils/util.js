function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function parseQueryString(url) {
  var obj = {};
  var keyvalue = [];
  var key = "",
    value = "";
  var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
  for (var i in paraString) {
    keyvalue = paraString[i].split("=");
    key = keyvalue[0];
    value = keyvalue[1];
    obj[key] = value;
  }
  return obj;
}

module.exports = {
  formatTime: formatTime,
  formatUrl:parseQueryString
}
