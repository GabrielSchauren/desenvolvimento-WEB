console.log(document)
const titulo = document.querySelector("#titulo-principal")


function criarTarefa(event){
    console.log("funcionou")
    event.preventDefault();

    const input = document.getElementById("input-tarefa");
    const valorInput = input.value

    if(valorInput === "") return

    const lista = document.getElementById("lista-tarefas")

    const li = document.createElement("li");

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    const span = document.createElement("span")
    span.textContent = valorInput

    li.appendChild(checkbox)
    li.appendChild(span)

    lista.appendChild(li)

    input.value = ""

    
}

const lista = document.getElementById("lista-tarefas")

lista.addEventListener("click", function(event){

    if(event.target.tagName === "SPAN"){
        const li = event.target.closest("li")
        li.remove()
    }
    

})