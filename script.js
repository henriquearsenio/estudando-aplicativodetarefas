const novaTarefa = document.getElementById("novaTarefa");
const adicionarBotao = document.getElementById("adicionar");
const listaTarefas = document.getElementById("listaTarefas");

adicionarBotao.addEventListener("click", function () {
    const tarefaTexto = novaTarefa.value.trim();
    if (tarefaTexto !== "") {
        const tarefaLi = document.createElement("li");
        tarefaLi.innerHTML = `
            <div>
                <input type="checkbox">
                <span>${tarefaTexto}</span>
            </div>
            <button class="botao-remover">Remover</button>
        `;
        listaTarefas.appendChild(tarefaLi);
        novaTarefa.value = "";
        novaTarefa.focus();
    }
});

listaTarefas.addEventListener("click", function (evento) {
    if (evento.target.classList.contains("botao-remover")) {
        evento.target.parentElement.remove();
    } else if (evento.target.tagName === "INPUT" && evento.target.type === "checkbox") {
        const tarefaTexto = evento.target.nextElementSibling;
        evento.target.checked ? tarefaTexto.style.textDecoration = "line-through" : tarefaTexto.style.textDecoration = "none";
    }
})

novaTarefa.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        adicionarBotao.click();
    }
});