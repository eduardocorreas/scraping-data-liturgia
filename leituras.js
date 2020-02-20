module.exports = {
  createObjectLectures($) {
    const textos = $("[class=subtitulo-liturgia]");
    leitura1 = {
      titulo: textos
        .slice(0)
        .eq(0)
        .text(),
      texto: textos
        .slice(0)
        .eq(0)
        .nextAll("p")
        .slice(0)
        .eq(0)
        .text()
    };
    salmo = {
      titulo: textos
        .slice(1)
        .eq(0)
        .text(),
      resposta: textos
        .eq(0)
        .nextAll("p")
        .slice(1)
        .eq(0)
        .text(),
      texto: textos
        .slice(1)
        .eq(0)
        .nextAll("p")
        .slice(1)
        .eq(0)
        .text()
    };
    leitura2 = {
      titulo: textos
        .slice(2)
        .eq(0)
        .text(),
      texto: textos
        .slice(2)
        .eq(0)
        .nextAll("p")
        .slice(0)
        .eq(0)
        .text()
    };
    evangelho = {
      titulo: textos
        .slice(3)
        .eq(0)
        .text(),
      texto: textos
        .slice(3)
        .eq(0)
        .nextAll("p")
        .slice(2)
        .eq(0)
        .text()
    };

    return { leitura1, salmo, leitura2, evangelho };
  }
};
