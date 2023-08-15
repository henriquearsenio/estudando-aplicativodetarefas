const novaTarefa = document.getElementById("novaTarefa");
const adicionarBotao = document.getElementById("adicionar");
const listaTarefas = document.getElementById("listaTarefas");

adicionarBotao.addEventListener("click", function () {
    const tarefaTexto = novaTarefa.value.trim();
    if (tarefaTexto !== "") {
        const tarefaLi = document.createElement("li");
        tarefaLi.innerHTML = `
            <input type="checkbox">
            <span>${tarefaTexto}</span>
            <button class="remover">Remover</button>
        `;
        listaTarefas.appendChild(tarefaLi);
        novaTarefa.value = "";
    }
});

listaTarefas.addEventListener("click", function (evento) {
    if (evento.target.classList.contains("remover")) {
        evento.target.parentElement.remove();        
    }    
})