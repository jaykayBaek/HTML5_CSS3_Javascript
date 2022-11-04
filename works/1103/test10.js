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

//시스템날짜 가져와서 폼에 출력
function bringDate() {
    document.getElementById('startDate').value = yymmdd;
}

//날짜비교함수
function compareDate(){
    let start = document.getElementById("startDate").value;
    let end = document.getElementById("endDate").value;
    // 문자형 -> 날짜형으로
    const startDate = new Date(start);
    const endDate = new Date(end);

    let result;
    if(isCheckingDate(startDate, endDate)){
        result = "입력된 날짜는 같습니다."
    }else{
        result = "입력된 날짜는 다릅니다."
    }
    document.getElementById("demo").innerHTML = result;
}

// ===완전일치(타입까지)
function isCheckingDate(startDate, endDate){
    return  startDate.getFullYear() === endDate.getFullYear() &&
            startDate.getMonth() === endDate.getMonth() &&
            startDate.getDate() === endDate.getDate();
    ;
}

function compareDate2(){
    let start = document.getElementById("startDate").value;
    let end = document.getElementById("endDate").value;

    const startDate = new Date(start); //'2022-2-5' 년, 월, 일
    const endDate = new Date(end);

    //날짜 형식 데이터를 시간(1/1000초)로 바꿔서 연산처리한다.
    let elapsedTime = endDate.getTime() - startDate.getTime();
    //                        (60*60*24*1000); // 분 시간 하루 1000 
    let strDate = elapsedTime/(60*60*24*1000); // 날수로 변경(day) 
    strDate = strDate.toFixed(0);

    document.getElementById("demo").innerHTML = strDate;
}
