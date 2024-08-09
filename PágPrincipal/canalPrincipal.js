const header = document.querySelector('header');
const resp = document.querySelector("h1")
const pesquisa = document.querySelector("#inPesquisa")
const name = "Matheus"
const frm = document.querySelector("form")
const tbTask = document.querySelector("tbody")

resp.innerText = `Olá, ${name}`
/*Função de aparecer a lupa de pesquisa*/
function openBox() {
    if (inPesquisa.style.display == "block") {
        inPesquisa.style.display = "none"
    } else {
        inPesquisa.style.display = "block"
    }
    pesquisa.focus()
}

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const tarefa = frm.inTarefa.value;
    const situacao = frm.inSituacao.value;

    if (localStorage.getItem("tarefa")) {
        const tarefas = localStorage.getItem("tarefa") + ";" + tarefa
        const situacoes = localStorage.getItem("situacao") + ";" + situacao
        localStorage.setItem("Tarefas", tarefas)
        localStorage.setItem("Situacoes", situacoes);
    }




    inserirTarefa(tarefa, situacao)
    frm.reset()
})

function inserirTarefa(tarefa, situacao) {
    const linha = tbTask.insertRow();

    const imgLixeira = document.createElement("img") //Declaro minha constante, criar imagem
    imgLixeira.src = "./Imagens/excluir.png"         //Falo onde está minha imagem (css)
    imgLixeira.alt = "Excluir tarefa"                //Testo alternativo, acessibilidade
    imgLixeira.classList.add("lixeira")              //Dou uma classe para a imagem, estilizar no css


    const col1 = linha.insertCell(0);
    const col2 = linha.insertCell(1);
    const col3 = linha.insertCell(2)


    localStorage.setItem("tarefa", tarefa)
    localStorage.setItem("situacao", situacao)

    col1.innerText = tarefa;
    col2.innerText = situacao
    col3.appendChild(imgLixeira);

}

tbTask.addEventListener("click", (e) => { //Cria um ouvinte na imagem da lixeira para excluir tarefa
    if (e.target.classList.contains("lixeira")) {
        // const tarefa = e.target.parentElement.parentElement.children[0].innerText


        e.target.parentElement.parentElement.remove()
    }
})

