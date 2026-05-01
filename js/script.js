let closeBtn = document.getElementById("close-navbar");
let menuBtn = document.getElementById("menu-btn");
let navbar = document.querySelector(".navbar");
let navbarA = document.querySelector(".navbar a");

menuBtn.addEventListener("click",()=>{
  navbar.classList.add("active")
})
closeBtn.addEventListener("click",()=>{
  navbar.classList.remove("active")
});
navbarA.addEventListener("click",()=>{
  navbar.classList.remove("active")
});

let accountForm = document.querySelector(".account-form");
let accountCloseBtn = document.getElementById("close-form");
let accountOpenBtn = document.getElementById("account-btn");

accountOpenBtn.addEventListener("click",()=>{
  accountForm.classList.add("active")
})
accountCloseBtn.addEventListener("click",()=>{
  accountForm.classList.remove("active")
});


let registerBtn = document.querySelector(".register-btn");
let loginBtn = document.querySelector(".login-btn");
let registerForm = document.querySelector(".register-form");
let loginForm = document.querySelector(".login-form");

registerBtn.addEventListener("click",()=>{
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
  registerForm.classList.add("actives");
  loginForm.classList.remove("actives");
})

loginBtn.addEventListener("click",()=>{
  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
  loginForm.classList.add("actives");
  registerForm.classList.remove("actives");
})


let accordion = document.querySelectorAll('.accordion')
accordion.forEach(el=>{
  el.addEventListener('click',removeActive)
})
function removeActive() {
  accordion.forEach(el=>{
    el.classList.remove('active');
    this.classList.add('active');
  })
}



let btnTop = document.querySelector(".top");

window.addEventListener('scroll',()=>{
  if(window.scrollY >= 300){
    btnTop.style.display = "block";
  }else{
    btnTop.style.display = "none";
  }
})
btnTop.onclick = ()=>{
  window.scrollTo({
    top : 0,
    left: 0,
    behavior: "smooth"
  })
}



let navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((a)=>{
  if(a.href === window.location.href){
    a.classList.add("active");
  }
})