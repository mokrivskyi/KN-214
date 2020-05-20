window.onload = () =>{
// отримуємо всі поля форми
let name = document.getElementsByClassName("form-name")[0];
let email = document.getElementsByClassName("form-email")[0];
let tel = document.getElementsByClassName("form-tel")[0];
let textarea = document.getElementsByClassName("form-message")[0];

let submitBtn = document.getElementsByClassName("form-submit")[0];


// подія для кнопки форми - емуляція відправки
submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); // сказування стандартної поведінки форми
    if (formValidate()) {
      clearControls();
      swal({ // вспливаюче меню
        title: "Повідомлення відправлено",
        text: "Ваше повідомлення було відправлено",
        type: "success",
        position: "bottom",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        showCancelButton: false,
        timer: 1500
      });
    }
else{   
        swal({
          title: "Помилка",
          text: "Введіть коректно всі поля",
          type: "warning",
          position: "bottom",
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          showConfirmButton: false,
          showCancelButton: false,
          timer: 1500
        });
    }
    
    
  });
  
  
  function formValidate() {
    let valid = true;
    if (!textValidation(name)) {
      valid = false;
    }
    if (!validateEmail(email)) {
      valid = false;
    }
    if (!numberValidation(tel)) {
      valid = false;
    }
    if (!textValidation(textarea)) {
      valid = false;
    }
    return valid;
  }
  
  function textValidation(name) {
    return name.value.trim().length > 4
  }
  
  
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email.value).toLowerCase());
  }
  
  function numberValidation(num) {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
      num.value
    );
  }
  
  //очищення полів вводу
  function clearControls() {
    name.value = ""
    email.value = ""
    tel.value = ""
    textarea.value = ""
  }
  
  // реагування на фокус 
[name, email, tel, textarea].forEach(el => {
    el.addEventListener("focus", ()=>{
        el.style.border="3px blue solid"
    })   
    
el.addEventListener("blur", ()=>{
    el.style.border="1px #fff solid"
})

});
}


// зміна теми
let first = true;

if(first){ // при першому запуску підключення файлу по дефолту
    includeCss()
    first = false

}
    

function includeCss(a){ // функція для підключення потрібного css файлу
    if(document.getElementById('id-toggle'))
        document.getElementById('id-toggle').remove()
    if(a==='ligth'){
        var file = 'css/theme.css'
    }else{
        var file = 'css/main.css'
       
    }
    var link = document.createElement("link");
    link.setAttribute("id", "id-toggle")
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", file);
    document.getElementsByTagName("head")[0].appendChild(link);


}

document.getElementsByClassName("btn-ligth")[0].addEventListener("click", ()=>{
    includeCss('ligth')
})

document.getElementsByClassName("btn-dark")[0].addEventListener("click", ()=>{
    includeCss('dark')
})

    