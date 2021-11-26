"use strict"

const but = document.getElementById("submit");
const task = document.getElementById("task");
const priority = document.getElementById("priority");
const table_b = document.getElementById("body");
const form = document.querySelector("form");

but.addEventListener("click",function(e){

    e.preventDefault();

    console.log(task.value);
    console.log(priority.value);
    console.log(table_b);

    if(task.value==="" || priority.value==="")alert("Please fill in the blanks");

    else{

        let row = document.createElement("tr");
        let text = document.createElement("td");
        let text2 = document.createElement("td");
        let position = document.createElement("p");
        let del = document.createElement("td");
        let but2 = document.createElement("button");

        table_b.appendChild(row);
        row.appendChild(text);
        row.appendChild(text2);
        row.appendChild(del);
        del.appendChild(but2);
        text2.appendChild(position);

        
        but2.setAttribute("class", "btn btn-danger")

        text.innerText = task.value;
        position.innerText = priority.value;
        but2.innerText = "remove";

        switch(priority.value){

            case 'High':{

                 position.className="btn btn-danger";
                 break;

            }
            case 'Normal':{

                position.className="btn btn-info";
                break;

           }
           case 'Low':{

                position.className="btn btn-success";
                break;

            }

        }

        but2.addEventListener("click",function(){

            row.remove();
    
        });

    }

    

    form.reset();

})
