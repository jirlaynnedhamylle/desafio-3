const tarefaInput = document.getElementById("tarefaInput");
const listaTarefas = document.getElementById("listaTarefas");

tarefaInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter" && tarefaInput.value.trim() !== "") {
    const novaTarefa = document.createElement("li");
    novaTarefa.className = "list-group-item"; // Adicione a classe do Bootstrap
    novaTarefa.textContent = tarefaInput.value;
    listaTarefas.appendChild(novaTarefa);
    tarefaInput.value = "";
  }
});
