function set2fig(num) {
   // 桁数が1桁だったら先頭に0を加えて2桁に調整する
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}   
function showClock() {
var nowTime = new Date();
   var nowYear = nowTime.getFullYear();

   var nowMonth = set2fig( nowTime.getMonth() + 1 );

   var nowDate = set2fig( nowTime.getDate() );


   var nowHour = set2fig( nowTime.getHours() );

   var nowMin  = set2fig( nowTime.getMinutes() );

   var nowSec  = set2fig( nowTime.getSeconds() );

/*曜日の取得*/
var nowDay = nowTime.getDay();

var locate = 3;

var msg1 = nowYear + "年" + nowMonth + "月" + nowDate + "日" + nowDay + "曜日";
var msg2 = nowHour + ":" + nowMin + ":" + nowSec;


switch (locate) {
case 0:
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
msg1 = nowYear + "年" + nowMonth + "月" + nowDate + "日" + nowDay + "曜日";
break;

case 1:
if (nowTime.getDay() == 1)
{
nowDay = "Mon";
} else 
if (nowTime.getDay() == 2)
{
nowDay = "Tue";
} else 
if (nowTime.getDay() == 3)
{
nowDay = "Wed";
} else 
if (nowTime.getDay() == 4)
{
nowDay = "Thu";
} else 
if (nowTime.getDay() == 5)
{
nowDay = "Fri";
} else 
if (nowTime.getDay() == 6)
{
nowDay = "Sat";
} else {
nowDay = "Sun";
} 
msg1 = nowDay + "," + nowYear + "/" + nowMonth + "/" + nowDate;
break;

default:
console.log('err');
break;
}

$("YMDD").html(msg1);
$("HMS").html(msg2);
}
setInterval('showClock()',1000);