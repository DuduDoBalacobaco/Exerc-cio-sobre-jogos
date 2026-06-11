async function carregaJogos() {
   const resposta = await fetch("/jogos");
   const jogos = await resposta.json();

    let opcao = document.getElementById('switch');

    if(opcao.checked){
        card(jogos);
    }
    else{
        tabela(jogos);
    }
}

function card(games){

        let mostrar = document.getElementById('mostrar');
        mostrar.textContent = "";

        let jgs = document.createElement('div');
        jgs.id = "card";

            for(let i = 0; i < games.length; i++){
                let div = document.createElement('div');
                div.className = "card";

                let title = document.createElement("div");
                title.className = "title";
                title.textContent = `Jogo #${games[i].id}`;
                div.appendChild(title);

                let nome = document.createElement('p');
                nome.textContent = `Nome: ${games[i].nome}`;
                div.appendChild(nome);

                let genero = document.createElement('p');
                genero.textContent = `Gênero: ${games[i].genero}`;
                div.appendChild(genero);

                let ano = document.createElement('p');
                ano.textContent = `Ano: ${games[i].ano}`;
                div.appendChild(ano);

                jgs.appendChild(div);
            }
        document.getElementById('mostrar').appendChild(jgs);
}

function tabela(games){

    let jogos = games;

        let mostrar = document.getElementById('mostrar');
        mostrar.textContent = "";
        
        let tabela = document.createElement('table');
        tabela.id = 'tabela';
        tabela.border = '1';

        let tr1 = document.createElement('tr');

        let thId = document.createElement('th');
        thId.textContent = 'ID';

        let thNome = document.createElement('th');
        thNome.textContent = 'Nome';

        let thGenero = document.createElement('th');
        thGenero.textContent = 'Gênero';

        let thAno = document.createElement('th');
        thAno.textContent = 'Lançamento';

        tr1.appendChild(thId);
        tr1.appendChild(thNome);
        tr1.appendChild(thGenero);
        tr1.appendChild(thAno);

        tabela.appendChild(tr1);

        games.forEach(jogo => {

            let tr = document.createElement('tr');

            let tdId = document.createElement('td');
            tdId.textContent = jogo.id;

            let tdNome = document.createElement('td');
            tdNome.textContent = jogo.nome;

            let tdGenero = document.createElement('td');
            tdGenero.textContent = jogo.genero;

            let tdAno = document.createElement('td');
            tdAno.textContent = jogo.ano;

            tr.appendChild(tdId);
            tr.appendChild(tdNome);
            tr.appendChild(tdGenero);
            tr.appendChild(tdAno);

            tabela.appendChild(tr);
        });

        mostrar.appendChild(tabela);
}

function mudarLayout(){
    carregaJogos();
}
carregaJogos();