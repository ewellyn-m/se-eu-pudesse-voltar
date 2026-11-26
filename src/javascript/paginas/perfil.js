/* perfil.html — nome da protagonista */
document.addEventListener("DOMContentLoaded", () => {
  const form = $("#form-perfil");
  const salvo = Estado.perfil();
  form.nome.value = salvo?.nome || "";
  form.idade.checked = !!salvo;
  form.nome.focus();

  form.addEventListener("submit", e => {
    e.preventDefault();
    $$("[data-erro]").forEach(el => (el.textContent = ""));
    const nome = form.nome.value.trim();
    let ok = true;
    const erro = (campo, msg) => { $(`[data-erro="${campo}"]`).textContent = msg; ok = false; };

    // nome: obrigatório, até 16 caracteres, só letras (acentos aceitos)
    if (!nome) erro("nome", "Este campo é obrigatório");
    else if (nome.length > 16) erro("nome", "O campo precisa ter menos que 16 caracteres");
    else if (!/^[\p{L}][\p{L} ]*$/u.test(nome)) erro("nome", "Este campo não aceita números nem caracteres especiais");
    if (!form.idade.checked) erro("idade", "Confirme a idade para continuar");
    if (!ok) return;

    Estado.salvarPerfil({ ...salvo, nome });
    irPara("aparencia");
  });
});
