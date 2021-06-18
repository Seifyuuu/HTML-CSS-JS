//Start
let inputTache = document.createElement("input");
let btnAdd = document.createElement("button");
let divStart = document.createElement("div");
divStart.classList = "myDivStart";
btnAdd.classList = "myBtnAdd";
inputTache.classList = "myInputTache";
btnAdd.textContent = "ADD + "
inputTache.placeholder = "Votre tâche ?"
// Titre
let h2Title = document.createElement("h2");
h2Title.classList = "myh2Title"
h2Title.textContent = "Ma ToDo List"

// 3 boutons
let divBtn = document.createElement("div");
divBtn.classList = "myDivBtn";
let btnDone = document.createElement("button");
let btnTodo = document.createElement("button");
let btnAll = document.createElement("button");
btnDone.classList = "myBtnState";
btnTodo.classList = "myBtnState";
btnAll.classList = "myBtnState";
btnTodo.textContent = "To Do";
btnDone.textContent = "Done";
btnAll.textContent = "All";

//Ajout HTML
document.body.appendChild(divStart)
divStart.appendChild(inputTache)
divStart.appendChild(btnAdd)
document.body.appendChild(h2Title);
document.body.appendChild(divBtn);
divBtn.appendChild(btnTodo);
divBtn.appendChild(btnDone);
divBtn.appendChild(btnAll);

let btnClear = document.createElement("button")
btnClear.textContent = "Clear All Tasks";
btnClear.classList = "myBtnState"
document.body.lastChild.appendChild(btnClear)

// EventListener du bouton ADD + création de la tâche 
btnAdd.addEventListener("click", () => {

    let divTasks = document.createElement("div");
    divTasks.classList = "myDivTasks"
    document.body.appendChild(divTasks);
    let itemTasks = document.createElement("div");
    itemTasks.classList = "toDo"
    let inputTaskName = document.createElement("span");
    inputTaskName.classList = "myinputTaskName";

    let btnEditTaskState = document.createElement("button");
    btnEditTaskState.classList = "mybtnEditTaskState";
    btnEditTaskState.textContent = "Edit State"
    // j'arrive pas a reswitch
    btnEditTaskState.addEventListener("click", () =>{
       if (inputTaskName.style.backgroundColor == "") {
            inputTaskName.style.backgroundColor = "green"
            itemTasks.classList = "Done"
       }
       else if (inputTaskName.style.backgroundColor == "green") {
           inputTaskName.style.backgroundColor = "red"
           itemTasks.classList = "ToDo"
       }
    })
    let btnEditTaskName = document.createElement("button");
    btnEditTaskName.textContent = "Edit Name"
    btnEditTaskName.classList = "mybtnEditTaskName"
    btnEditTaskName.addEventListener("click", () =>{
        inputTaskName.textContent = prompt("Give me the new name of the task");
    })
    let btnDelTask = document.createElement("button");
    btnDelTask.classList = "mybtnDelTask";
    btnDelTask.textContent = "Delete"
    btnDelTask.addEventListener("click", () => {
        divTasks.remove()
    })

    itemTasks.appendChild(inputTaskName)
    itemTasks.appendChild(btnEditTaskState)
    itemTasks.appendChild(btnEditTaskName)
    itemTasks.appendChild(btnDelTask)
    divTasks.appendChild(itemTasks);
    inputTaskName.textContent = inputTache.value
    inputTache.value = ""

    btnDone.addEventListener("click", () => {
        if (itemTasks.className != "Done") {
            itemTasks.style.display = "none";
            btnDone.addEventListener("click", () => {
                if (itemTasks.style.display = "none") {
                    itemTasks.style.display = "initial"
                }
            })
        } 
      })
   
    btnTodo.addEventListener("click", () => {
      if (itemTasks.className == "Done") {
          itemTasks.style.display = "none";
          btnTodo.addEventListener("click", () => {
            if (itemTasks.style.display = "none") {
                itemTasks.style.display = "initial"
            }
        })
      }  
    })

    

    btnAll.addEventListener("click", () => {
        if (itemTasks.classname = "ToDo" || itemTasks.className == "Done") {
            itemTasks.style.display = "initial"
        }
    })

    btnClear.addEventListener("click", () => {
        itemTasks.remove()
    })
})



