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