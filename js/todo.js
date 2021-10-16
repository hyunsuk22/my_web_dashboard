const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //새로고침 전 입력한 array삽입을 위해 let을 사용

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement; 
    //지우기 전에 지우려는 대상의 id를 li에 넣었고, 그걸로 지금 지우려는 대상과 비교시켜 filer로 걸러내기.
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos(); //변동사항을 다시 한번 저장
    
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id; // li에 obj id를 받기.
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = "😇";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //span을 child 자식으로 상속
    li.appendChild(button); // 버튼도 상속

    span.innerText = newTodo.text; //newTodo를 이제 오브젝트로 받기때문에 key값을 받기. 
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value; //save current value.
    toDoInput.value = "";

   const newTodoObj = {
       text: newToDo,
       id: Date.now(), //랜덤하게 ID를 부여하기 위해서 
   }
    
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const getSavedToDos = localStorage.getItem(TODOS_KEY);

if(getSavedToDos){ // getSavedToDos != null
    const parsedToDos = JSON.parse(getSavedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); //painToDo의  newToDo에 forEach의 event가 각 배열을 가지고 실행된다
}
