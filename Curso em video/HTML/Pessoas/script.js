function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var ano_recebido = document.getElementById("ano")
    var resultado = document.querySelector("div#res")
    var mostrar = document.querySelector("div#mostrar_imagem")
    if (ano_recebido.value.length == 0 || Number(ano_recebido.value) > ano || Number(ano_recebido.value) <= 0){
        window.alert("Erro! Verifique os dados e tente novamente.")
    }
    else {
        var sexo_selecionado = document.getElementsByName("RadioGenero")
        var idade = ano - Number(ano_recebido.value)
        var genero_selecionado = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (sexo_selecionado[0].checked) {
            genero_selecionado = "Homem"
            if (idade >= 0 && idade < 13) {
                img.setAttribute("src", "homem crianca.jpg")
            } else if (idade >= 13 && idade < 18) {
                img.setAttribute("src", "homem jovem.jpg")
            } else if (idade >= 18) {
                img.setAttribute("src", "homem adulto.jpg")
            }
        } else if (sexo_selecionado[1].checked) {
            genero_selecionado = "Mulher"
            if (idade >= 0 && idade < 13) {
                img.setAttribute("src", "mulher crianca.jpg")
            }
            else if (idade >= 13 && idade < 18) {
                img.setAttribute("src", "mulher jovem.jpg")
            }
            else if (idade >= 18) {
                img.setAttribute("src", "mulher adulta.jpg")
            }
        } else if (sexo_selecionado[2].checked) {
            genero_selecionado = "Outro"
            if (idade >= 0 && idade < 13) {
                img.setAttribute("src", "jovem outro.jpg")
            } else if (idade >= 13 && idade < 18) {
                img.setAttribute("src", "jovem outro.jpg")
            } else if (idade >= 18) {
                img.setAttribute("src", "outro.jpg")
            }
        }
        resultado.style.textAlign = "center"
        resultado.innerHTML = `Detectamos ${genero_selecionado} com ${idade} anos`
        mostrar.innerHTML = ""
        mostrar.appendChild(img)
    }
    
}
