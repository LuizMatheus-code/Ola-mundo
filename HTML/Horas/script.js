function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora, sao ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = "amanhecer.jpg"
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = "entardecer.jpg"
        document.body.style.background = "rgb(179, 99, 99)"
    } else {
        //boa noite
        img.src = "anoitecer.jpg"
        document.body.style.background = "rgb(90, 99, 99)"
    }
}

