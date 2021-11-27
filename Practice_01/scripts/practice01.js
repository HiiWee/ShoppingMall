// 외부참조
function alertDialogBox() {
  // alert(), confirm()은 DB연동시 실질적인 값을 체크하는 유효성 검사에 많이 사용됨
  // alert("확인을 누를 때까지 다른 작업을 할 수 없습니다."); 
  //confirm("간단한 메시지");   // 값의 유무를 참, 거짓을 따질때 많이 사용된다. (로그인 등등)
  if (confirm("Are you sure?") == true) {
    //true
    alert("확인 버튼을 누르셨군요");
    console.log("확인버튼");
  } else {
    //false
    alert("취소 버튼을 누르셨군요");
    console.log("취소버튼");
  }
}

console.log(2 * 7);
/* 3주차 */
function changeType() {
  var a = 20; /* 숫자형 */
  var b = "이십"; /* 문자형 */

  var c = "3"; // 숫자로 변환 될 수 있는 문자열이므로 묵시적인 형변환 가능.
  var d = "5";

  //alert("C * d = " + c * d);  // 묵시적인 형변환 작용 15라는 정수형 결과값이 반환된다.

  var e = 1;
  //alert("e - '문자' = " + e - "문자") //NaN(Not a Number 화면에 출력) 발생

  var f = "10";
  Number("10"); // 정수변환
  String(true); // 문자열변환

  var date = new Date();
  var dateTime = date.getTime();
  var dateMin = date.getMinutes();
  var dateSec = date.getSeconds();
  //alert("dateSec = " + dateSec);

  var g = "abc";
  var h = "bcd";
  //alert(g <= h);

  /*
  var x = 3;
  var y = "3";
  var z = 3;

  alert(x == y);   //강제형변환되어 true 반환한다.
  alert(x === y);  // 자동형변환이 되지 않고 타입이 다르므로(숫자, 문자) false반환
  */

  var x = 3 + 4;
  var y = "have a" + " nice day!";
  var z = 12 + "month";

  alert(z + ' ' + dateTime + ' ' + dateMin);
}


/* <<< 4주차 DOM 요소의 선택 >>>  */
var selectedItem = document.getElementsByTagName("li");
for (var i = 0; i < selectedItem.length; i++) {
  selectedItem.item(i).style.color = "red";
}

// 자바스크립트에서 아이디(id)를 이용한 선택은 해당 아이디를 가지고 있는 요소 중에서
// 첫 번째 요소 단 하나만을 선택합니다.
var selectedItem2 = document.getElementById("even");
selectedItem2.style.color = "yellow";

// 클래스명을 이용한 요소 선택
var selectedItem3 = document.getElementsByClassName("odd");
for (var i = 0; i < selectedItem3.length; i++) {
  selectedItem3.item(i).style.color = "aqua";
}

// name속성을 이용한 선택
var selectedItem4 = document.getElementsByName("first");
for (var i = 0; i < selectedItem4.length; i++) {
  selectedItem4.item(i).style.color = "orange";
}

//CSS 선택자(selector)를 이용한 선택
var selectedItem5 = document.querySelectorAll("li.apple");
for (var i = 0; i < selectedItem5.length; i++) {
  selectedItem5.item(i).style.color = "green";
}

// HTML 객체 집합(object collection)을 이용한 선택
//var title = document.title; // <title> 요소를 선택함
//document.write(title);


//DOM 요소의 내용 변경
function changeText() {
  var str = document.getElementById("text");
  str.innerHTML = "이 문장으로 바뀌었습니다!!!"
}


// HTML 요소의 속성 이름을 이용한 속성값도 변경(href 속성 값 변경)
function changeLink() {
  var link = document.getElementById("link");
  link.href = "https://www.daum.net";
  link.innerHTML = "네이버를 다음으로 변경했습니다.";
}


//DOM 요소의 스타일 변경(style 프로퍼티를 이용하여 HTML요소에 CSS 스타일을 적용합니다.)
var str = document.getElementById("coke");

function changeColorRed() {
  str.style.color = "red";
}

function changeColorYellow() {
  str.style.color = "yellow";
}





/* <<< 5주차 객체 동적 삽입 >>>  */

// 객체 동적 삽입 예제(1)
function addAnswer(obj, text) {
  var o = obj.parentElement;    //또는 obj.parentNode
  var newP = document.createElement("p");

  newP.innerHTML = text;
  o.appendChild(newP);
  newP.onclick = function() {     //p 태그를 누르면 자기 자신이 사라짐
    var p = this.parentElement;
    if(confirm("정말 삭제하시겠습니까?") == true) {
      alert("삭제되었습니다.");
      p.removeChild(this);      // functioni() 자체는 {}이지만 할당하는 행위이므로 마지막에 세미콜론으로 구분지어주는것이 좋을것같음
    }
  };
}

// 객체 동적 삽입 예제(2)
/*
document.write("<h3>17개의 CSS 색 이름과 색</h3>");

var colorNames = ["maroon", "crimson", "orange", "yellow", "olive",
                  "purple", "fuchsia", "white", "lime", "green",
                  "navy", "blue", "aqua", "teal", "black", "silver","gray"];

for (var i = 0; i < colorNames.length; i++) {
  document.write("<div style='background-color:" + colorNames[i] + "; width:60px; display:inline-block;'>" + colorNames[i] + "</div>");
}
*/


// 객체 동적 삽입 예제(3 이미지 동적삽입)
function imgCreate() {
  var div = document.getElementById("img_div");
  div.innerHTML = "<img src='images/developer.jpg' id='picture'/>";
}

function imgDelete() {
  var div = document.getElementById("img_div");
  var picture = document.getElementById("picture");
  
  div.removeChild(picture);
}


/* <<<window 객체>>> */
// Window 객체 브라우저 창 크기 측정
var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
// 어느 윈도우에서나 나오게 하기위해 모든 형식을 작성
//document.write("현재 웹 브라우저의 너비(width)는 " + windowWidth + " 높이(height)는 " + windowHeight + " 픽셀 입니다.");

/*window 객체의 모든 메소드나 프로퍼티를 사용할 때는 window라는 접두사를 생략할 수 있습니다.
따라서 위의 예제에서 window.innerWidth 대신 그냥 innerWidth를 사용해도 정상적으로 동작합니다. */

//window 접두사 생략 가능
/*
alert("전역 함수 호출시 window 접두사 생략 가능!!");
document.write("현재 브라우저의 수평 위치는" + screenX + "입니다.");
document.write("현재 브라우저의 수평 위치는" + screenY + "입니다.");
document.write(document.title);
*/

// 윈도우 객체의 open()/close() method
var newWindowObj; //전역변수
var strWindowFeatures = "menubar=yes, location=yes, resizable=yes, scrollbars=yes, status=yes"
function openWindow() {
  newWindowObj = window.open("https://www.naver.com", "네이버", "strWindowFeatures");
                            //순서대로 주소, 설명, 설정
}

function closeWindw() {
  newWindowObj.close();
}



/* <<<location 객체>>> */
// 현재 문서의 주소 출력
//alert("현재 문서의 주소는 " + location.href + " 입니다")

// 현재 호스트의 이름을 출력
//alert("현재 문서의 host는 " + location.hostnmae + " 입니다.");

// 현재 문서의 파일 경로명
//alert("현재 문서의 파일 경로명은 " + location.pathname + " 입니다.");

// 새로운 문서 열기
function openDocument() {
  location.assign("https://www.naver.com");
  // 뒤로가기로 원래 페이지로 돌아갈 수 있음
}
// 이전 문서 삭제 후 새로운 문서 열기
function openDocumentWithReplace() {
  location.replace("https://www.naver.com");
  // 뒤로가기를 할 수 없음
}





/* <<<history 객체>>> */
document.getElementById("history_cnt").innerHTML = "현재 브라우저의 히스토리 목록의 개수는 " + history.length + "개 입니다."


/* <<< 6주차  >>>  */

//뒤로가기 버튼 실습 (history객체, back())
function goBack() {
  window.history.back();
}

//뒤로가기 버튼 실습2 (history.go()를 이용)
function go() {
  window.history.go(-1); // 인수로 전달받는 정수만큼 히스토리 목록 사이 이동
}

// goForward() 실습
function goForward() {
  window.history.forward();
}


// 예제 1) history가 없을때 뒤로가기 버튼을 누르면 메인홈페이지로 이동하게 만들기
function goBack2() {
  if (document.referrer) { //페이지에 바로 접근시 이 값은 빈 문자열을 반환
    history.back();
  }
  else {
    location.href = "http://www.naver.com"; //referr 비어있을시 네이버로 이동
  }
}

// 예제 2) 뒤로가기 버튼 방지
function noBack() {
  location.replace("http://127.0.0.1:5501/Practice_01/index.html"); //간단한 post방식 전송 뒤로가기를 막음
  //get방식, post방식 차이 알기
}

// 예제 3) redirect 실습 >> function 이 아니라 자동적으로 실행되는 방식
// a페이지가 구 페이지 b페이지가 신 페이지 일경우 a로 접속하면 b로접속되게 하는방법
if (window.location == 'http://127.0.0.1:5501/Practice_01/index.html') { // 이 주소로 접속하게 되면
  //window.location.href='https://www.naver.com';           // 이주소로 리 다이렉트 하라
}


/* <<<screen 객체>>> */

// 사용자의 화면크기 알아오기(Screen 객체)
document.write("현재 사용자의 디스플레이 화면의 너비는" + screen.width + "픽셀 입니다.");
document.write("<br>현재 사용자의 디스플레이 화면의 높이는" + screen.height + "픽셀 입니다.");
// 사용자의 현재 윈도우 창의 너비, 높이 알아오기(window 객체)
document.write("<br>윈도우 창의 너비는" + window.outerWidth + "픽셀 입니다.");
document.write("<br>윈도우 창의 높이는" + window.outerHeight + "픽셀 입니다.<br>");


// 작업표시줄과 같은 공간을 제외한 실제 사용할 수 있는 크기를 반환
document.write("실제 사용할 수 있는 화면의 너비는" + screen.availWidth + "픽셀 입니다.<br>");
document.write("실제 사용할 수 있는 화면의 높이는" + screen.availHeight + "픽셀 입니다.<br>");

// 한 색상당 사용할 수 있는 비트수 : 실제 사용할 수 있는 화면의 비트 컬러 알아오기 (Screen)
var bitColorDepth = screen.colorDepth;
document.write("사용자 화면에서 한 색상당 사용할 수 있는 비트수는 " + bitColorDepth + "개 입니다.<br>");
document.write("즉, 한 색상은 총 " + Math.pow(2, bitColorDepth) + "가지로 표현됩니다.<br>");

// 화면 픽셀당 표시할 수 있는 비트수
var bitPixerDepth = screen.pixelDepth;
document.write("사용자 화면의 한 픽셀당 표시할 수 있는 비트수는 " + bitPixerDepth + "개 입니다.<br>");


/* <<<Navigator 객체>>> */
// navigator 객체 01 : 현재 사용중인 브라우저의 이름 (웹 표준에서 제외됨)
document.write("현재 사용 중인 브라우저의 이름은 " + navigator.appName + "입니다.<br>");
document.write("또한, 해당 브라우저의 코드명은 " + navigator.appCodeName + "입니다.<br>");

// navvigator 객체 02 : 현재 브라우저의 버전 (웹 표준에서 제외됨)
document.write("현재 사용중인 브라우저의 버전 정보는" + navigator.appVersion + "입니다.<br>");
document.write("userAgent 프로퍼트로 알 수 있는 추가 정보는" + navigator.userAgent + "입니다.<br>");

// navigator 객체 03 : 현재 브라우저가 실행되고 있는 운영체제
document.write("현재 브라우저가 실행되고 있는 운영체제는 " + navigator.platform + "입니다.<br>");

// navigator 객체 04 : 현재 브라우저가 사용하고 있는 언어 설정
document.write("현재 브라우저의 기본 언어 설정은 " + navigator.language + "입니다.<br>");

// navigator 객체 05 : 자바 애플릿 실행 여부 check
document.write("현재 브라우저는 자바 애플릿을");
if (navigator.javaEnabled()){
  document.write(" 실행할 수 있습니다.<br>");
}
else {
  document.write(" 실행할 수 없습니다.<br>");
}

// navigator 객체 05 : 쿠키(cookie) 사용 여부
document.write("현재 브라우저는 쿠키를");
if (navigator.cookieEnabled) {
  document.write(" 사용할 수 있습니다.<br>");
}
else {
  document.write(" 사용할 수 없습니다.<br>");
}

// navigator 객체 브라우저 체킹 실습 예제 1 )
function isBrowserCheck() {
  const agt = navigator.userAgent.toLowerCase();  // var 대신 const를 사용하면 상수로 선언 가능

  if (agt.indexOf("chrome") != -1) {
    return 'Chrome';
  }
  if (agt.indexOf("opera") != -1) {
    return 'Opera';
  }
  if(agt.indexOf("staroffice") != -1) {
    return 'Star Office';
  }
  if(agt.indexOf("webtv") != -1) {
    return 'Web Tv';
  }
  if(agt.indexOf("beonex") != -1) {
    return 'Beonex';
  }
  if(agt.indexOf("chimera") != -1) {
    return 'chimera';
  }
  if(agt.indexOf("netpositive") != -1) {
    return 'NetPositive';
  }
  if(agt.indexOf("phoenix") != -1) {
    return 'Phoenix';
  }
  if(agt.indexOf("firefox") != -1) {
    return 'Firefox';
  }
  if(agt.indexOf("safari") != -1) {
    return 'Safari';
  }
  if(agt.indexOf("skipstone") != -1) {
    return 'SkipStone';
  }
  if(agt.indexOf("netscape") != -1) {
    return 'Netscape';
  }
  if(agt.indexOf("mozilla") != -1) {
    return 'Mozilla';
  }
  if(agt.indexOf("msie") != -1) {
    let rv = -1;
    if(navigator.appName == 'Microsoft Internet Explorer') {
      let us = navigator.userAgent;
      var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    }
    if (re.exec(ua) != NULL) {
      rv = parseFloat(RegExp.$1);
    }
    return 'Internet Explorer ' + rv;
  }
}

const browser = isBrowserCheck();
alert("browser = " + browser);