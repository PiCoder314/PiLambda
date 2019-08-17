function resizeGridItem(item){let grid=document.getElementsByClassName("grid")[0];let rowHeight=parseInt(window.getComputedStyle(grid).getPropertyValue("grid-auto-rows"));let rowGap=parseInt(window.getComputedStyle(grid).getPropertyValue("grid-row-gap"));let rowSpan=Math.ceil((item.querySelector(".wrapMason").getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));item.style.gridRowEnd="span "+rowSpan}function resizeAllGridItems(){let allItems=document.getElementsByClassName("mathForm");for(let x=0;x<allItems.length;x++){resizeGridItem(allItems[x])}}if(window.matchMedia("(min-width: 768px)").matches){resizeAllGridItems()}function isPrime(n){if(isNumeric(n)){if(n%2==0){if(n==2){return true}else{return false}}else if(n==1||n==0){return false}else{for(var i=3;i<=Math.floor(Math.sqrt(n));i+=2){if(n%i==0){return false}}}return true}else{return"Enter integer value"}}function round(num,scale){if(!(""+num).includes("e")){return+(Math.round(num+"e+"+scale)+"e-"+scale)}else{var arr=(""+num).split("e");var sig="";if(+arr[1]+scale>0){sig="+"}return+(Math.round(+arr[0]+"e"+sig+(+arr[1]+scale))+"e-"+scale)}}function isNumeric(n){return!isNaN(parseFloat(n))&&isFinite(n)}function getBaseLog(x,y){return Math.log(x)/Math.log(y)}function factorial(n){if(n==0){return 1}else{return n*factorial(n-1)}}function si_int(){var inputs=document.getElementById("si_interest").elements;var spec=false;for(var i=0;i<inputs.length;i++){if(inputs[i].nodeName=="INPUT"&&!inputs[i].hasAttribute("disabled")){if(isNumeric(inputs[i].value)){inputs[i].style.boxShadow=""}else{inputs[i].style.boxShadow="0px 2px 0px red";if(!spec){spec=true}}}}if(spec){inputs[5].value="Input valid values";return}var mR;switch(inputs[2].value){case"Monthly":mR=12;break;case"Quarterly":mR=4;break;case"Yearly":mR=1;break}var mT;switch(inputs[4].value){case"Months":mT=12;break;case"Years":mT=1;break}var P=+inputs[0].value;var R=+inputs[1].value/100*mR;var T=+inputs[3].value/mT;var SI=P*R*T;inputs[5].value=round(SI+P,2)}function ci_int(){var inputs=document.getElementById("comp_interest").elements;var spec=false;for(var i=0;i<inputs.length;i++){if(inputs[i].nodeName=="INPUT"&&!inputs[i].hasAttribute("disabled")){if(isNumeric(inputs[i].value)){inputs[i].style.boxShadow=""}else{inputs[i].style.boxShadow="0px 2px 0px red";if(!spec){spec=true}}}}if(spec){inputs[6].value="Input valid values";return}var mR,mT,cT;switch(inputs[2].value){case"Monthly":mR=12;break;case"Quarterly":mR=4;break;case"Yearly":mR=1;break}switch(inputs[4].value){case"Months":mT=12;break;case"Years":mT=1;break}switch(inputs[5].value){case"Monthly":cT=12;break;case"Quarterly":cT=4;break;case"Yearly":cT=1;break}var P=+inputs[0].value;var R=+inputs[1].value/100*mR/cT;var T=+inputs[3].value/mT*cT;var CI=Math.pow(1+R,T);CI*=P;inputs[6].value=round(CI,2)}function moneyMult(){var inputs=document.getElementById("mult_money").elements;var spec=false;for(var i=0;i<inputs.length;i++){if(inputs[i].nodeName=="INPUT"&&!inputs[i].hasAttribute("disabled")){if(isNumeric(inputs[i].value)){inputs[i].style.boxShadow=""}else{inputs[i].style.boxShadow="0px 2px 0px red";if(!spec){spec=true}}}}if(spec){inputs[5].value="Input valid values";return}var mM;switch(inputs[2].value){case"Monthly":mM="month(s)";break;case"Quarterly":mM="quarter(s)";break;case"Yearly":mM="year(s)";break}var R=+inputs[1].value/100;var M=+inputs[3].value;var res;switch(inputs[4].value){case"SI":res=round((M-1)/R,2);break;case"CI":res=round(getBaseLog(M,1+R),2);break}inputs[5].value=`Time to ${M}x your money is ${res} ${mM}`}function calcEasy(){var inputs=document.getElementById("calc").elements;var spec=false;for(var i=0;i<inputs.length;i++){if(inputs[i].nodeName=="INPUT"&&!inputs[i].hasAttribute("disabled")){if(isNumeric(inputs[i].value)){inputs[i].style.boxShadow=""}else{inputs[i].style.boxShadow="0px 2px 0px red";if(!spec){spec=true}}}}if(spec){[...Array(6).keys()].forEach(function(n){inputs[n+2].value="Input valid values"});return}let angle;if(inputs[1].value=="Radians"){angle=inputs[0].value%Math.PI}else{angle=inputs[0].value%360*Math.PI/180}let sin=0;let cos=0;let tan=0;let cosec=0;let sec=0;let cot=0;for(i=0;i<=30;i++){sin+=Math.pow(-1,i)*Math.pow(angle,2*i+1)/factorial(2*i+1);cos+=Math.pow(-1,i)*Math.pow(angle,2*i)/factorial(2*i)}tan=round(sin,10)/round(cos,10);cosec=1/round(sin,10);sec=1/round(cos,10);cot=1/round(tan,10);inputs[2].value=round(sin,10);inputs[3].value=round(cos,10);inputs[4].value=tan;inputs[5].value=cosec;inputs[6].value=sec;inputs[7].value=cot}function isitPrime(){var inputs=document.getElementById("prime-form").elements;var spec=false;for(var i=0;i<inputs.length;i++){if(inputs[i].nodeName=="INPUT"&&!inputs[i].hasAttribute("disabled")){if(isNumeric(inputs[i].value)){inputs[i].style.boxShadow=""}else{inputs[i].style.boxShadow="0px 2px 0px red";if(!spec){spec=true}}}}if(spec){inputs[1].value="Input valid values";return}if(isPrime(+inputs[0].value)){inputs[1].value="Yes"}else{inputs[1].value="No"}}function logTaylor(){var inputs=document.getElementById("log-form").elements;var spec=false;for(var i=0;i<inputs.length;i++){if(inputs[i].nodeName=="INPUT"&&!inputs[i].hasAttribute("disabled")){let str=inputs[i].value;if(inputs[i].value.includes("e")||inputs[i].value.includes("π")){str=str.replace(/e/g,"");str=str.replace(/\u03c0/g,"");console.log(str)}if(isNumeric(str)||str==0){inputs[i].style.boxShadow=""}else{inputs[i].style.boxShadow="0px 2px 0px red";if(!spec){spec=true}}}}if(spec){inputs[2].value="Input valid values";return}let x=+inputs[0].value;let base=inputs[1].value;let loga=0;let logb=0;let num=x-1;let denom=x+1;if(base=="e"){base=Math.E}else if(base=="π"){base=Math.PI}else{base=+inputs[1].value}console.log(base);for(let n=1;n<=40;n+=2){loga+=1/n*Math.pow(num/denom,n);logb+=1/n*Math.pow((base-1)/(base+1),n)}inputs[2].value=round(loga/logb,0)}var pushed=true;function pushNav(){if(!pushed){document.getElementById("pushNav").style.maxHeight="0";pushed=true}else{document.getElementById("pushNav").style.maxHeight=`${navHeight}px`;pushed=false}}function sortForms(){let input=document.getElementById("searchInp");let re=input.value;let query=[];let forms=document.querySelectorAll("section[class*='Form'] h2");for(let i=0;i<forms.length;i++){query.push(forms[i].innerText)}if(!re){for(let i=0;i<=query.length;i++){let th=query[i];xpath=`//h2[text()='${th}']`;matchingElement=document.evaluate(xpath,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;matchingElement.parentElement.parentElement.style.display="block"}return}let res=fuzzysort.go(re,query,{threshold:-5e3,limit:Infinity,allowTypo:true});var xpath=`//h2[text()='${res[0].target}']`;var matchingElement=document.evaluate(xpath,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;matchingElement.parentElement.parentElement.style.display="block";for(let i=0;i<query.length;i++){let isMatch=false;res.forEach(function(e){if(query[i]==e.target){isMatch=true}});if(isMatch){continue}let th=query[i];xpath=`//h2[text()='${th}']`;matchingElement=document.evaluate(xpath,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;matchingElement.parentElement.parentElement.style.display="none"}if(window.matchMedia("(min-width: 768px)").matches){resizeAllGridItems()}}document.getElementById("submit1").addEventListener("click",si_int);document.getElementById("submit2").addEventListener("click",ci_int);document.getElementById("submit3").addEventListener("click",moneyMult);document.getElementById("submit4").addEventListener("click",calcEasy);document.getElementById("submit5").addEventListener("click",isitPrime);document.getElementById("submit6").addEventListener("click",logTaylor);document.getElementById("searchBtn").addEventListener("click",sortForms);document.getElementById("navBtn").addEventListener("click",pushNav);var navLinks=document.getElementsByClassName("nav-link");var navHeight=navLinks[0].clientHeight;navHeight*=navLinks.length;if(!window.matchMedia("(min-width: 768px)").matches){for(var i=0;i<navLinks.length;i++){navLinks[i].addEventListener("click",pushNav)}}
