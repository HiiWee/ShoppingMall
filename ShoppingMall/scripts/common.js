/* ---------------------------- 로그인 유효성 검사 ----------------------------*/

function loginChk() {
  var chkId = document.getElementById("loginID").value;
  var chkPwd = document.getElementById("loginPWD").value;

  // 01. admin / admin123 일경우
  if (chkId == "admin" && chkPwd == "admin123") {
    alert("admin님 반값습니다 ^^");
    location.href = "../HTML-LoginOK/main.html";
  }

  // 02. user01 / user111 일경우
  else if (chkId == "user01" && chkPwd == "user111") {
    alert("user01님 반값습니다 ^^");
    location.href = "../HTML-LoginOK/main.html";
  }

  // 03. user02 / user222 일경우
  else if (chkId == "user02" && chkPwd == "user222") {
    alert("user02님 반값습니다 ^^");
    location.href = "../HTML-LoginOK/main.html";
  }

  // 04. user03 / user333 일경우
  else if (chkId == "user03" && chkPwd == "user333") {
    alert("user03님 반값습니다 ^^");
    location.href = "../HTML-LoginOK/main.html";
  }

}
// 로그인시 엔터키 작동
function enterKey() {
  if (window.event.keyCode == 13) { // 엔터키 코드 = 13
    loginChk();
  }
}

/* ---------------------------- 아이디 찾기 ----------------------------*/

/* 이이디 찾기 : 인증번호 받기 버튼 */
function getCertiCode() {
  var userName = document.getElementById("userName").value;
  var userPhnNum = document.getElementById("userPhnNum").value;

  var patternChk1 = /[`~!@#$%^&*()|||'\";:\/?]/gi; //특수문자 체크
  var patternChk2 = /[0-9]/; //숫자 체크
  var patternChk3 = /[a-zA-Z]/; //문자 체크

  // 이름체크
  if (userName.length == 0) {
    alert("이름을 입력하세요");
    return; // exit 기능, return만 사용하면 null 반환.
  } else if (userName.search(/\s/) != -1) {
    alert("이름에 공백은 들어갈 수 없습니다.");
    return; // exit 기능, return만 사용하면 null 반환.
  } else if (patternChk1.test(userName)) {
    alert("이름에 특수문자는 들어갈 수 없습니다.");
    return; // exit 기능, return만 사용하면 null 반환.
  }
  // 휴대폰번호 체크
  else if (userPhnNum.length == 0 || patternChk1.test(userPhnNum) || !patternChk2.test(userPhnNum) || patternChk3.test(userPhnNum) || userPhnNum.search(/\s/) != -1) {
    alert("잘못된 휴대전화 정보입니다.");
    return; // exit 기능, return만 사용하면 null 반환.
  }
  // 유효성 체크 통과시 인증번호 발송.
  else {
    alert("인증번호가 발송되었습니다.");
  }
}

/* 아이디찾기 : 아이디 찾기 버튼 */
function findIdChk() {
  var userName = document.getElementById("userName").value;
  var userPhnNum = document.getElementById("userPhnNum").value;
  var certiCode = document.getElementById("certiCode").value;

  var patternChk1 = /[`~!@#$%^&*()|||'\";:\/?]/gi; //특수문자 체크
  var patternChk2 = /[0-9]/; //숫자 체크
  var patternChk3 = /[a-zA-Z]/; //문자 체크

  // 이름체크
  if (userName.length == 0) {
    alert("이름을 입력하세요");
    return; // exit 기능, return만 사용하면 null 반환.
  } else if (userName.search(/\s/) != -1) {
    alert("이름에 공백은 들어갈 수 없습니다.");
    return; // exit 기능, return만 사용하면 null 반환.
  } else if (patternChk1.test(userName)) {
    alert("이름에 특수문자는 들어갈 수 없습니다.");
    return; // exit 기능, return만 사용하면 null 반환.
  }
  // 휴대폰번호 체크
  else if (userPhnNum.length == 0 || patternChk1.test(userPhnNum) || !patternChk2.test(userPhnNum) || patternChk3.test(userPhnNum) || userPhnNum.search(/\s/) != -1) {
    alert("잘못된 휴대전화 정보입니다.");
    return; // exit 기능, return만 사용하면 null 반환.
  }
  // 인증번호 체크
  else if (certiCode.length == 0) {
    alert("인증번호가 다릅니다.");
    return; // exit 기능, return만 사용하면 null 반환.
  }

  // 유효성 체크 통과시 아이디 찾기 진행
  else {
    alert("입력하신 정보의 회원정보가 존재하지 않습니다.");
  }
}

/* ---------------------------- 비밀번호 찾기 ----------------------------*/

/* 비밀번호 찾기 : 인증번호 받기 버튼 */
function getCertiCode2() {
  var userId = document.getElementById("userId").value;
  var userName = document.getElementById("userName").value;
  var userPhnNum = document.getElementById("userPhnNum").value;

  var patternChk1 = /[`~!@#$%^&*()|||'\";:\/?]/gi; //특수문자 체크
  var patternChk2 = /[0-9]/; //숫자 체크
  var patternChk3 = /[a-zA-Z]/; //문자 체크

  // 아이디 체크
  if (userId.length == 0) {
    alert("아이디를 입력해 주십시오.");
    return; //exit 기능, return만 사용하면 null반환.
  } else if (userId.search(/\s/) != -1) {
    alert("아이디에 공백은 들어갈 수 없습니다.");
    return; //exit 기능, return만 사용하면 null반환.
  } else if (patternChk1.test(userId)) {
    alert("아이디에 특수문자는 들어갈 수 없습니다.");
    return; //exit 기능, return만 사용하면 null반환.
  }

  // 이름 체크
  else if (userName.length == 0) {
    alert("이름을 입력해 주십이오.");
    return; //exit 기능, return만 사용하면 null반환.
  } else if (userName.search(/\s/) != -1) {
    alert("이름에 공백은 들어갈 수 없습니다.");
    return; //exit 기능, return만 사용하면 null반환.
  } else if (patternChk1.test(userName)) {
    alert("이름에 특수문자는 들어갈 수 없습니다.");
    return; //exit 기능, return만 사용하면 null반환.
  }

  //휴대전화 체크
  else if (userPhnNum.length == 0 || patternChk1.test(userPhnNum) || !patternChk2.test(userPhnNum) || patternChk3.test(userPhnNum) || userPhnNum.search(/\s/) != -1) {
    alert("잘못된 휴대전화 정보 입니다.");
    return; //exit 기능, return만 사용하면 null반환.
  }

  // 유효성 체크 통과시 인증번호 발송.
  else {
    alert("인증번호가 발송되었습니다.");
  }
}

/* 비밀번호 찾기 : 비밀번호 찾기 버튼 */
function findPwChk() {
  var userId = document.getElementById("userId").value;
  var userName = document.getElementById("userName").value;
  var userPhnNum = document.getElementById("userPhnNum").value;
  var certiCode = document.getElementById("certiCode").value;

  var patternChk1 = /[`~!@#$%^&*()|||'\";:\/?]/gi; //특수문자 체크
  var patternChk2 = /[0-9]/; //숫자 체크
  var patternChk3 = /[a-zA-Z]/; //문자 체크

  // 아이디체크
  if (userId.length == 0) {
    alert("아이디를 입력해 주십시오.");
    return; //exit 기능, return만 사용하면 null반환.
  } else if (userId.search(/\s/) != -1) {
    alert("아이디에 공백은 들어갈 수 없습니다.");
    return; //exit 기능, return만 사용하면 null반환.
  } else if (patternChk1.test(userId)) {
    alert("아이디에 특수문자는 들어갈 수 없습니다.");
    return; //exit 기능, return만 사용하면 null반환.
  }

  // 이름체크
  else if (userName.length == 0) {
    alert("이름을 입력해 주십이오.");
    return; //exit 기능, return만 사용하면 null반환.
  } else if (userName.search(/\s/) != -1) {
    alert("이름에 공백은 들어갈 수 없습니다.");
    return; //exit 기능, return만 사용하면 null반환.
  } else if (patternChk1.test(userName)) {
    alert("이름에 특수문자는 들어갈 수 없습니다.");
    return; //exit 기능, return만 사용하면 null반환.
  }

  //휴대전화 체크
  else if (userPhnNum.length == 0 || patternChk1.test(userPhnNum) || !patternChk2.test(userPhnNum) || patternChk3.test(userPhnNum) || userPhnNum.search(/\s/) != -1) {
    alert("잘못된 휴대전화 정보 입니다.");
    return; //exit 기능, return만 사용하면 null반환.
  }

  // 인증번호 체크
  else if (certiCode.length == 0) {
    alert("인증번호가 다릅니다.");
    return; //exit 기능, return만 사용하면 null반환.
  }

  // 유효성 체크 통과시 비밀번호 찾기 진행
  else {
    alert("입력하신 휴대전화 번호로 임시 비밀번호를 발송하였습니다.");
    location.href = "./main.html";
  }
}
/* ---------------------------- 로그아웃 ----------------------------*/

/* 로그아웃 버튼 infomain.html, main.html*/
function logoutChk() {
  if (confirm("로그아웃 하시겠습니까?") == true) {
    alert("로그아웃 했습니다.");
    location.href = "../HTML/main.html";
  }
}
/* 로그아웃 버튼 infomain.html, main.html*/
function logoutChk2() {
  if (confirm("로그아웃 하시겠습니까?") == true) {
    alert("로그아웃 했습니다.");
    location.href = "../../HTML/main.html";
  }
}


/* ---------------------------- 회원가입 ----------------------------*/

// 회원가입 : 가입하기 버튼
function signUpChk() {
  var signUpId = document.getElementById("signUpId").value;
  var signUpPwd = document.getElementById("signUpPwd").value;
  var signUpPwdChk = document.getElementById("signUpPwdChk").value;
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
  } else if (signUpId.search(/\s/) != -1) { //아이디 공백 체크
    alert("아이디에 공백은 들어갈 수 없습니다.");
    return; //exit 기능, return만 사용하면 null반환.
  } else if (patternChk1.test(signUpId)) { // 아이디 특수 문자 체크
    alert("아이디에 특수문자는 들어갈 수 없습니다.");
    return; //exit 기능, return만 사용하면 null반환.
  }
  // 비밀번호 유효성 체크
  // 8자리 이상 문자, 숫자, 특수문자로 구성하여야 합니다.
  else if (!patternChk2.test(signUpPwd) || !patternChk3.test(signUpPwd) || !patternChk4.test(signUpPwd) || signUpPwd.length < 8) {
    alert("비밀번호는 8자리 이상 문자, 숫자, 특수문자로 구성하여야 합니다.");
    return; //exit 기능, return만 사용하면 null반환.
  }

  // 비밀번호 재확인 체크
  else if (signUpPwd != signUpPwdChk) {
    alert("입력 한 비밀번호가 같지 않습니다.");
    return; //exit 기능, return만 사용하면 null반환.
  }

  // 이름 체크 
  else if (signUpName.length == 0) {
    alert("이름을 입력해 주십시오");
    return; //exit 기능, return만 사용하면 null반환.
  } else if (signUpName.search(/\s/) != -1) {
    alert("이름에 공백은 들어갈 수 없습니다.");
    return; //exit 기능, return만 사용하면 null반환.
  } else if (patternChk1.test(signUpName)) {
    alert("이름에 특수문자는 들어갈 수 없습니다.");
    return; //exit 기능, return만 사용하면 null반환.
  }

  // 생년월일 체크
  else if (birthYear.length != 4) {
    alert("년도는 4자리 숫자이어야 합니다.");
    return; //exit 기능, return만 사용하면 null반환.
  } else if (birthMonth.length == 0) {
    alert("month를 입력하세요.");
    return; //exit 기능, return만 사용하면 null반환.
  } else if (birthDay.length != 2) {
    alert("day는 두 자리 숫자여야 합니다.");
    return; //exit 기능, return만 사용하면 null반환.
  }
  // 성별 체크
  else if (signUpGen.length == 0) {
    alert("성별을 선택하세요");
    return; //exit 기능, return만 사용하면 null반환.
  }

  // 휴대전화 체크
  else if (signUpPhnNum.length == 0 ||
    patternChk1.test(signUpPhnNum) ||
    !patternChk2.test(signUpPhnNum) ||
    patternChk3.test(signUpPhnNum) ||
    signUpPhnNum.search(/\s/) != -1) {
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
      location.href = "./main.html";
    }
  }
}



function requestPay() {
  let itemsColor = document.getElementById("itemsColor").value;
  let itemsSize = document.getElementById("itemsSize").value;
  let itmesInfo_name = document.getElementById("itemsInfo_name");
  let itemsInfo_price = document.getElementById("itemsInfo_price");
  let logIn = document.getElementsByClassName("logIn");
  if (itemsColor.length == 0 || itemsSize.length == 0) {
    alert("선택항목을 선택하십시오.");
    return;
  }
  if (logIn[0].innerText == "로그인") {
    alert("결제하기전에 로그인 해주십시오.");
    location.href = "../../login_main.html";
  }
  else if (confirm("주문 하시겠습니까?\n" + "상품명:" + itmesInfo_name.innerText +
  "\n상품가격:" + itemsInfo_price.innerText) == true) {
    location.href = "../../payment.html";
  }
}

function addCart() {
  var color = document.getElementById("itemsColor").value;
  var size = document.getElementById("itemsSize").value;

  if (color.length == 0 || size.length == 0) {
    alert("선택항목을 선택하십시오.");
    return;
  }
  alert("장바구니에 담겼습니다.");
}
/* ---------------------------- 결제하기 ----------------------------*/
function orderPayChk() {
  let paymentName = document.getElementById("paymentName").value
  let paymentAddr = document.getElementById("paymentAddr").value
  let paymentPhone = document.getElementById("paymentPhone").value
  let payMethod1 = document.getElementById("payMethod1").checked // boolean type
  let payMethod2 = document.getElementById("payMethod2").checked // boolean type
  let payMethod3 = document.getElementById("payMethod3").checked // boolean type
  let depositor = document.getElementById("depositor").value

  let patternChk1 = /['~!@#$%^&*|\\\'\";:\/?]/gi; //아이디 특수문자 체크
  let patternChk2 = /[0-9]/;
  let patternChk3 = /[a-zA-Z]/;
  // 이름 체크 
  if (paymentName.length == 0) {
    alert("이름을 입력해 주십시오");
    return; //exit 기능, return만 사용하면 null반환.
  } else if (paymentName.search(/\s/) != -1) {
    alert("이름에 공백은 들어갈 수 없습니다.");
    return; //exit 기능, return만 사용하면 null반환.
  } else if (patternChk1.test(paymentName)) {
    alert("이름에 특수문자는 들어갈 수 없습니다.");
    return; //exit 기능, return만 사용하면 null반환.
  }
  
  // 배송지 주소 체크
  else if (paymentAddr.length == 0) {
    alert("배송지 주소를 입력해 주십시오");
    return; //exit 기능, return만 사용하면 null반환.
  } else if (patternChk1.test(paymentAddr)) {
    alert("베송지 주소에 특수문자는 들어갈 수 없습니다.");
    return; //exit 기능, return만 사용하면 null반환.
  }

  // 휴대전화 체크
  else if (paymentPhone.length == 0 ||
    patternChk1.test(paymentPhone) ||
    !patternChk2.test(paymentPhone) ||
    patternChk3.test(paymentPhone) ||
    paymentPhone.search(/\s/) != -1) {
    alert("잘못된 휴대전화 번호입니다.");
    return; //exit 기능, return만 사용하면 null반환.
  }

  // 결제수단 체크
  else if (payMethod1 == false && payMethod2 == false && payMethod3 == false) {
    alert("결제수단을 선택해야 합니다.");
    return;
  }

  // 입금자명 체크
  else if (depositor.length == 0) {
    alert("이름을 입력해 주십시오");
    return; //exit 기능, return만 사용하면 null반환.
  } else if (depositor.search(/\s/) != -1) {
    alert("이름에 공백은 들어갈 수 없습니다.");
    return; //exit 기능, return만 사용하면 null반환.
  } else if (patternChk1.test(depositor)) {
    alert("이름에 특수문자는 들어갈 수 없습니다.");
    return; //exit 기능, return만 사용하면 null반환.
  }
  else {
    alert("결제가 완료되었습니다.");
    location.href = "./main.html";
  }
}