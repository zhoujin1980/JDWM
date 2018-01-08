// ==UserScript==
// @name         JDwithWM
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       ZJ
// @match        https://item.jd.com/*
// @grant        none
// ==/UserScript==

(function(){
    'use strict';
   // Your code here...
    var  theList, theNewImg;
    theList = document.getElementById('spec-list').getElementsByTagName('img'); //获取图片list
    if(theList) {
        for (var i=0; i<theList.length; i++){
           //console.log(theBigImg);
            theNewImg = theList[i].src.replace(/\/n\d+\//,"/imgzone/"); //获得高清图片地址
            theList[i].onclick = function(){  //修改onclick函数，打开高清无码图片
                window.open(theNewImg);
                //alert(theNewImg);
            };
        }
    }
    else {alert("咋了？");}



})();