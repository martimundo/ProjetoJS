//Entendendo estrutura de um Array em JS.

const valores = [7.8, 8.9, 9.5,5.5]
console.log(valores[0], valores[3])
console.log(valores[4])

valores [4] = 10
console.log([valores])
console.log(valores.length)//retorna a quantidade de elementos de um Array
valores.push({id:3}, false, null, 'Ola' )//o push é uma função em JS que faz a inserção de novos itens em um array
console.log(valores)

console.log(valores.pop())//A função pop retira o ultimo item do array
delete valores[0]//o delete tbm exclui um item do indice do array a partir do indice informado
console.log(valores)

console.log(typeof valores)//retorna o tipo do array. Nesse caso retorna umn objeto