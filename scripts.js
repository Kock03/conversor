let button = document.getElementById("button")
let selectMoedas = document.getElementById("select-moedas")
let textCoin = document.getElementById("text_coin")  
let flagCoin = document.getElementById("flag_coin") 

//async (assincrona) significa que vai ate o servidor e busca uma informaçao
async function conversor(){
    
    let coin = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function(answer){
        return answer.json()
    })


    let dolar = coin.USDBRL.high
    let euro = coin.EURBRL.high
    
    let money = Number(document.getElementById("money").value)
    let inputMoedas = document.getElementById("input-moedas")
    let real = document.getElementById("real")
   
    if(selectMoedas.value === "US$ - Dólar"){
        let valorDolar = money / dolar
        inputMoedas.innerHTML = valorDolar.toLocaleString('en-US',{style: 'currency', currency: 'USD'});
    }

    if(selectMoedas.value === "€ - Euro"){
        let valorEuro = money / euro
        inputMoedas.innerHTML = valorEuro.toLocaleString('de-DE',{style: 'currency', currency: 'EUR'});
    }


    real.innerHTML = money.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    
}

//troca o nome e a bandeira da moeda, como tambem apos trocar no select, ja ira converter automaticamente.
function trocaDeMoeda(){
    if(selectMoedas.value === "US$ - Dólar"){
        textCoin.innerHTML = "Dólar Americano"
        flagCoin.src = "./images/eua.png"

    }
    if(selectMoedas.value === "€ - Euro"){
        textCoin.innerHTML = "Euro"
        flagCoin.src = "./images/euro.png"


    }

    conversor()
}

//toda vez que clica no botão, invoca a funçao para converter a moeda
button.addEventListener("click", conversor)
//toda vez que muda (change), invoca a funçao para trocar a bandeira e o nome da moeda
selectMoedas.addEventListener("change", trocaDeMoeda)
