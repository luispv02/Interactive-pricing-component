
let input = document.querySelector('#input');

input.style.setProperty('--value', input.value);
input.addEventListener('input',() => {
    input.style.setProperty('--value',input.value);
},false)

if(input){
    let etiqueta = document.querySelector('#etiqueta');
    if(etiqueta){
        etiqueta.innerHTML = input.value;

        //evento input: Se activa cuandoo el valor de un elemento ha cambiado
        input.addEventListener('input', () => {
           let valor = etiqueta.innerHTML = input.value
        },false)
    }
}
