"use strict";


function buttonClick(){
    let loginField = document.getElementsByid(log).value;
    let passField = document.getElementsByid(pas).value;
    let loginForCheck = "dima";
    let passForCheck = "1111";
    if((loginField == loginForCheck)&(passField == passForCheck)){
        alert("Введено правильно");
    }else{
        alert("Введено не правильно");
    }
}