
// <<<<<7주차>>>>>
/*
--------------------------------------------------------------------------- 
                                로그인
--------------------------------------------------------------------------- */
function loginChk() {
  //1. 입력된 아이디 가져오기, 2.입력된 비밀번호 가져오기, 3. 로그인 체크
  // 이후 아이디 맞는지 유효성 체크(미리 저장되어 있는 아이디 이용)

  var chkId = document.getElementById("login_id").value;
  var chkPwd = document.getElementById("login_pwd").value;

  // 로그인 체크 (admin/admin123, user01/user111, user02/user222, user03/user333)

  //<<<<<8주차>>>>>
  // 01. admin / admin123 일경우
  if (chkId == "admin" && chkPwd == "admin123") {
    alert("admin님 반값습니다 ^^");
    location.href = "../HTML-LoginOK/index.html";
  }
  
  // 02. user01 / user111 일경우
  else if (chkId == "user01" && chkPwd == "user111") {
    alert("user01님 반값습니다 ^^");
    location.href = "../HTML-LoginOK/index.html";
  }

   // 03. user02 / user222 일경우
   else if (chkId == "user02" && chkPwd == "user222") {
    alert("user02님 반값습니다 ^^");
    location.href = "../HTML-LoginOK/index.html";
  }

   // 04. user03 / user333 일경우
   else if (chkId == "user03" && chkPwd == "user333") {
    alert("user03님 반값습니다 ^^");
    location.href = "../HTML-LoginOK/index.html";
  }

  // 05. 로그인 정보가 틀렸을경우
  else {
    alert("아이디가 옳지 않거나 존재하지 않는 아이디 입니다.");
  }

}

/* 로그인시 Enter 키 눌렀을때 작동되게 하기 */
// enter키가 눌렸을 때 실행할 내용
  function enterKey() {
    if (window.event.keyCode == 13) {  // 엔터키 코드 = 13
      loginChk();
    }
  }


/*
--------------------------------------------------------------------------- 
                                회원가입 (9주차)
--------------------------------------------------------------------------- */
  function  signUpChk() {
    var signUpId = document.getElementById("signUpId").value;
    var signUpPw = document.getElementById("signUpPw").value;
    var signUpPwChk = document.getElementById("signUpPwChk").value;
    var signUpName = document.getElementById("signUpName").value;
    var birthYear = document.getElementById("birthYear").value;
    var birthMonth = document.getElementById("birthMonth").value;
    var birthDay = document.getElementById("birthDay").value;
    var signUpGen = document.getElementById("signUpGen").value;
    var signUpPhnNum = document.getElementById("signUpPhnNum").value;
    var signUpMail = document.getElementById("signUpMail").value;
    // 패턴체크
    var patternChk1 = /['~!@#$%^&*|\\\'\";:\/?]/gi; //아이디 특수문자 체크
    var patternChk2 = /[0-9]/;
    var patternChk3 = /[a-zA-Z]/;
    var patternChk4 = /[~!@#$%^&*()_+:{}]/;

    // 아이디 유효성 체크
    if (signUpId.length == 0) {
      alert("아이디를 입력해 주십시오");
      return; //exit 기능, return만 사용하면 null반환.
    }
    else if (signUpId.search(/\s/) != -1) {  //아이디 공백 체크
      alert("아이디에 공백은 들어갈 수 없습니다.");
      return; //exit 기능, return만 사용하면 null반환.
    }
    else if (patternChk1.test(signUpId)) {  // 아이디 특수 문자 체크
      alert("아이디에 특수문자는 들어갈 수 없습니다.");
      return; //exit 기능, return만 사용하면 null반환.
    }
    // 비밀번호 유효성 체크
    // 8자리 이상 문자, 숫자, 특수문자로 구성하여야 합니다.
    else if (!patternChk2.test(signUpPw) || !patternChk3.test(signUpPw) || !patternChk4.test(signUpPw) || signUpPw.length < 8) {
      alert("비밀번호는 8자리 이상 문자, 숫자, 특수문자로 구성하여야 합니다.");
      return; //exit 기능, return만 사용하면 null반환.
    }

    // 비밀번호 재확인 체크
    else if (signUpPw != signUpPwChk) {
      alert("입력 한 비밀번호가 같지 않습니다.");
      return; //exit 기능, return만 사용하면 null반환.
    }

    // 이름 체크 
    else if (signUpName.length == 0) {
      alert("이름을 입력해 주십시오");
      return; //exit 기능, return만 사용하면 null반환.
    }
    else if (signUpName.search(/\s/) != -1) {
      alert("이름에 공백은 들어갈 수 없습니다.");
      return; //exit 기능, return만 사용하면 null반환.
    }
    else if (patternChk1.test(signUpName)) {
      alert("이름에 특수문자는 들어갈 수 없습니다.");
      return; //exit 기능, return만 사용하면 null반환.
    }

    // 생년월일 체크
    else if (birthYear.length != 4) {
      alert("년도는 4자리 숫자이어야 합니다.");
      return; //exit 기능, return만 사용하면 null반환.
    }
    else if (birthMonth.length == 0) {
      alert("month를 입력하세요.");
      return; //exit 기능, return만 사용하면 null반환.
    }
    else if (birthDay.length != 2) {
      alert("day는 두 자리 숫자여야 합니다.");
      return; //exit 기능, return만 사용하면 null반환.
    }

    // 성별 체크
    else if (signUpGen.length == 0) {
      alert("성별을 선택하세요");
      return; //exit 기능, return만 사용하면 null반환.
    }

    // 휴대전화 체크
    else if (signUpPhnNum.length == 0 
      || patternChk1.test(signUpPhnNum) 
      || !patternChk2.test(signUpPhnNum) 
      || patternChk3.test(signUpPhnNum) 
      || signUpPhnNum.search(/\s/) != -1) {
      alert("잘못된 휴대전화 번호입니다.");
      return; //exit 기능, return만 사용하면 null반환.
    }

    // 이메일 체크
    else if (signUpMail.length == 0) {
      alert("이메일을 입력하세요.");
      return; //exit 기능, return만 사용하면 null반환.
    }

    // 유효성 체크 통과시 가입 진행
    else {
      if (confirm("입력한 정보로 가입하시겠습니까?") == true) {
        alert("가입되었습니다. 메인페이지로 이동해서 다시 로그인 하세요.");
        location.href = "../index.html";
      }
    }
  }

