function updateTime() {
  var now = new Date();  // 获取当前时间
  var hours = now.getHours();  // 获取小时数
  var minutes = now.getMinutes();  // 获取分钟数
  var seconds = now.getSeconds();  // 获取秒数

  // 将小时数、分钟数、秒数补零
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // 拼接时间字符串
  var timeString = hours + ':' + minutes + ':' + seconds;

  // 将时间字符串显示在页面中
  document.getElementById('clock').innerHTML = timeString;
}

// 每秒钟更新一次时间
setInterval(updateTime, 1000);