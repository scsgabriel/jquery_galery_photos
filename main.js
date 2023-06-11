//O JQuery funciona com $ e ()

//tudo que for feito pelo jquery é dentro desse escopo abaixo 
$(document).ready(function(){       //ready é uma functin (procurar entender o que ela faz)     
    
    /* document.querySelector('header button').addEventListener('click', function(){   
    
     //callback (aprofundar nesse conceito), mas basicamente é uma function dentro de uma outra function, podendo ser síncrona e assíncrona
    }) */

    $('header button').click(function() {  //forma reduzida de fazer o mesmo código de cima, mas esse é do JQuery 
        $('form').slideDown();  //depois de usar o display: none no css, o slideDown faz o form aparecer com efeito de slide pra baixo ao clicar no button do header
    })

    $('#button-cancel').click(function(){
        $('form').slideUp();        //ele recolhe o form quando clicamos no id #button-cancel
    })

    //uma segunda forma de selecionar eventos no JQuery é pela function 'on'
    $('form').on('submit', function(e){
        e.preventDefault();
        const endNewImage = $('#new-image').val(); //o val é o mesmo que value, porém no JQuery ela é uma função, mas faz o mesmo que o value
        const newItem = $('<li style="display: none"></li>');  //o display none faz a imagem ficar 'invisivel'; vamos estilizar pra ela aparecer com efeito ao ser adicionada
        $(`<img src = "${endNewImage}" >`).appendTo(newItem); //o appendTo() insere o conteúdo endNewImagem entre a abertura e o fechamento da tag 'li'
        $(`
            <div class="overlay-image-link">
                <a href="${endNewImage}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                <a/>
            </div>
        `).appendTo(newItem);   //pra alterar/manipular conteúdo do HTML no JQuery é pelo uso da crase
        $(newItem).appendTo('ul');  //o appendTo() vai inserir o conteúdo do newItem na 'ul'
        $(newItem).fadeIn(1000);    /*depois de usar o display none pra imagem ficar invisível, fazemos ela aparecer devagar com o fadeIn(), que é uma função 
                                    o 1000 significa que o tempo do fadeIn é de 1 segundo (a imagem aparecerá em 1 segundo)*/
        $('#new-image').val('');  //o campo limpa automaticamente depois que uma imagem é adicionada

    })  /* em resumo, criei uma variável chamada newItem contendo a tag li vazia;
        como na variável newItem eu tenho um li, eu posso anexar itens no li, sendo assim: 
        usando o appendTo() eu enviei o endereço da imagem que o usuário alimentou pra tag li;
        depois, usando crase novamente, alerei o href da tag <a> pra o link fornecido pelo usuário, alterando o HTML e anexei essa alteração no li (newItem); 
        por último, eu anexei toda essa mudança na tag 'ul' usando o appendTo(), finalizando a alteração no HTML;
        */
    /*usando 'on' reconhecemos o evento e cancelamos o efeito com a function preventDefault. 'on' faz o mesmo que o 'addEventListener
    porém 'on' é no  JQuery e o addEventListener no JavaScript puro     */


});            

