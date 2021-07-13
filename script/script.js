/* Carne - 400g por pessoa, se + de 6 horas = 650g.
Cerveja - 1200ml por pessoa, se + de 6 horas = 2000ml.
Refrigerante/água - 1000ml por pessoa, se + de 6 horas = 1500ml 
Crianças valem por 0,5 */


let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById ("criancas")
let inputDuracao = document.getElementById("duracao")
let resultado = document.getElementById("resultado")

function calcular(){
    console.log("calculando")
    if(inputAdultos.value.length == 0 || inputCriancas.value.length == 0 || inputDuracao.value.length == 0){
        alert("[ERRO] Preencha todos os campos !")
    } else{

        let adultos = inputAdultos.value
        let criancas = inputCriancas.value
        let duracao = inputDuracao.value

        
        qdtCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
        qdtCerveja = cervejaPP(duracao) * adultos 
        qdtBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas)

        resultado.innerHTML = `<p>Você vai precisar de:</p>`
        resultado.innerHTML +=  `<p><img class ="icons"src="./styles/images/silhueta-de-fatia-de-carne.png" alt="carne"> ${Math.ceil(qdtCarne / 1000)}Kg de carne`
        resultado.innerHTML += `<p><img class ="icons"src="./styles/images/cervejas.png" alt="cerveja"> ${Math.ceil(qdtCerveja / 350)} latas de cerveja`
        resultado.innerHTML += `<p><img class ="icons"src="./styles/images/garrafa-de-refrigerante.png" alt="refrigerante"> ${Math.ceil(qdtBebida / 2000)} Pets de 2L de refrigerante`        
}

    function carnePP(duracao){
        if(duracao >= 6){
            return 650
        } else{
            return 400
        }
    }

  function cervejaPP(duracao){
        if(duracao >= 6){
            return 2000
        } else{
            return 1200
        }
    }

    function bebidaPP(duracao){
        if(duracao >= 6){
            return 1500
        } else{
            return 1000
        }
    }

}