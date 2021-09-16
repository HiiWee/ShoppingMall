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

console.log(2*7);

function changeType() {
  var a = 20;       /* 숫자형 */
  var b = "이십";   /* 문자형 */

  var c = "3";  // 숫자로 변환 될 수 있는 문자열이므로 묵시적인 형변환 가능.
  var d = "5";

  //alert("C * d = " + c * d);  // 묵시적인 형변환 작용 15라는 정수형 결과값이 반환된다.
  
  var e = 1;
  //alert("e - '문자' = " + e - "문자") //NaN(Not a Number 화면에 출력) 발생

  var f = "10";
  Number("10");   // 정수변환
  String(true);   // 문자열변환

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