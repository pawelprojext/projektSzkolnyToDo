const cards = document.querySelector(".cards");
const main = document.querySelector("main");

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
            document.querySelector(".users-list").innerHTML = "";
            document.querySelector(".extend-list").classList.add("hide");
        })
    } else{
        document.querySelector(".GetBackText").innerText = project.taskName;
    }
}



function showArrays(project, taskToShow, listElemToShow){
    const tasksList = document.createElement("div");
    tasksList.classList.add("tasks-list");

    function showTasksCards(t1, t2){
        const todoParent = document.createElement("div");
        todoParent.classList.add("card");
        const listHeader = document.createElement("h4");
        listHeader.innerText = t1;
        const todoChild = document.createElement("div");
        todoChild.classList.add("list-elem");
        todoChild.innerText = t2;
    
        todoParent.appendChild(listHeader);
        todoParent.appendChild(todoChild);
        tasksList.appendChild(todoParent);
    }

    const ProjectElems = [project.TODO, project.INPROGRESS, project.TESTING, project.DONE];
    
   
    ProjectElems.forEach((elems, i)=>{
        if(i == 0){
            showTasksCards("TODO", project.TODO)
        } else if(i == 1){
            showTasksCards("IN PROGRESS", project.INPROGRESS);
        } else if (i == 2){
            showTasksCards("TESTING", project.TESTING);
        } else if(i == 3){
            showTasksCards("DONE !", project.DONE);
    }
        main.appendChild(tasksList)
        })
}

const usersT1 = ["Filip Kaczmarek","Paweł Kaliczyński"];
const usersT2 = ["Jakub Karasiński", "Mikołaj Borowski"];
const usersT3 = ["Kacper Filipiak"];

projects.forEach((project, index)=>{
    const div = document.createElement("div");
    div.classList.add("card");
    const projectName = document.createElement("h4");
    projectName.innerText = project.taskName;

    div.id = index + 1;

    div.appendChild(projectName);
    cards.appendChild(div);
    
    div.addEventListener("click", ()=>{
    showGetBack(project);
    hideCards();
    showArrays(project);

    document.querySelector(".extend-list").classList.remove("hide");

        if(div.id == 1){
            usersT1.forEach((e)=>{
                const user = document.createElement("li");
                user.innerText = e;
        
                const userImage = document.createElement("img");
                userImage.src = "/images/user.png";          
        
                user.appendChild(userImage)
                document.querySelector(".users-list").appendChild(user);
            });

            document.querySelector(".addUser").addEventListener("click", ()=>{
                   let addUserP = prompt("Podaj nazwę użytkownika");
                    document.querySelector(".users-list").innerHTML = "";
                    usersT1.push(addUserP);

                refreshData(usersT1)
            })

            
        } else if(div.id == 2){
             usersT2.forEach((e)=>{
                const user = document.createElement("li");
                user.innerText = e;
        
                const userImage = document.createElement("img");
                userImage.src = "/images/user.png";          
        
                user.appendChild(userImage)
                document.querySelector(".users-list").appendChild(user);
            });

            document.querySelector(".addUser").addEventListener("click", ()=>{
                let addUserP = prompt("Podaj nazwę użytkownika");
                    document.querySelector(".users-list").innerHTML = "";
                    usersT2.push(addUserP);

                refreshData(usersT2)

            })

        } else if(div.id == 3){
            usersT3.forEach((e)=>{
                const user = document.createElement("li");
                user.innerText = e;
        
                const userImage = document.createElement("img");
                userImage.src = "/images/user.png";          
        
                user.appendChild(userImage)
                document.querySelector(".users-list").appendChild(user);
            });

            document.querySelector(".addUser").addEventListener("click", ()=>{
                    let addUserP = prompt("Podaj nazwę użytkownika");
                    document.querySelector(".users-list").innerHTML = "";
                    usersT3.push(addUserP);

                    refreshData(usersT3)
            })
        }
    })
})


function refreshData(arr){
    arr.forEach((e)=>{
        const user = document.createElement("li");
        user.innerText = e;

        const userImage = document.createElement("img");
        userImage.src = "/images/user.png";          

        user.appendChild(userImage)
        document.querySelector(".users-list").appendChild(user);
    });
}