// ==UserScript==
// @name         pamtrg
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.tjb11.net/Mobile/*
// @match        https://www.tjb11.net/Mobile/Aspx/M_WithDraw_yn.aspx
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tjb11.net
// @grant        none
// ==/UserScript==


var name_account = "Pamstrg";
var memberMoney = "10000";








(function() {
    'use strict';

function set_in4_account(){

    var element = document.getElementsByClassName("infor_ID")[0];
    console.log(element);
    if (element) {
        element.innerHTML = name_account;
        var elm_mainPonits = document.getElementsByClassName("mainPonits")[0]
        if (elm_mainPonits){
             elm_mainPonits.innerHTML ="$"+ memberMoney;
             elm_mainPonits.className = "mainPonitsP";

        }else{
             console.log('mainPonitsP');
                var elm_mainPonitsP = document.getElementsByClassName("mainPonitsP")[0];
              //  elm_mainPonitsP.className = "mainPonits";
                elm_mainPonitsP.innerHTML ="$"+ memberMoney;
        }

      //  document.getElementsByClassName("mainPonits")[0].innerHTML = memberMoney;
    } else {
         document.getElementsByClassName("memberID")[0].innerHTML = name_account;
         var rlmMoney = document.getElementsByClassName("memberMoney")[0];
         rlmMoney.innerHTML = memberMoney;



    };

};


window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
    set_in4_account();
});
document.body.addEventListener('click', function (evt) {
  console.log(evt.target.className)
}, false);




    // Your code here...
})();
