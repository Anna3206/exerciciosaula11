function num(){
    let num = parseInt(prompt("Digite um número: "));
    if (num > 0){
        alert('O número é positivo.');
    }
    else if (num < 0){
        alert('O número é negativo.');
    }
    else{
        alert('O número é neutro.');
    }
    return
}

function num2(){
    let num2= parseInt(prompt("Digite um número: "));
    if (num2%2==0){
        alert(`O numero é par`)
    }
    else{
        alert(`O numero é impar`)
    }
    return
}

function soma(){
    let num3 = parseInt(prompt("Digite um número: "))
    let soma = 0
    while (num3 >= 1){
        soma += num3
        num3 -= 1
    }
    alert(`Soma: ${soma}`)
    return
}