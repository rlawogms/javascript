const todoList = [];
const todoListTag = document.querySelector(".todolist");
const addBtn = document.querySelector(".button");

addBtn.addEventListener("click", () => {
    const todo = prompt("할일 적기");
    const time = prompt("시간 적기");

    todoListTag.innerHTML = "";

    todoList.push({todo, time});
    todoList.forEach(({time, todo}, index) => {
        todoListTag.appendChild(makeList(index, time, todo));
    });
});

const makeList = (index, time, todo) => {
    const li = document.createElement("li");
    li.dataset.id = index;

    const timeSpan = document.createElement("span");
    timeSpan.textContent = time;
    li.appendChild(timeSpan);

    const todoSpan = document.createElement("span");
    todoSpan.textContent = todo;
    li.appendChild(todoSpan);

    const button = document.createElement("button");
    button.textContent = "삭제";
    button.classList.add("delButton");

    // 버튼에 이벤트 리스너 추가
    button.addEventListener("click", () => {
        const newtodoList = todoList.filter((_, i) => i != index);
        
        // todolist 태그 자식 전체 삭제
        todoList.innerHTML = "";

        // newtodolist todolist 태그 자식을 다시 만들기
        newtodoList.forEach(({time, todo}, index) => {
            todoListTag.appendChild(makeList(index, time, todo));
        });

        // todolist를 newtodolist로 갱신하기 
        todoList.length = 0;
        todoList.push(...newtodoList);
    });

    li.appendChild(button);
    return li;
};
