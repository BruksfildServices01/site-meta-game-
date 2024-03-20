// Definindo as categorias de raridade em ordem
const raridades = ['raro', 'super-raro', 'epicos', 'miticos', 'lendarios'];

// Função para carregar as imagens
function carregarImagens() {
    const container = document.querySelector('.lista'); // Seleciona a div onde as imagens serão inseridas
    let colunaAtual = null; // Mantém o controle da coluna atual
    let contadorImagens = 0; // Contador para saber quantas imagens foram adicionadas à coluna atual

    raridades.forEach(raridade => {
        const caminhoBase = `./personagens/img/icones/${raridade}/`; // Adaptar o caminho conforme a estrutura real do projeto

        buscarImagens(caminhoBase).then(imagens => {
            imagens.forEach(nomeImagem => {
                let tempImg = new Image(); // Cria um objeto de imagem temporário
                tempImg.src = `${caminhoBase}${nomeImagem}`;
                tempImg.alt = `Personagem ${raridade}`;

                tempImg.onload = () => {
                    // Imagem carregada com sucesso, agora adicione ao DOM
                    if (!colunaAtual || contadorImagens === 2) {
                        colunaAtual = document.createElement('div');
                        colunaAtual.className = 'coluna';
                        container.appendChild(colunaAtual);
                        contadorImagens = 0;
                    }
                    colunaAtual.appendChild(tempImg);
                    contadorImagens++;
                };

                // Adicionando evento de clique à imagem
                tempImg.addEventListener('click', () => {
                   console.log(nomeImagem)
                    var nomeJson = nomeImagem.replace(".png", ".json");
                    console.log(nomeJson)

                    // O caminho base para os arquivos JSON
                    var basePath = "./personagens/descrição/json/";
         
                    // Caminho completo para o arquivo JSON
                    var fullPath = basePath + nomeJson;

                    // Função para carregar o arquivo JSON
                    function loadJSON(path) {
                        // Fazendo uma solicitação HTTP para buscar o arquivo JSON
                        fetch(path)
                            .then(response => {
                                // Verifica se a solicitação foi bem-sucedida
                                if (response.ok) {
                                    return response.json(); // Retorna uma promessa com os dados JSON
                                } else {
                                    throw new Error('Não foi possível carregar o arquivo JSON: ' + path);
                                }
                            })
                            .then(data => {
                                // Aqui estão seus dados JSON
                                console.log(data); 
                            
                                // Supondo que seu JSON tenha uma propriedade 'nome' para o nome do personagem
                                var nomePersonagem = data.nome; 
                            


                                /* sessao de personagem-info*/

                                // Encontra a tag <h2> com a classe 'personagem-nome' no documento
                                var elementoNome = document.querySelector('h2.personagem-nome');
                            
                                // Verifica se o elemento foi encontrado e atualiza seu texto
                                if(elementoNome) {
                                    elementoNome.textContent = `Nome: ${nomePersonagem}`;
                                }
                                
                                var elementoImagem = document.querySelector('img.personagem-corpo');
                                if(elementoImagem && data.imagem) {
                                    elementoImagem.src = data.imagem;
                                    elementoImagem.alt = data.nome; // Atualiza o alt da imagem com o nome do personagem
                                }
                            
                                // Atualiza a raridade do personagem
                                var elementoRaridade = document.querySelector('.personagem-info .raridade');
                                if(elementoRaridade && data.raridade) {
                                    elementoRaridade.textContent = `Raridade: ${data.raridade}`;
                                }
                            
                                // Atualiza o tipo do personagem
                                var elementoTipo = document.querySelector('.personagem-info .tipo');
                                if(elementoTipo && data.tipo) {
                                    elementoTipo.textContent = `Tipo: ${data.tipo}`;
                                }
                            
                                // Atualiza a saúde do personagem
                                var elementoSaude = document.querySelector('.personagem-info .saude');
                                if(elementoSaude && data.saude) {
                                    elementoSaude.textContent = `Saúde: ${data.saude}`;
                                }
                            
                               
                                var elementoVelocidade = document.querySelector('.personagem-info .velocidade');
                                if(elementoVelocidade && data.velocidade) {
                                    elementoVelocidade.textContent = `Velocidade: ${data.velocidade}`;
                                }

                                  /* sessao de personagem-info*/



                                /* sessao de ataque base*/
                                var attack_name = document.querySelector('.habilidades-detalhadas .attack_name');
                                if(attack_name && data.ataque && data.ataque.length > 0) {
                                    attack_name.textContent = `Nome: ${data.ataque[0].nome}`;
                                }
                                
                                var attack_dano = document.querySelector('.habilidades-detalhadas .attack_dano');
                                if(attack_dano && data.ataque && data.ataque.length > 0) {
                                    attack_dano.textContent = `Dano: ${data.ataque[0].dano}`;
                                }
                                
                                var attack_alcance = document.querySelector('.habilidades-detalhadas .attack_alcance');
                                if(attack_alcance && data.ataque && data.ataque.length > 0) {
                                    attack_alcance.textContent = `Alcance: ${data.ataque[0].alcance}`;
                                }
                                
                                var attack_V_recarga = document.querySelector('.habilidades-detalhadas .attack_V_recarga');
                                if(attack_V_recarga && data.ataque && data.ataque.length > 0) {
                                    attack_V_recarga.textContent = `Velocidade de Recarga: ${data.ataque[0].velocidade_recarga}`;
                                }

                                  /* sessao de ataque base*/


                                   /* sessao de status super*/
                                var super_name = document.querySelector('.habilidades-detalhadas .super_name');
                                if(super_name && data.super && data.super.length > 0) {
                                    super_name.textContent = `Nome: ${data.super[0].nome}`;
                                }
                                
                                var super_dano = document.querySelector('.habilidades-detalhadas .super_dano');
                                if(super_dano && data.super && data.super.length > 0) {
                                    super_dano.textContent = `Dano: ${data.super[0].dano}`;
                                }
                                
                                var super_alcance = document.querySelector('.habilidades-detalhadas .super_alcance');
                                if(super_alcance && data.super && data.super.length > 0) {
                                    super_alcance.textContent = `Alcance: ${data.super[0].alcance}`;
                                }
                                

                                  /* sessao de status super*/
                                

                                  /* sessao hipergarga */

                                  var hiper_name = document.querySelector('.habilidades-detalhadas .hiper_name');
                                  if(hiper_name && data.hipercarga && data.hipercarga.length > 0) {
                                    hiper_name.textContent = `Nome: ${data.hipercarga[0].nome}`;
                                  }

                                  var hiper_efeito = document.querySelector('.habilidades-detalhadas .hiper_efeito');
                                  if(hiper_efeito && data.hipercarga && data.hipercarga.length > 0) {
                                    hiper_efeito.textContent = `efeito: ${data.hipercarga[0].efeito}`;
                                  }

                            var hiper_velocidade = document.querySelector('.habilidades-detalhadas .hiper_velocidade');
                                  if(hiper_velocidade && data.hipercarga && data.hipercarga.length > 0) {
                                    hiper_velocidade.textContent = `velocidade: ${data.hipercarga[0].velocidade}`;
                                  }

                                  var hiper_dano = document.querySelector('.habilidades-detalhadas .hiper_dano');
                                  if(hiper_dano && data.hipercarga && data.hipercarga.length > 0) {
                                    hiper_dano.textContent = `dano: ${data.hipercarga[0].dano}`;
                                  }

                                  var hiper_escudo = document.querySelector('.habilidades-detalhadas .hiper_escudo');
                                  if(hiper_escudo && data.hipercarga && data.hipercarga.length > 0) {
                                    hiper_escudo.textContent = `escudo: ${data.hipercarga[0].escudo}`;
                                  }
                            
                                

                                  /* sessao antisise  */

                                var divAntitese = document.querySelector('.antitese');

                                // Verifica se a div foi encontrada
                                if (divAntitese) {
                                    // Seleciona todas as tags img dentro da div 'antitese'
                                    var imagens = divAntitese.querySelectorAll('img');

                                    // Remove cada imagem encontrada
                                    imagens.forEach(function (img) {
                                        divAntitese.removeChild(img);
                                    });

                                    // Verifica se a propriedade Antítese existe e não está vazia
                                    if (data.Antítese && data.Antítese.length > 0) {
                                        // Itera sobre cada entrada no objeto Antítese
                                        data.Antítese.forEach(objeto => {
                                            Object.keys(objeto).forEach(chave => {
                                                // Cria uma nova tag img
                                                var img = document.createElement('img');

                                                // Define o atributo src com o caminho da imagem
                                                img.src = objeto[chave];

                                                // Define o atributo alt com a chave (nome da personagem)
                                                img.alt = chave;

                                                // Adiciona a tag img criada na div antitese
                                                divAntitese.appendChild(img);
                                            });
                                        });
                                    }
                                }

                                
                                var divnemesis = document.querySelector('.nemesis');

                                // Verifica se a div foi encontrada
                                if (divnemesis) {
                                    // Seleciona todas as tags img dentro da div 'antitese'
                                    var imagens = divnemesis.querySelectorAll('img');

                                    // Remove cada imagem encontrada
                                    imagens.forEach(function (img) {
                                        divnemesis.removeChild(img);
                                    });

                                    // Verifica se a propriedade Antítese existe e não está vazia
                                    if (data.Nêmesis && data.Nêmesis.length > 0) {
                                        // Itera sobre cada entrada no objeto Antítese
                                        data.Nêmesis.forEach(objeto => {
                                            Object.keys(objeto).forEach(chave => {
                                                // Cria uma nova tag img
                                                var img = document.createElement('img');

                                                // Define o atributo src com o caminho da imagem
                                                img.src = objeto[chave];

                                                // Define o atributo alt com a chave (nome da personagem)
                                                img.alt = chave;

                                                // Adiciona a tag img criada na div antitese
                                                divnemesis.appendChild(img);
                                            });
                                        });
                                    }
                                }


                            
                                
                                
                            })
                            .catch(error => {
                                console.error(error);
                            });
                    }

                    // Carrega o arquivo JSON
                    loadJSON(fullPath);



                    
                });

            });
        }).catch(erro => {
            console.error("Erro ao carregar imagens:", erro);
        });
    });
}


// Simulação de uma função que busca os nomes das imagens do servidor
function buscarImagens(caminhoBase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([

                "Shelly.png", "Nita.png", "Colt.png", "Bull.png", "Brock.png", "El-primo.png", "Barley.png", "Poco.png", "Rosa.png",
            
                "Jessie.png", "Dynamike.png", "Tick.png", "8-Bit.png", 
                "Rico.png", "Darryl.png", "Penny.png", "Carl.png",
                "Jack.png", "Gus.png",

                "Bo.png", "Emz.png","Stu.png","Piper.png","Pam.png",
                "Frank.png","Bibi.png","Bea.png","Nani.png","Edgar.png",
                "Griff.png","Grom.png","Bonnie.png","Gale.png",
                "Collete.png", "Belle.png","Ash.png","Lola.png",
                "Sam.png"," Mandy.png","Maisie.png","Hank.png",
                "Pearl.png", 
                 
                "Mortis.png","Tara.png","Gene.png","Max.png","Mr-P.png","Spront.png","Byron.png","Squek.png","Lou.png",
                "Ruffs.png","Buzz.png","Fang.png","Eve.png","Janet.png","Otis.png","Buster.png","Gray.png","R-T.png",
                "Willow.png","Doug.png","Chuck.png","Charlie.png", "Mico.png",
                
                
                "Spike.png","Corvo.png","Leon.png","Sandy.png",
                "Amber.png","Meg.png","Wattson.png","Chester.png",
                "Cordelius.png"

                   ]); // Substitua isso pela lógica real para buscar os nomes dos arquivos de imagem
        }, 1000);
    });
}

// Carregar as imagens quando a janela for carregada
window.onload = carregarImagens;



// Seleciona o contêiner onde o arrasto deve funcionar
const containerLista = document.querySelector('.container-lista');

let isDown = false;
let startX;
let scrollLeft;

containerLista.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - containerLista.offsetLeft;
    scrollLeft = containerLista.scrollLeft;
});

containerLista.addEventListener('mouseleave', () => {
    isDown = false;
});

containerLista.addEventListener('mouseup', () => {
    isDown = false;
});

containerLista.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - containerLista.offsetLeft;
    const walk = (x - startX) * 3; // O número 3 define a velocidade do arrasto
    containerLista.scrollLeft = scrollLeft - walk;
});


//