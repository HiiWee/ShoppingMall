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
var title = document.title; // <title> 요소를 선택함
document.write(title);


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
function changeColorRed() { str.style.color = "red"; }
function changeColorYellow() { str.style.color = "yellow"; }