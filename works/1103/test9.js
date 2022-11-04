'use strict';

//오늘날짜를 전역변수로 생성
//시간이 정적이게 하려면 전역변수, 동적이게 하려면 함수 안에 지역변수로 선언
const today = new Date();
//연도 4자리를 가져옴
const year = today.getFullYear();
// 월(기존 월보다 -1임. 0월부터 시작해서)
const month = today.getMonth() + 1;
const date = today.getDate();
//시분초
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
const yymmdd = year + "-" + month + "-" + date + " "+hour+":"+minute+":"+second;

//표준날짜출력함수
function fCheck1(){
    let date1 =  new Date();
    document.getElementById("demo").innerHTML = date1;
}

//편집날짜출력함수
function fCheck2(){
    let strDate = yymmdd;
    document.getElementById("demo").innerHTML = strDate;
}

//축약된날짜출력함수
function fCheck3(){
    let strTmp = "";
    strTmp += year + "년 ";
    strTmp += month + "월 ";
    strTmp += date + "일 ";
    /*
    요일을 검색할 떄? getDay();
    0 : 일요일부터 시작, 6 : 토요일로 끝남
    */
   // strTmp += today.getDay() + "요일";
    let week = ["일", "월", "화", "수", "목", "금", "토"];
    strTmp += week[today.getDay()]+"요일 ";
    strTmp += hour + "시 ";
    strTmp += minute + "분 ";
    strTmp += second + "초 ";
    let strDate = strTmp;
    document.getElementById("demo").innerHTML = strDate;
}

//시간출력함수
function fCheck4(){
    // let strDate = today.getTime();
    // let strTime = today.getMilliseconds();
    // strTime = (today.getMilliseconds()/1000/60) + "초";
    // let strDate = strTime;
    // document.getElementById("demo").innerHTML = strDate;

    let startDate = today.getTime();
    let lastDate = new Date();
    let elapseTime = lastDate.getTime() - today.getTime();
    let strDate = elapseTime / (60*60*24*1000);
    demo.innerHTML = strDate;
}

//해당 월의 마지막일짜 꺼내기 함수
//new Date(년,월,일,시,분,초);
//new Date(n년,y월,0일); = n년의 y월의 마지막 일자 가져옴.
function fCheck5(){
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    
    let str = new Date(year,month,0);
    let strDate = str.getFullYear() + "-";
    strDate += (str.getMonth()+1) + "-";
    strDate += str.getDate();
    strDate = "해당월의 마지막 일자는?" + strDate;
    document.getElementById("demo").innerHTML = strDate;
}
function fCheck6(){
    let strDate = year + "-" + month + "-" + date;

    //방법1. 함수이용법
    let fmtDate = strDate.split("-");
    let yy = fmtDate[0];
    let mm = ('0'+fmtDate[1]).slice(-2); // 만약에 mm이 1자리(1~9월)이라면? 01~09월이라 바꿔줘야 함.
    let dd = ('0')+fmtDate[2].slice(-2);
    strDate = yy + "-" + mm + '-' + dd;

    //방법2. if 사용
    // if(parseInt(month)<10){
    //     m = "0"+m;
    // }
    // if(parseInt(date)<10){
    //     d = "0"+d;
    // }
    document.getElementById("demo").innerHTML = strDate;
    
}

