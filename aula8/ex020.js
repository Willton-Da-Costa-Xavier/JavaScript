let num = [5, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`Vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor e ${num[0]}`)
let pos = num.indexOf(9)
if(pos == -1){
    console.log("O valor nao foi encontrado")
}else{
    console.log(`O valor 8 esta na posicao ${pos}`)
}
