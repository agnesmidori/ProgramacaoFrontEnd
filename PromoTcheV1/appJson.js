// JSON

const belemNovo = [
            {
                foto:"images/logo-2.svg",
                validade:"23/03/20 ~ 27/03/20",
                descricao:"Havaianas Top",
                de:"59,90",
                por:"39,90",
                endereco:"Av. Blablabla, 1."
            },

            {
                foto:"images/logo-3.svg",
                validade:"23/03/20 ~ 27/03/20",
                descricao:"Tênis Reebok Royal",
                de:"219,90",
                por:"199,90",
                endereco:"Av. Blebleble, 2."
            },

            {
                foto: "images/logo-3.svg",
                validade:"23/03/20 ~ 27/03/20",
                descricao:"Nike Shox",
                de:"810,19",
                por:"759,19",
                endereco:"Av. Blebleble, 2."
            }
]
//  ---------------------------------------------------

// Implementando JSON

function promoTemplate(resultado) {
  return `
    <div class= "anuncios">
        <img class="logo" src="${resultado.foto}">
        <div class= "publi">
        <p><b>Validade:</b> ${resultado.validade}</p>
        <p><b>Promoção</b></p>
        <p>${resultado.descricao}: <b>De</b> <span class= "de">${resultado.de}</span>  <b>Por</b> <span class= "por">${resultado.por}</span></p>
        <hr/>
        <p><b>Endereço:</b> ${resultado.endereco}</p>
        </div>
    </div>
    `;
}

document.getElementById("appJson").innerHTML = `
    <h1>Calçados</h1>
    <div class= "container">
    ${belemNovo.map(promoTemplate).join("")}
    </div>
`;
