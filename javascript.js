const submitButton = document.getElementById("btnSubmit");
const tasks = document.getElementById("tasks");
submitButton.addEventListener('click', addTask);
const messageElement = document.getElementById("message");
const clearButtonn = document.getElementById("clearBtn");

dislplayMessage("Good, you have not tasks today *_*");

tasks.addEventListener("click", taskClick);

clearButtonn.addEventListener("click", clearList);

function clearList() {
    const taskList = tasks.getElementsByClassName("list-group-item");
    while (taskList.length > 0) {
        taskList[0].parentNode.removeChild(taskList[0]);
    }
}

function taskClick(even) {
    const style = even.target.style;
    if (!style.textDecoration) {
        style.textDecoration = "line-through";
    }
    else {
        style.textDecoration = "";
    }
}

function addTask() {
    const newTask = document.getElementById("newTask");
    if (inputIsValue(newTask.value)) {
        tasks.innerHTML += '<li class="list-group-item">' + newTask.value + '</li>';
        messageElement.style.visibility = "hidden";
    } else {
        dislplayMessage("Please provide non empty input");
    }
}

function dislplayMessage(message) {
    messageElement.innerText = message;
    messageElement.style.visibility = "visible";
}

function inputIsValue(input) {
    if (input) {
        return true;
    } else {
        return false;
    }
}