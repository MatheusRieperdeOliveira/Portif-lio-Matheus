const frm = document.querySelector("form");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const nome = frm.inNome.value;
    const email = frm.inEmail.value;
    const senha = frm.inSenha.value;

    localStorage.setItem("nome", nome);
    localStorage.setItem("Email", email);
    localStorage.setItem("Senha", senha);

})

