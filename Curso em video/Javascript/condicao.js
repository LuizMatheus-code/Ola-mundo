var idade = 64
var horas = new Date().getHours()
var dia = new Date().getDay()
if (idade < 16) {
    console.log("nao vota")
} else if (idade < 18) {
        console.log("voto opcional")
    }else if (idade >= 18 && idade < 65) {
        console.log("voto obrigatorio")
    } else if (idade >= 65) {
        console.log("voto opcional")
    }
console.log(`agora sao ${horas}:00`)
if (horas > 5 && horas <= 12) {
    console.log("bom dia")
} else if (0 <= horas && horas <= 5) {
    console.log("boa madrugada")
} else if (horas < 19) {
    console.log("boa tarde")
} else if (horas >= 19) {
    console.log("boa noite")
}

switch (dia) {
    case 0:
        dia = "Domingo"
        break
    case 1:
        dia = "Segunda-feira"
        break
    case 2:
        dia = "Terca-feira"
        break
    case 3:
        dia = "Quarta-feira"
        break
    case 4:
        dia = "Quinta-feira"
        break
    case 5:
        dia = "Sexta-feira"
        break
    case 6:
        dia = "Sabado"
        break
    default:
        dia = "invalido"
        break
}
console.log(`dia de hoje: ${dia}`)
