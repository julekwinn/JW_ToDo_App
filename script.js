// Dodaj te deklaracje przed funkcją addTask
var inputBox = document.getElementById("input-box");
var ListContainer = document.getElementById("list-container");


// Przenieś tę deklarację na początek sekcji <script>
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = ''; // Resetuj pole tekstowe po dodaniu zadania
    }
}


ListContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);

function saveData(){
    localStorage.setItem("data",ListContainer.innerHTML)
}

function showTask(){
    ListContainer.innerHTML = localStorage.getItem("data");
}

showTask();