//Nesse topico estamos trabalhando com algumas funções para string

const escola = "MRAINFOTECH"
 
console.log(escola.charAt(4))
console.log(escola.charCodeAt(5))
console.log(escola.indexOf('3'))
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola'.concat(escola).concat('!'))
console.log(escola.replace(3, 'e'))

console.log('Ana, Maria, Pedo, Joao'.split(','))