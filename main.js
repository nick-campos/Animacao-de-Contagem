let valuesDisplays = document.querySelectorAll(".num"); /*Seleciona todos os elementos que possuem a class "num" no HTML*/
let interval = 4000; /*Define um tempo total para a animação (interval = 4000 ms ou 4 segundos)*/

valuesDisplays.forEach((valueDisplay) => { /*"forEach" pecorre todos os elementos .num para executar o código dentro de cada função*/
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val")); /*Le o valor final do atributo "data-val" do elemento e o "parseInt" converte o valor para númeor inteiro*/
    let duration = Math.floor(interval / endValue); /*Define o tempo entre cada incremento do número. Divide os 4 segundos pelo valor final da contagem*/
    let counter = setInterval(function () { /*Acada "duration" milissegundos o "startValue" é aumentado em 1 e o número "(textContent)" do ".num" é atualizado*/
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) { /*Quando "startValue" atinge "endValue", a contagem para pelo "clearInterval(counter)."*/
            clearInterval(counter);
        }
    }, duration);
});