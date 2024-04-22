const cards = document.querySelector(".cards");
const main = document.querySelector("main");


// musisz dodać zmienną nazwa w obiekcie 
const projects = [
    {
        taskName :"APLIKACJE DESKTOPOWE",
        TODO : ["TO DO 1"],
        INPROGRESS : ["progress 1"],
        TESTING : ["test 1"],
        DONE : ["done 1"],

    },
    {
        taskName :"APLIKACJE MOBILNE",
        TODO : ["todo 2"],
        INPROGRESS : ["progress 2"],
        TESTING : ["test 2"],
        DONE : ["done 2"],

    },
    {
        taskName :"ZROBIĆ STRONĘ DLA FILIPIAKA",
        TODO : ["todo 3"],
        INPROGRESS : ["progess 3"],
        TESTING : ["test 3"],
        DONE : ["done 3"],
    }
];

function hideCards(){
    document.querySelector(".getBack").classList.remove("hide");
    cards.classList.add("hide");
}

function showCards(){
    cards.classList.remove("hide");
    document.querySelector(".getBack").classList.add("hide");
}

function showGetBack(project){
    if(!document.querySelector(".getBack")){

        const getBack = document.createElement("div");
        getBack.classList.add("getBack");

        const img = document.createElement("img");
        img.src = "/images/arr-left.svg";
        img.classList.add("getBack-btn");

        const GetBackText = document.createElement("p");
        GetBackText.classList.add("GetBackText");
        GetBackText.innerText = project.taskName;

        getBack.appendChild(img);
        getBack.appendChild(GetBackText);
        main.appendChild(getBack);
        main.insertBefore(getBack, main.firstChild);


        img.addEventListener("click", ()=>{
            showCards();
            main.removeChild(document.querySelector(".tasks-list"));
        })
    } else{
        document.querySelector(".GetBackText").innerText = project.taskName;
    }
}

function showArrays(project, taskToShow, listElemToShow){
    const tasksList = document.createElement("div");
    tasksList.classList.add("tasks-list");

    const ProjectElems = [project.TODO, project.INPROGRESS, project.TESTING, project.DONE];
    
   
    ProjectElems.forEach((elems, i)=>{
        if(i == 0){
            const todoParent = document.createElement("div");
            todoParent.classList.add("card");
            const listHeader = document.createElement("h4");
            listHeader.innerText = "TODO";
            const todoChild = document.createElement("div");
            todoChild.classList.add("list-elem");
            todoChild.innerText = project.TODO;
        

            todoParent.appendChild(listHeader);
            todoParent.appendChild(todoChild);
            tasksList.appendChild(todoParent);
        } else if(i == 1){
            const todoParent = document.createElement("div");
            todoParent.classList.add("card");
            const listHeader = document.createElement("h4");
            listHeader.innerText = "IN PROGRESS";
            const todoChild = document.createElement("div");
            todoChild.classList.add("list-elem");
            todoChild.innerText = project.INPROGRESS;

            todoParent.appendChild(listHeader);
            todoParent.appendChild(todoChild);
            tasksList.appendChild(todoParent);
        } else if (i == 2){
            const todoParent = document.createElement("div");
            todoParent.classList.add("card");
            const listHeader = document.createElement("h4");
            listHeader.innerText = "TESTING";
            const todoChild = document.createElement("div");
            todoChild.classList.add("list-elem");
            todoChild.innerText = project.TESTING;

            todoParent.appendChild(listHeader);
            todoParent.appendChild(todoChild);
            tasksList.appendChild(todoParent);
        } else if(i == 3){
            const todoParent = document.createElement("div");
            todoParent.classList.add("card");
            const listHeader = document.createElement("h4");
            listHeader.innerText = "DONE !";
            const todoChild = document.createElement("div");
            todoChild.classList.add("list-elem");
            todoChild.innerText = project.DONE;

            todoParent.appendChild(listHeader);
            todoParent.appendChild(todoChild);
            tasksList.appendChild(todoParent);
    }
        main.appendChild(tasksList)
        
        })
}


projects.forEach((project)=>{
    const div = document.createElement("div");
    div.classList.add("card");
    const projectName = document.createElement("h4");
    projectName.innerText = project.taskName;

    div.appendChild(projectName);
    cards.appendChild(div);
    
    div.addEventListener("click", ()=>{
    showGetBack(project);
    hideCards();
    showArrays(project);
  })
})

const users = [];

document.querySelector(".addUser").addEventListener("click",(e)=>{
    const ifExists = document.querySelector(".users-list")
    if(ifExists){
        const ifis = document.querySelector(".users-list")
        document.querySelector("aside").removeChild(ifExists);
    } 
    
    let user = prompt("Podaj nazwe użytkownika do tego zadania: ");             
    users.push(user);

    const userList = document.createElement("ul");
    userList.classList.add("users-list");
    document.querySelector("aside").appendChild(userList);

    users.forEach((elem) =>{
        
      const li = document.createElement("li");
      const userImage = document.createElement("img");
      userImage.src = "/images/user.png";                                                         

      li.innerText = elem;
      userList.appendChild(li);
      li.appendChild(userImage);
  })
  })

