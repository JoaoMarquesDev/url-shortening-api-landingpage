//https://api.shrtco.de/v2/info?code=example
let campo = document.querySelector('.content-result')
let mandar = document.getElementById('enviar2')
let btn_copy = document.getElementById('btn-copy')


mandar.addEventListener('click', () => {
    campo.classList.add('teste')
})

function enviar() {
    let valor = document.getElementById('input1').value
    if(valor ==="") {
        window.alert('Insira um valor no campo')
    } else {
        console.log(valor)
        btn_copy.textContent = "Copy"
        const url = "https://api.shrtco.de/v2/shorten?url="
        fetch(`${url}${valor}`)
        .then(response => response.json())
        .then(data => {
            resultado.textContent = JSON.stringify(data.result.short_link2).replace('"', " ").replace('"' , " "),
            link.textContent = JSON.stringify(data.result.original_link)
     })     
    .catch(error => window.alert('URL INVÁLIDA'))
}}

function copiar() {
    let resultado = document.getElementById('resultado').innerText
    let newResultado = resultado.replace('"', " ").replace('"' , " ")
    navigator.clipboard.writeText(newResultado)
    btn_copy.textContent = "Copied"
    btn_copy.style.backgroundColor = '#3A3053'
    console.log(newResultado)
}

