    
/*
var init = function () {
        var sec = document.getElementById('sec');
        var hour = document.getElementById('hour');
        var min = document.getElementById('min');
        var time;
        function intervalHandler() {
            time = new Date();
            sec.innerHTML = time.getSeconds();
            hour.innerHTML = time.getHours();
            min.innerHTML = time.getMinutes();
        }
        intervalHandler();
    };
    document.addEventListener('DOMContentLoaded', init);

*/

/*
var init = function(){

  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var startButton = document.getElementById('startButton');
  var lapButton = document.getElementById('lapButton');
  var stopButton = document.getElementById('stopButton');
  var resetButton = document.getElementById('resetButton');
  //lap에 대한담을 변수 생성
  var lapTimes = [];

  var hourNumber= 0;
  var minNumber= 0;
  var secNumber = 0;
  var sectimer;
  //초시계 동작 상태를 담고 있는 변수. 동작중이면 true, 멈춘상태면 false.
  //처음은 멈춰있으므로 false로 작성.
  var isRunning = false;

  //start button
  //start 버튼 클릭시 setInterval를 실행할 함수
  function startInterval(){
    secNumber++;
    if(secNumber > 59){
      secNumber = 0;
      minNumber++;
      if(minNumber > 59){
        minNumber = 0;
        hourNumber++;
        hour.innerHTML = hourNumber;
      }
      min.innerHTML = minNumber;
    }
    sec.innerHTML = secNumber;
  }

  //start버튼 click시 실행되는 함수
  function startAction(){
    //start버튼이 실행됐을때!동작이 쌓이지 않기 위해서 작성
    if(isRunning === false){
      secInterval = setInterval(startInterval,10);
      isRunning = true;
    }
  }
  //실행
  //startAction();

  //stop버튼 click시 실행되는 함수
  function stopAction(){
    clearInterval(secInterval);
    isRunning = false;
  }

  //reset버튼 click시 실행되는 함수
  function resetAction(){
    //한번 멈추고 초기화 실행될 수 있게 stopAction를 실행.
    stopAction();
    //화면뿐만 아니라 변수도 변경해야 reset이 됨.
    secNumber =  0;
    sec.innerHTML = secNumber;
    minNumber = 0;
    min.innerHTML = minNumber;
    hourNumber = 0;
    hour.innerHTML = hourNumber;
    //랩 타임 초기화
    lapTimes =[];
  }
  //lapButton click시 실행되는 함수
  function lapButton(){
    if(isRunning === true){
      //{hour:0, min:0,sec:10};
      var time = { hour: hourNumber, min : minNumber, sec : secNumber };
      //push : 배열에 원소를 넣겠다
      lapTimes.push(time);
      console.log(lapTimes);
    }
  }

  startButton.addEventListener('click', startAction);
  stopButton.addEventListener('click',stopAction);
  lapButton.addEventListener('click',lapButton);
  resetButton.addEventListener('click',resetAction);

};

document.addEventListener('DOMContentLoaded', init);
*/

function nowTime() {
    var time = new Date();
        hours = time.getHours();
        minutes = time.getMinutes();
        seconds = time.getSeconds();
    
    //AM , PM 설정
    if(hours >= 12){
        meridiem = "PM";
    }else{
        meridiem = "AM";
    }
    
    
    //12시간 넘으면 다시 0부터 시작하는건데 pm,am있으니까 넣어야함
    if (hours>12){
        hours = hours -12;
    }else if (hours === 0){
        hours =12;
    }
    
    //분이 10이하면 앞에 0을 붙인다.아니면 말고
    if (minutes<10){
        minutes = "0" + minutes;
    }else{
        minutes = minutes;
    }
    
    if(seconds<10){
        seconds = "0" + seconds;
    }else{
        seconds = seconds;
    }
    
    document.getElementById("nowTime").innerHTML = (hours+":"+minutes+":"+seconds + meridiem);
}

setInterval('nowTime()',1000);
