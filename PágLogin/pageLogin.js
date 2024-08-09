const frm = document.querySelector("form")
frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const email = frm.inEmail.value;
    const password = frm.inPassword.value;
    const erros = []
    if(password.length < 4 || password.length > 8){
        erros.push("Senha deve conter 4 á 8 caracteres!")
        alert ("Senha deve conter de 4 á 8 caracteres!")
    }    




})