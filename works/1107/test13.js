'use strict';

//클래스 만들기
class Member{
    //생성자
    constructor(name, age, color){
        this.name = name;
        this.age = age;
        this.color = color;
    }

    /* --------------- getter생성 ---------------*/
    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    get color(){
        return this._color;
    }

    /* --------------- setter생성 --------------- */
    set name(name){
        this._name = name;
    }
    set age(age){
        this._age = (age<1) ? age*-1 : age;
    }
    set color(color){
        this._color = (color=='껌정' || color =='블랙' || color =='흑색' || color =='까망') ? this._color='검정' : color = color;

        if(color=='껌정' || color =='블랙' || color =='흑색' || color =='까망'){
            this._color = '검정';
        }else{
            this._color = color;
        }
    }

    /* 함수 */
    memberPrint(){
        console.log("성명 : " + this.name + ", 나이 : " + this.age + ", 색상 : " + this.color);
    }
}