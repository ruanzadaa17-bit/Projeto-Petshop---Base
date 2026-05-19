// scripts petshop

document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value.trim();
  let email = document.getElementById("email").value.trim();
  let mensagem = document.getElementById("mensagem").value.trim();

  if (nome == "" || email == "" || mensagem == "") {
    alert("Preencha todos os campos!");
    return;
  } else {
    alert("Mensagem enviada com sucesso!");
  }

  this.reset();
});

// ************************************** //

let botaoMenu = document.getElementById("menu-btn");
let menu = document.getElementById("menu");

botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});
// =========================
// DARK MODE
// =========================

const darkBtn = document.getElementById("darkModeBtn");
const logo = document.getElementById("logo");

darkBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  // MODO ESCURO
  if (document.body.classList.contains("dark-mode")) {

    darkBtn.innerHTML = "☀️";

    // troca logo
    logo.src = "img/logo-dark.png";

  } else {

    darkBtn.innerHTML = "🌙";

    // volta logo clara
    logo.src = "img/logo-light.png";
  }

});