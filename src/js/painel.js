



const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

/*
     Quando clicar na seta avançar temos que 
     esconder todas as imagens e mostrar a próxima imagem
*/

function esconderImagem(){
     imagensPainel.forEach(imagem => {
          imagem.classList.remove('mostrar');
     });
}

function mostrarImagem(){
     imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function(){

     // teste se o contador da imagemAtual é igual ao total de imagens.
     
     if (imagemAtual === imagensPainel.length -1){
          return;
     }
     /*
          a imagem atual começa em 0
          
          assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagem          
          pra poder saber que agora eu vou mostrar a segunda imagem
     */
     imagemAtual++;

     /*
          esconder todas as imagens 
               pegar todas as imagens usando o DOM e remover a classe mostrar
     
     */
    esconderImagem();

    /*
          mostrar a proxima imagem
               pegar todas as imagens , descrobrir qual é a proxima, e colocar a classe mostrar nela           
     */

    mostrarImagem();

})

//SETA VOLTAR
setaVoltar.addEventListener('click', function(){
     
     if(imagemAtual === 0){
          return;
     }
     imagemAtual--;
          
     esconderImagem();

     mostrarImagem();
})