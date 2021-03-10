

function set2fig(num) {
   // 桁数が1桁だったら先頭に0を加えて2桁に調整する
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}
function showClock() {
   var nowTime = new Date();
   var nowHour = set2fig( nowTime.getHours() );
   var nowMin  = set2fig( nowTime.getMinutes() );
   var nowSec  = set2fig( nowTime.getSeconds() );


var nowYear = nowTime.getFullYear();

var nowMonth = nowTime.getMonth() + 1;

var nowDate = nowTime.getDate();

/*曜日の取得*/
var nowDay = nowTime.getDay();

if (nowTime.getDay() == 1)
{
nowDay = "月";
} else 
if (nowTime.getDay() == 2)
{
nowDay = "火";
} else 
if (nowTime.getDay() == 3)
{
nowDay = "水";
} else 
if (nowTime.getDay() == 4)
{
nowDay = "木";
} else 
if (nowTime.getDay() == 5)
{
nowDay = "金";
} else 
if (nowTime.getDay() == 6)
{
nowDay = "土";
} else {
nowDay = "日";
} 

   var msg1 = nowYear + "年" + nowMonth + "月" + nowDate + "日" + nowDay + "曜日";

var msg2 = nowHour + ":" + nowMin + ":" + nowSec;
   


document.getElementById("YMDD").innerHTML = msg1;


document.getElementById("HMS").innerHTML = msg2;
}
setInterval('showClock()',1000);