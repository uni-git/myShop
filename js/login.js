function login(){

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let check = true;
  
    // 이메일확인
    if(email.includes('@')){
      let emailId = email.split('@')[0]
      let emailServer = email.split('@')[1]
      if(emailId === "" || emailServer === ""){
        document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
        check = false
      }
      else{
        document.getElementById("emailError").innerHTML=""
      }
    }else{
      document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
      check = false
    }
  

    if(password===""){
      document.getElementById("passwordError").innerHTML="비밀번호를 입력해주세요."
      check = false
    }else{
      //document.getElementById("passwordError").innerHTML=""
    }
  
    if(check){
      document.getElementById("emailError").innerHTML=""
      document.getElementById("passwordError").innerHTML=""

    //   //비동기 처리이벤트
    //   setTimeout(function() {
    //     alert("가입이 완료되었습니다.")
    // },0);

    }
}