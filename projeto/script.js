// inscrição
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.innerText = "Inscrito ✔";
    btn.style.background = "#16a34a";
  });
});

// formulário
const form = document.getElementById("formContato");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada!");
    form.reset();
  });
}