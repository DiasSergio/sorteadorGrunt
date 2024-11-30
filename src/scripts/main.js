document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sorteador').addEventListener('submit', function (e) {
        e.preventDefault()
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        Math.round(numeroAleatorio) == 0 ? Math.round(numeroAleatorio) + 1 : numeroAleatorio

        let numeroArrendodado = Math.round(numeroAleatorio)

        document.getElementById('resultado-sorteio').innerText =
            numeroArrendodado == 0 ?
                numeroArrendodado + 1 : numeroArrendodado

        document.querySelector('.resultado').style.display = 'block'
    })
})