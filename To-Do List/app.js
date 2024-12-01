const textInput = document.getElementById("text");
const addBtn = document.getElementById("add");
const contents = document.getElementById("contents"); // 'contents'라는 ID를 가진 요소가 있다고 가정
const allSelctBtn = document.getElementById("allSelect");
const allDeleteBtn = document.getElementById("allDelete");
const removeBtn = document.getElementById("remove");
const importantBtn = document.getElementById("important");
const resetBtn = document.getElementById("reset");

function add() {
    const text = textInput.value.trim(); // 사용자 입력값 가져오기
    if (text !== "") { // 빈 문자열 확인
        contents.insertAdjacentHTML("beforeend", 
            `<li><input type="checkbox" name="CntCheck" class="content" />${text}</li>`); // 입력값 추가
        textInput.value = ""; // 입력란 초기화
    }
}

function addEnter(event){
    if(event.key === 'Enter')
    {
        add();
    }
}

function allSelect() {
    const checkboxes = document.querySelectorAll(".content");
            checkboxes.forEach(checkbox => {
                checkbox.checked = true;
            });
}

function allDelete() { 
    const checkboxes = document.querySelectorAll(".content");
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
}

function removeCtn() {
    const checkboxes = document.querySelectorAll(".content:checked");
    checkboxes.forEach(checkbox => {
        checkbox.parentElement.remove();
    });
}

function importBtn() {
    const checkboxes = document.querySelectorAll(".content:checked");
    
    checkboxes.forEach(checkbox => {
        checkbox.parentElement.style.color = "red";    
    });
}

function rstBtn() {
    const checkboxes = document.querySelectorAll(".content:checked");
    
    checkboxes.forEach(checkbox => {
        checkbox.parentElement.style.color = "black";    
    });
}

addBtn.addEventListener("click", add);
textInput.addEventListener("keydown", addEnter);
allSelctBtn.addEventListener("click", allSelect);
allDeleteBtn.addEventListener("click", allDelete);
removeBtn.addEventListener("click", removeCtn);
importantBtn.addEventListener("click", importBtn);
resetBtn.addEventListener("click", rstBtn);
