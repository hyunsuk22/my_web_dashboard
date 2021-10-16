const loginForm = document.querySelector("#login-form"); 

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); //hidden 클래스 추가로 숨기기
    
    const username = loginInput.value; // input에 받은 username 삽입
    localStorage.setItem(USERNAME_KEY, username); //로컬 스토리지에 username 삽입

    paintGreeting(username);
}

function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit);
    //이름 입력란 보여주기
}else{
    paintGreeting(savedUserName);
    //인사하기
}
