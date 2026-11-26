/*
 * Registro das cenas. O arquivo de roteiro de cada capítulo (capitulo1.js, capitulo2.js...)
 * chama Roteiro.registrar(); o motor só conversa com este objeto.
 *
 * Cada capítulo tem os próprios nomes de cena: "c1_01" do capítulo 1 e "c1_01" do
 * capítulo 2 são cenas diferentes. Por dentro, a cena é guardada como "capitulo2/c1_01".
 * No roteiro você escreve só "c1_01"; para pular para outro capítulo, escreva
 * "capitulo3/c1_01".
 */
const Roteiro = {
  cenas: {},              // "capitulo/id" -> cena
  capituloDaCena: {},     // "capitulo/id" -> id do capítulo
  inicio: {},             // id do capítulo -> "capitulo/id" da primeira cena

  /* nome completo de uma cena, a partir do capítulo em que se está */
  chave(id, capitulo) {
    return id.includes("/") ? id : `${capitulo}/${id}`;
  },

  registrar(idCapitulo, { inicio, cenas }) {
    this.inicio[idCapitulo] = this.chave(inicio, idCapitulo);
    for (const [id, cena] of Object.entries(cenas)) {
      const chave = this.chave(id, idCapitulo);
      if (this.cenas[chave]) console.warn(`Cena duplicada: ${chave}`);
      this.cenas[chave] = cena;
      this.capituloDaCena[chave] = idCapitulo;
    }
  },

  /* Avisa no console sobre destinos inexistentes */
  validar() {
    const erros = [];
    for (const [chave, cena] of Object.entries(this.cenas)) {
      const cap = this.capituloDaCena[chave];
      const destinos = [cena.proxima, ...(cena.escolhas || []).map(e => e.proxima), ...(cena.caminhos || []).map(c => c.proxima)].filter(Boolean);
      destinos.forEach(d => { if (!this.cenas[this.chave(d, cap)]) erros.push(`${chave} -> ${d}`); });
      if (!cena.fim && !destinos.length) erros.push(`${chave} não tem saída`);
    }
    erros.forEach(e => console.error("Roteiro:", e));
    return erros;
  }
};
