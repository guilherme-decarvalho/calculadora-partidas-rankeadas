function saldoVitorias(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

let vitoria = 100
let derrota = 80

let saldo = saldoVitorias(vitoria, derrota)
let nivel = ""

switch (true){
    case saldo < 10:
        nivel = "Ferro"
        break
    case saldo <= 20:
        nivel = "Bronze"
        break
    case saldo <= 50:
        nivel = "Prata"
        break
    case saldo <= 80:
        nivel = "Ouro"
        break
    case saldo <= 90:
        nivel = "Diamante"
        break
    case saldo <= 100:
        nivel = "Lendário"
        break
    case saldo >= 101:
        nivel = "Imortal"
}

console.log(`O Herói tem saldo de ${saldo} está no nível ${nivel}`)