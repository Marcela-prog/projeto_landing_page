// Botão "Quero esse": leva pro formulário com o produto já escrito
const campoMensagem = document.getElementById("mensagem");

document.querySelectorAll(".btn-pedir").forEach((botao) => {
  botao.addEventListener("click", () => {
    const produto = botao.dataset.produto;
    campoMensagem.value = `Olá! Tenho interesse no produto: ${produto}.`;
    campoMensagem.scrollIntoView({ behavior: "smooth", block: "center" });
    campoMensagem.focus({ preventScroll: true });
  });
});

// Formulário de contato (demonstração, sem envio real)
const form = document.getElementById("formContato");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  feedback.textContent = `Obrigada, ${nome}! Responderemos em breve 💕`;
  form.reset();
});

// Fecha o menu do celular depois de clicar num link
const menu = document.getElementById("menu");

document.querySelectorAll("#menu .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
