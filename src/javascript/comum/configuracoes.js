/*
 * Formulário de configurações. É o mesmo na página configuracoes.html e na janela
 * de pausa do capítulo: as duas chamam PainelConfig.montar(elemento).
 */
const PainelConfig = {
  montar(alvo) {
    alvo.innerHTML = `
      <label class="campo-faixa"><span>Música</span><input type="checkbox" data-config="musica"></label>
      <label class="campo-faixa"><span>Volume</span><input type="range" min="0" max="1" step="0.05" data-config="volume"></label>
      <label class="campo-faixa"><span>Velocidade do texto</span><input type="range" min="0" max="60" step="5" data-config="velocidadeTexto" data-invertido></label>
      <label class="campo-faixa"><span>Pausa no modo Auto</span><input type="range" min="600" max="4000" step="200" data-config="atrasoAuto"></label>
      <p class="dica">Atalhos no jogo: <kbd>Espaço</kbd> avança · <kbd>1</kbd>–<kbd>3</kbd> escolhem · <kbd>A</kbd> auto · <kbd>H</kbd> histórico · <kbd>Esc</kbd> menu</p>
      <button type="button" class="botao botao-perigo" data-apagar>Apagar todo o progresso</button>`;

    $$("[data-config]", alvo).forEach(input => {
      const chave = input.dataset.config;
      const max = Number(input.max);
      const invertido = "invertido" in input.dataset;
      if (input.type === "checkbox") input.checked = Estado.config[chave];
      else input.value = invertido ? max - Estado.config[chave] : Estado.config[chave];
      input.oninput = () => {
        let valor = input.type === "checkbox" ? input.checked : Number(input.value);
        if (invertido) valor = max - valor;
        if (chave === "musica") { if (valor !== Estado.config.musica) Musica.alternar(); return; }
        if (chave === "volume") { Musica.definirVolume(valor); return; }
        Estado.config[chave] = valor;
        Estado.salvarConfig();
      };
    });

    $("[data-apagar]", alvo).onclick = async () => {
      if (await confirmar("Apagar o progresso? O save e os capítulos concluídos serão apagados. Seu perfil continua.")) {
        Estado.apagarTudo();
        irPara("menu");
      }
    };
  }
};
