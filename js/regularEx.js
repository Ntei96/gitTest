const regexId = /^\w{8,20}$/; //8글자 이상 20글자 이하
const regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
//알파벳 대소문자, 숫자, 특수문자 8~20자
const regexMail = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
const regexTel = /^\d{2,3}-\d{3,4}-\d{4}$/;



//올바르게 입력했는지
let isId = false;
//버튼들
const idBtn = document.querySelector('#id_confirm')
//유효성 검사후 결과를 표시해주는 p태그들
let idCheck = document.querySelector('.id_input_check')
                                      //event (새로고침을 막기위해 기능부과)
idBtn.addEventListener('click', function(e) {
  e.preventDefault();

  let val = document.querySelector('#id_txt').value;
  // console.log(document.querySelector('#id_txt').value); //확인용
  // console.log(regexId.test(val));
  isId = regexId.test(val); //간소화-1
  showMsg(isId, idCheck)  //간소화-2
  // if(regexId.test(val)) {
  //   isId = true;
  //   idCheck.innerHTML = "사용 가능한 아이디입니다"
  //   idCheck.style.color = "green"
  // } else {
  //   isId = false;
  //   idCheck.innerHTML = "사용 불가능한 아이디입니다"
  //   idCheck.style.color = 'red'
  // }
  // isOk();
})

let isPw = false;
const pwBtn = document.querySelector('#pw_confirm')
let pwCheck = document.querySelector('.pw_input_check')
pwBtn.addEventListener('click', function(e) {
  e.preventDefault();
  let val = document.querySelector('#pw_txt').value;
  isPw = regexPw.test(val); //간소화-1
  showMsg(isPw, pwCheck)  //간소화-1
  // if(regexPw.test(val)) {
  //   isPw = true;
  //   pwCheck.innerHTML = "사용 가능한 비밀번호입니다"
  //   pwCheck.style.color = "green"
  // } else {
  //   isPw = false;
  //   pwCheck.innerHTML = "사용 불가능한 비밀번호입니다"
  //   pwCheck.style.color = 'red'
  // }
  // isOk();
})

let isEmail = false;
const emailBtn = document.querySelector('#email_confirm')
let emailCheck = document.querySelector('.email_input_check')
emailBtn.addEventListener('click', function(e) {
  e.preventDefault();
  let val = document.querySelector('#email_txt').value;
  isEmail = regexMail.test(val);  //간소화-1
  showMsg(isEmail, emailCheck)  //간소화-2
  // if(regexMail.test(val)) {
  //   isEmail = true;
  //   emailCheck.innerHTML = "사용 가능한 이메일입니다"
  //   emailCheck.style.color = "green"
  // } else {
  //   isEmail = false;
  //   emailCheck.innerHTML = "사용 불가능한 이메일입니다"
  //   emailCheck.style.color = 'red'
  // }
  // isOk();
})

let isPhone = false;
const phoneBtn = document.querySelector('#phone_confirm')
let phoneCheck = document.querySelector('.phone_input_check')
phoneBtn.addEventListener('click', function(e) {
  e.preventDefault();
  let val = document.querySelector('#phone_txt').value;
  isPhone = regexTel.test(val); //간소화-1
  showMsg(isPhone, phoneCheck)  //간소화-2
  // if(regexTel.test(val)) {
  //   isPhone = true;
  //   phoneCheck.innerHTML = "사용 가능한 전화번호입니다"
  //   phoneCheck.style.color = "green"
  // } else {
  //   isPhone = false;
  //   phoneCheck.innerHTML = "사용 불가능한 전화번호입니다"
  //   phoneCheck.style.color = 'red'
  // }
  // isOk();
})

//간소화(주석처리와 비교!)
function showMsg(isX, xCheck) {
  if(isX) {
    xCheck.innerHTML = "사용가능"
    xCheck.style.color = "green"
  } else {
    xCheck.innerHTML = "사용불가능"
    xCheck.style.color = "red"
  }
  isOk();
}

function isOk() {
if(isId && isPw && isEmail && isPhone) {
  document.querySelector('.reg_req_btn').style.backgroundColor = 'blue';
  }
}

