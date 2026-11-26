/*
 * Avatar da protagonista (S/N): catálogo de cabelos/olhos, ENCAIXE (tamanho e posição)
 * e o desenhador usado na página de aparência e no retrato da caixa de diálogo.
 * Para adicionar um estilo/cor: coloque as camadas em src/imagens/aparencia/camadas
 * e a miniatura em src/imagens/aparencia/miniaturas, e acrescente a entrada abaixo.
 */
const Avatar = (() => {
  const BASE = caminho("src/imagens/aparencia/");
  const CAMADA = BASE + "camadas/";
  const MINI = BASE + "miniaturas/";

  const catalogo = {
    cabelo: {
      rotulo: "Cabelo",
      estilos: [
        { id: "curto", nome: "Curto" },
        { id: "medio", nome: "Médio" },
        { id: "longo", nome: "Longo" },
        { id: "ondulado", nome: "Ondulado" },
        { id: "tranca", nome: "Trança" }
      ],
      cores: [
        { id: "preto", nome: "Preto", hex: "#2b2430" },
        { id: "castanho", nome: "Castanho", hex: "#7a4b33" },
        { id: "loiro", nome: "Loiro", hex: "#e9c98a" },
        { id: "laranja", nome: "Laranja", hex: "#e2783e" },
        { id: "branco", nome: "Branco", hex: "#e4e1ea" }
      ],
      miniatura: (estilo, cor) => `${MINI}${estilo}_${cor}.png`
    },
    olhos: {
      rotulo: "Olhos",
      estilos: [
        { id: "suave", nome: "Suave" },
        { id: "redondo", nome: "Redondo" },
        { id: "delineado", nome: "Delineado" }
      ],
      cores: [
        { id: "castanho", nome: "Castanhos", hex: "#7b4a2a" },
        { id: "preto", nome: "Pretos", hex: "#2b2430" },
        { id: "azul", nome: "Azuis", hex: "#4c7fd0" },
        { id: "verde", nome: "Verdes", hex: "#4f9a52" },
        { id: "amarelo", nome: "Amarelos", hex: "#d9a441" }
      ],
      miniatura: (estilo, cor) => `${MINI}olho_${estilo}_${cor}.png`
    }
  };

  const PADRAO = { cabelo: { estilo: "longo", cor: "preto" }, olhos: { estilo: "suave", cor: "castanho" } };

  /* =====================================================================
   *  ENCAIXE DO CABELO E DOS OLHOS NO CORPO  ←  ajuste os tamanhos aqui
   *
   *  Medidas em pixels do corpo.png (399 px de largura × 1530 de altura).
   *    escala   tamanho do cabelo (1 = tamanho original da imagem, 286 × 410 px)
   *    largura  largura dos olhos em px (a altura acompanha: imagem original 816 × 232)
   *    x        distância da borda esquerda do corpo até a borda esquerda da imagem
   *    y        distância do topo do corpo até o topo da imagem (pode ser negativo)
   *    altura   (opcional) altura do cabelo em %, sem mudar a largura: 100 = normal,
   *             110 = 10% mais comprido, 90 = 10% mais curto. Sem "altura", fica 100.
   *
   *  Dica: ao aumentar a escala, diminua x um pouco para manter o cabelo centralizado.
   *  O centro da cabeça fica em x ≈ 208 e o topo da cabeça em y ≈ 28.
   *  Olhos: o encaixe de cima vale para todos os estilos; um estilo pode ter o seu próprio
   *  (só com o que muda), como o "delineado" abaixo.
   * ===================================================================== */
  const ENCAIXE = {
    cabelo: {
      curto: { escala: 1.42, altura: 120, x: 140, y: 05 },
      medio: { escala: 1.46, altura: 120, x: 132, y: 06 },
      longo: { escala: 1.70, altura: 120, x: 100, y: -12 },
      ondulado: { escala: 1.90, altura: 140, x: 80, y: 10, semTras: true },
      tranca: { escala: 1.40, altura: 110, x: 160, y: 12, semTras: true }
    },
    olhos: {
      todos: { largura: 197, x: 252, y: 110 },
      delineado: { largura: 197, x: 252, y: 107 }
    }
  };

  const CORPO = { largura: 700, altura: 1300 };
  const IMG_CABELO = { largura: 286, altura: 410 };

  /* Converte px do corpo em % para a camada acompanhar o avatar em qualquer tamanho */
  function posicao({ x, y, largura, altura }) {
    const esticar = altura && altura !== 100 ? `;transform:scaleY(${altura / 100});transform-origin:top center` : "";
    return `left:${(x / CORPO.largura) * 100}%;top:${(y / CORPO.altura) * 100}%;width:${(largura / CORPO.largura) * 100}%${esticar}`;
  }

  /* Camadas: cabelo de trás, corpo, olhos, cabelo da frente.
     O cabelo é dividido em frente/trás para que as mechas internas fiquem atrás do rosto. */
  function desenhar(alvo, escolha = PADRAO) {
    const { cabelo, olhos } = escolha;
    const c = ENCAIXE.cabelo[cabelo.estilo];
    const posCabelo = posicao({ x: c.x, y: c.y, largura: IMG_CABELO.largura * c.escala, altura: c.altura });
    const posOlhos = posicao({ ...ENCAIXE.olhos.todos, ...ENCAIXE.olhos[olhos.estilo] });
    alvo.classList.add("avatar");
    const tras = c.semTras ? "" : `<img class="avatar-camada" style="${posCabelo}" src="${CAMADA}${cabelo.estilo}_${cabelo.cor}-tras.png" alt="">`;
    alvo.innerHTML = `
      ${tras}
      <img class="avatar-corpo" src="${BASE}corpo.png" alt="">
      <img class="avatar-camada" style="${posOlhos}" src="${CAMADA}olho_${olhos.estilo}_${olhos.cor}.png" alt="">
      <img class="avatar-camada" style="${posCabelo}" src="${CAMADA}${cabelo.estilo}_${cabelo.cor}.png" alt="">`;
  }

  return { catalogo, PADRAO, desenhar };
})();
