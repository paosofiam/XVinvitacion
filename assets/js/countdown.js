setInterval(execute, 1000);

function execute(){
    var gross = timeLeft('Jun 15 2024 16:00:00');
    var time = countDown(gross);
    printTime(time);
}

function timeLeft(theDay){
    var time = [];
    time[0] = parseInt(Date.parse(theDay) - Date.now());
    time[1] = time[0]/1000;
    time[2] = time[1]/60;
    time[3] = time[2]/60;
    time[4] = time[3]/24;
    return time;
}

function countDown(time){
    time[1] = Math.floor(time[1]%60);
    time[2] = Math.floor(time[2]%60);
    time[3] = Math.floor(time[3]%24);
    time[4] = Math.floor(time[4]);
    time.forEach(function (value, element){
        if(value <= 0){
            time[element] = 0;
        }
    });
    return time; 
}

function printTime(time){
    document.getElementById('seconds').innerHTML = time[1];
    document.getElementById('minutes').innerHTML = time[2];
    document.getElementById('hours').innerHTML = time[3];
    document.getElementById('days').innerHTML = time[4];
}

/* function milisLeft(theDay){
    var milis = Date.parse(theDay) - Date.now();
    var secs = milis/1000;
    var mins = secs/60;
    var hrs = mins/60;
    var days = hrs/24;
    console.log(milis);
    console.log(secs%60);
    console.log(mins%60);
    console.log(hrs%24);
    console.log(days);
} */
