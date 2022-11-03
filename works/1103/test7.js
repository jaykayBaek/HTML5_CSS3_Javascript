'use strict';

function regexCheck() {
    // 정규표현식을 만든다.
    const regex1 = /atom/gm;    // 'atom'이라는 문자열이 포함되어있다면 true, 없으면 false
    const regex2 = /mbc|kbs|sbs/g;  // mbc또는 kbs 또는 sbs 문자열을 포함하고 있다면?
    const regex3 = /홍길(동|순)/g;   // '홍길동, 홍길순' 이 있는냐?
    const regex4 = /[a-z]/g;    // 영문 소문자를 포함하고 있느냐?
    const regex5 = /[^a-z]/g;    // 영문 소문자외에 다른 문자를 포함하고 있느냐?
    const regex6 = /[A-Z]/g;    // 영문 대문자를 포함하고 있느냐?
    const regex7 = /[^A-Z]/g;    // 영문 대문자외에 다른 문자를 포함하고 있느냐?
    const regex8 = /[0-9]/g;    // 숫자를 포함하고 있느냐?
    const regex9 = /[^0-9]/g;    // 숫자외 다른 문자를 포함하고 있느냐?
    const regex10 = /[가-힣]/g;    // 한글을 포함하고 있느냐?
    const regex11 = /[a-zA-Z0-9]/g;  // 영문 '대/소문자'나 '숫자'가 포함되어 있느냐?
    const regex12 = /[^a-zA-Z0-9]/g;  // 영문 '대/소문자'나 '숫자'외에 다른 문자가 포함되어 있느냐?
    //영문 대/소문자와 숫자만 입력받도록 (3가지 요소가 다 들어가야 한다.)
    const regex13 = /[a-z][A-Z][0-9]/gm
    const regex14 = /\./g //문자열 중에서 .을 포함하는가?
    const regex15 = /\d/g //숫자를 포함하는가?
    const regex16 = /\D/g //숫자를 포함하고 있지 않느냐?
    const regex17 = /\w/g //영문자/숫자/_(밑줄)을 포함하고 있는가
    const regex18 = /\W/g //영문자/숫자/_(밑줄)을 포함하고 있지 않느냐?
    const regex19 = /\s/g //문장안에 공백 또는 탭을 포함하고 있는가??
    
    //와일드카드(글자여러개지칭) : 1개 글자에 대한 포함유무(?), 복수개 문자의 포함유무(+ *)
    //'홍길동' 중에서 '동' 1개 글자의 포함 유무(있어도 되고 없어도 되고)
    const regex20 = /홍길동?안녕/g; 
    //'홍길동' 중에서 '동' 1개 이상 글자의 포함 유무(있어도 되고 없어도 되고) 홍길자자 홍길동동 가능
    const regex21 = /홍길동+안녕/g; 
    //'홍길동' 중에서 '동' 0개 이상 글자의 포함 유무(있어도 되고 없어도 되고)
    const regex22 = /홍길동*안녕/g;
    // d{2,3} = 2~3글자 가능, [a-z]{2, 20} = 영문 최소 2글자~20글자


    // const regex14 = //gm


    let content = document.getElementById("content").value;

    if(content.trim() == "") {
        alert("문자열을 입력하세요");
        return false;
    }
    // else if(!content.match(regex1)) {
    //   alert("1.atom문자열을 포함하고 있지 않습니다.");
    //   return false;
    // }
    // else if(!content.match(regex2)) {
    //   alert("2.mbc/kbs/sbs 문자열을 포함하고 있지 않습니다.");
    //   return false;
    // }
    // else if(!content.match(regex3)) {
    //   alert("3.홍길동 또는 홍길순 문자열을 포함하고 있지 않습니다.");
    //   return false;
    // }
    // else if(!regex4.test(content)) {
    //   alert("4.영문 소문자를 포함하고 있지 않습니다.");
    //   return false;
    // }
    // else if(regex5.test(content)) {
    //   alert("5.영문 소문자외 다른문자를 포함하고 있습니다.");
    //   return false;
    // }
    // else if(!regex6.test(content)) {
    //   alert("6.영문 대문자를 포함하고 있지 않습니다.");
    //   return false;
    // }
    // else if(!regex7.test(content)) {
    //   alert("7.영문 대문자외에 다른 문자를 포함하고 있습니다.");
    //   return false;
    // }
    // else if(!regex8.test(content)) {
    //   alert("8.숫자를 포함하고 있지 않습니다.");
    //   return false;
    // }
    // else if(regex9.test(content)) {
    //   alert("9.숫자외에 다른 문자를 포함하고 있습니다.");
    //   return false;
    // }
    // else if(!regex10.test(content)) {
    //   alert("10.한글을 포함하고 있지 않습니다.");
    //   return false;
    // }
    // else if(!regex11.test(content)) {
    //   alert("11.영문 대문자,소문자,숫자를 포함하고 있지 않습니다.");
    //   return false;
    // }
    // else if(regex12.test(content)) {
    //     alert("12.영문 대문자,소문자,숫자중 하나씩은 반드시 포함하셔야 합니다.");
    //     return false;
    // }
    // else if(regex13.test(content)) {
    //     alert("13 영문 대문자, 소문자, 숫자를 모두 포함하여 입력하셧군요");
    //     return false;
    // }
    else if(!regex14.test(content)) {
        alert("14. '.'을 포함하고 있지 않습니다.");
        return false;
    }
    
    
    alert("작업끝");
    document.getElementById("content").focus();
}