function round(num,scale){if(!(""+num).includes("e")){return+(Math.round(num+"e+"+scale)+"e-"+scale)}else{var arr=(""+num).split("e");var sig="";if(+arr[1]+scale>0){sig="+"}return+(Math.round(+arr[0]+"e"+sig+(+arr[1]+scale))+"e-"+scale)}}function detectmob(){var regex=new RegExp("Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini","i");if(regex.test(navigator.userAgent)){return true}else{return false}}function getBaseLog(x,y){return Math.log(x)/Math.log(y)}function si_int(){var inputs=document.getElementById("si_interest").elements;var spec=false;for(var i=0;i<inputs.length;i++){if(inputs[i].nodeName=="INPUT"&&!inputs[i].hasAttribute("disabled")){if(+inputs[i].value){inputs[i].style.boxShadow=""}else{inputs[i].style.boxShadow="0px 2px 0px red";if(!spec){spec=true}}}}if(spec){inputs[5].value="Input valid values";return}var mR;switch(inputs[2].value){case"Monthly":mR=12;break;case"Quarterly":mR=4;break;case"Yearly":mR=1;break}var mT;switch(inputs[4].value){case"Months":mT=12;break;case"Years":mT=1;break}var P=+inputs[0].value;var R=+inputs[1].value/100*mR;var T=+inputs[3].value/mT;var SI=P*R*T;inputs[5].value=round(SI+P,2)}function ci_int(){var inputs=document.getElementById("comp_interest").elements;var spec=false;for(var i=0;i<inputs.length;i++){if(inputs[i].nodeName=="INPUT"&&!inputs[i].hasAttribute("disabled")){if(+inputs[i].value){inputs[i].style.boxShadow=""}else{inputs[i].style.boxShadow="0px 2px 0px red";if(!spec){spec=true}}}}if(spec){inputs[6].value="Input valid values";return}var mR,mT,cT;switch(inputs[2].value){case"Monthly":mR=12;break;case"Quarterly":mR=4;break;case"Yearly":mR=1;break}switch(inputs[4].value){case"Months":mT=12;break;case"Years":mT=1;break}switch(inputs[5].value){case"Monthly":cT=12;break;case"Quarterly":cT=4;break;case"Yearly":cT=1;break}var P=+inputs[0].value;var R=+inputs[1].value/100*mR/cT;var T=+inputs[3].value/mT*cT;var CI=Math.pow(1+R,T);CI*=P;inputs[6].value=round(CI,2)}function moneyMult(){var inputs=document.getElementById("mult_money").elements;var spec=false;for(var i=0;i<inputs.length;i++){if(inputs[i].nodeName=="INPUT"&&!inputs[i].hasAttribute("disabled")){if(+inputs[i].value){inputs[i].style.boxShadow=""}else{inputs[i].style.boxShadow="0px 2px 0px red";if(!spec){spec=true}}}}if(spec){inputs[5].value="Input valid values";return}var mM;switch(inputs[2].value){case"Monthly":mM="month(s)";break;case"Quarterly":mM="quarter(s)";break;case"Yearly":mM="year(s)";break}var R=+inputs[1].value/100;var M=+inputs[3].value;var res;switch(inputs[4].value){case"SI":res=round((M-1)/R,2);break;case"CI":res=round(getBaseLog(M,1+R),2);break}inputs[5].value=`Time to ${M}x your money is ${res} ${mM}`}var pushed=true;function pushNav(){if(!pushed){document.getElementById("pushNav").style.maxHeight="0";pushed=true}else{document.getElementById("pushNav").style.maxHeight=`${navHeight}px`;pushed=false}}document.getElementById("submit1").addEventListener("click",si_int);document.getElementById("submit2").addEventListener("click",ci_int);document.getElementById("submit3").addEventListener("click",moneyMult);document.getElementById("navBtn").addEventListener("click",pushNav);var navLinks=document.getElementsByClassName("nav-link");var navHeight=navLinks[0].clientHeight;navHeight*=navLinks.length;if(detectmob){for(var i=0;i<navLinks.length;i++){navLinks[i].addEventListener("click",pushNav)}}