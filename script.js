function abrir(x) {

    var section = document.getElementById("galeria-selected");
    var img = document.getElementById("img-selected");
    var body = document.getElementById("id-body");

    img.src = x.src;

    // Para a função apenas funcionar na versão desktop
    if (!window.matchMedia("(max-width: 768px)").matches) {

        section.style.visibility = "visible";
        body.style.overflowY = "hidden"; //Para esconder a scrollbar lateral 
    }
}

function fechar() {

    var section = document.getElementById("galeria-selected");
    var body = document.getElementById("id-body");

    section.style.visibility = "hidden";
    body.style.overflowY = "visible"; 
}

function registar() {
    
    var aviso = document.getElementById("doc-aviso");
    var form = document.getElementById("formulario");
    var nome = document.getElementById("txtnome").value;
    var email = document.getElementById("txtmail").value;

    if (nome == "" || email == "") {
        aviso.innerHTML = "<p>Preencha os dois campos antes de concluir o registo</p>";
    }

    else if (!email.includes("@") || !email.includes(".")) {
        aviso.innerHTML = "<p>Introduza um e-mail válido por favor</p>";
    }

    else {
        form.innerHTML = "<h3>O seu registo foi efetuado com sucesso!</h3>";
    }
}

function burgerMenu() {

    var mobNav = document.getElementById("mob-nav");
    var checkStyle = window.getComputedStyle(mobNav);
    var checkPropriedade = checkStyle.getPropertyValue("display");
    
    //Se o dropdown menu não estiver visível mostrá-lo, se estiver visivel escondê-lo
    if (checkPropriedade == "none") 
        mobNav.style.display = "block";
    else 
        mobNav.style.display = "none";        
}

function burgerSubMenu(drop) {
    var subMenu = document.getElementById(drop);
    var checkStyle = window.getComputedStyle(subMenu);
    var checkPropriedade = checkStyle.getPropertyValue("display");

    if (checkPropriedade == "none") 
        subMenu.style.display = "block";
    else 
        subMenu.style.display = "none"; 
}