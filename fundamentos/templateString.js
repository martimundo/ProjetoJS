//template strings com o JS

const nome = 'Marcos'
const concatenacao = 'Ola ' + nome + '!'
const template = `
    Ola 
${nome}!`

console.log(concatenacao, template)

const up = text => text.toUpperCase()
console.log(`Ei....${up('CUIDADO!!!')}`)
