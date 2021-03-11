var locate = 0;

function setJa() {
    locate = 0;
}

function setEn() {
    locate = 1;
}

function set2fig(num) {
// 桁数が1桁だったら先頭に0を加えて2桁に調整する
    var ret;
    if( num < 10 ) { ret = "0" + num; }
    else { ret = num; }
    return ret;
}

function showClock() {
    var JST = Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000);
    var nowTime = new Date(JST);
    var nowYear = nowTime.getFullYear();
    var nowMonth = set2fig( nowTime.getMonth() + 1 );
    var nowDate = set2fig( nowTime.getDate() );
    var nowHour = set2fig( nowTime.getHours() );
    var nowMin  = set2fig( nowTime.getMinutes() );
    var nowSec  = set2fig( nowTime.getSeconds() );

    /*曜日の取得*/
    var nowDay = nowTime.getDay();

var msg2 = nowHour + ":" + nowMin + ":" + nowSec;

switch (locate) {
    case 0:
        switch (nowDay) {
            case 1:
                nowDay = "月";
                break;
            case 2:
                nowDay = "火";
                break;
            case 3:                
                nowDay = "水";
                break;
            case 4:                                    
                nowDay = "木";
                break;
            case 5:
                nowDay = "金";
                break;
            case 6:                
                nowDay = "土";
                break;
            case 7:
                nowDay = "日";
                break;
            }
        var msg1 = nowYear + "年" + nowMonth + "月" + nowDate + "日" + nowDay + "曜日";
        break;
    
    case 1:
        switch (nowDay) {
            case 1:
                nowDay = "Mon";
                break;
            case 2:
                nowDay = "Tue";
                break;
            case 3:
                nowDay = "Wed";
                break;
            case 4:
                nowDay = "Thu";
                break;
            case 5:
                nowDay = "Fri";
                break;
            case 6:
                nowDay = "Sat";
                break;
            case 7:
                nowDay = "Sun";
                break;
            }

        var msg1 = nowDay + "," + nowYear + "/" + nowMonth + "/" + nowDate;
        break;

    default:
        console.log('err');
        break;
    }

    $("#YMDD").html(msg1);
    $("#HMS").html(msg2);
}
setInterval('showClock()', 1000);