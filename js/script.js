window.onload = init;

function init() {
    let todoList = {
        listHTML: document.getElementById("todoList"),
        listTask: [],
        add(task, priority = false) {
            let element = document.createElement("li");

            /*
                Si creo los botones acá me desconfigura el formato de li, me genera bucle.
            */
            //let botonEli = document.createElement("button");
            //let botonTach = document.createElement("button");
            element.innerText = task;

            //this.listHTML.appendChild(botonEli);
            //this.listHTML.appendChild(botonTach);
            /*element.addEventListener("click", () => {
            let parent = element.parentNode;
            if(parent){
                parent.removeChild(element);
            }
            });*/
            element.addEventListener("click", function () {
                console.log(this);
                let parent = this.parentNode;
                if (parent) {
                    parent.removeChild(this);
                }
            });

            // Añadí los botones en el HTML

            if (priority) {
                this.listTask.unshift({
                    element,
                    task
                });
                this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
            } else {
                this.listTask.push({
                    element,
                    task
                });
                this.listHTML.appendChild(element);
            }
        }
    }

    let form = document.managerTask;
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let task = form.task.value;

        let validTask = /.{2,}/;
        if (!validTask.test(task)) {
            console.log("Ingrese una descripcion clara");
            return false;
        }

        todoList.add(task, form.important.checked);

    });

    //Con este método entro al id de "done" y tacha los elementos que se encuentran en li-
    document.getElementById("Done").addEventListener("click", (evt) => {
        evt.preventDefault();
        var elem1 = document.getElementById("todoList");
        if (elem1) {
            elem1.childNodes[1].style.textDecoration = "line-through";
            //elem1.nextSibling[0].innerText.style.textDecoration = "line-through";
        }
       //elem1.nextSibling[1].style.textDecoration = "line-through";

    });

    //Con este método entro al id de "delete" y elimino los elementos que se encuentran dentro de li
    document.getElementById("Delete").addEventListener("click", (evt) => {
        evt.preventDefault();
        var elem = document.getElementById("todoList");
        if (elem) {
            elem.removeChild(elem.childNodes[0]);
        }

    });



}