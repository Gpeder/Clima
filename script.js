const apiKey = '96669e6c154fe1b4a55444ea68be26c5';

function dadosTela(dados) {
    document.querySelector('.titulo').innerHTML = 'Tempo em ' + dados.name;
    document.querySelector('.temperatura').innerHTML = Math.round(dados.main.temp - 273.15) + '°'; 
    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description;
    document.querySelector('.texto-umidade').innerHTML = 'Umidade: ' + dados.main.humidity + '%';
}

async function buscaApi(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br`)
        .then(resposta => resposta.json());
    return dados;
}

function pesquisa() {
    const cidade = document.querySelector('.input').value;
    buscaApi(cidade).then(dados => {
        console.log(dados); 
        dadosTela(dados);
    });
}
