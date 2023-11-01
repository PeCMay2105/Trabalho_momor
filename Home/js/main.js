divCard = document.getElementById("card")

const paginas = [
    {
        Nome:"Setor",
        imagem:"./img/administracao.png",
        descricao:"",
        link: "link"
    },
    {
        Nome:"Unidade",
        imagem:"./img/administracao.png",
        descricao:"",
        link: "link"
    },
    {
        Nome:"Cadastro",
        imagem:"./img/administracao.png",
        descricao:"",
        link: "link"
    },
    {
        Nome:"Inventário",
        imagem:"./img/administracao.png",
        descricao:"",
        link: "link"
    },
    {
        Nome:"Usuarios",
        imagem:"./img/administracao.png",
        descricao:"",
        link: "link"
    },
    {
        Nome:"Gestão",
        imagem:"./img/administracao.png",
        descricao:"",
        link:"link"
    },

]

paginas.forEach((objeto =>{
 
divCard.innerHTML += `<div class="card" style="width: 18rem;">
<img src="${objeto.imagem}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${objeto.Nome}</h5>
  <p class="card-text">${objeto.descricao}</p>
  <a href="${objeto.link}" class="btn btn-primary" id="link">Acessar</a>
</div>
</div>` 

}))
