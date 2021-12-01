"use strict"

const but = document.getElementById("submit");
const task = document.getElementById("task");
const d_date = document.getElementById("date");
const states = document.getElementById("status");
const precent = document.getElementById("precent");
const priority = document.getElementById("priority");
const table_b = document.getElementById("body");
const form = document.querySelector("form");

but.addEventListener("click",function(e){

    e.preventDefault();

    if(task.value=="" || priority.value=="Select" || d_date.value=="" || states.value=="Select" || precent.value=="Select")alert("Please fill in the blanks");

    else{

        let row = document.createElement("tr");
        let text = document.createElement("td");
        let text2 = document.createElement("td");
        let position = document.createElement("p");
        let del = document.createElement("td");
        let stat = document.createElement("td");
        let date = document.createElement("td");
        let procent = document.createElement("td");
        let update = document.createElement("td");
        let proc = document.createElement("div");
        let fill = document.createElement("div");
        let but2 = document.createElement("button");
        var today = new Date();

        table_b.appendChild(row);
        row.appendChild(text);
        row.appendChild(text2);
        row.appendChild(date);
        row.appendChild(stat);
        row.appendChild(procent);
        row.appendChild(update);
        row.appendChild(del);
        del.appendChild(but2);
        procent.appendChild(proc);
        proc.appendChild(fill)
        text2.appendChild(position);

        
        but2.setAttribute("class", "btn btn-danger");
        proc.className="progress w-100";
        fill.className="progress-bar bg-danger";

        text.innerText = task.value;
        position.innerText = priority.value;
        but2.innerText = "remove";
        date.innerText = d_date.value;
        console.log(states.value);
        console.log(precent.value);
        stat.innerText = states.value;
        update.innerText = today.getFullYear() + " - " + (today.getMonth()+1) + " - " + today.getDate() + "    " + today.getHours() + ":" + today.getMinutes();

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

        switch(precent.value){

            case '100%':{

                 fill.style.width="100%";
                 break;

            }
            case '75%':{

                fill.style.width="75%";
                break;

           }
           case '50%':{

                fill.style.width="50%";
                break;

            }
            case '25%':{

                fill.style.width="25%";
                break;

            }
            case '0%':{

                fill.style.width="0%";                
                break;

            }

        }

        but2.addEventListener("click",function(){

            e.preventDefault();
            row.remove();
    
        });

        form.reset();

    }

    

    

})
