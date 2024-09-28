const { readFileSync, writeFileSync } = require('fs')
console.log('oi')
const primeiro = readFileSync('./conteúdo/oioi/um.txt', 'utf8')
const segundo = readFileSync('./conteúdo/dois.txt', 'utf8')

console.log(primeiro, segundo)

writeFileSync(
  './conteúdo/result-sync.txt',
  'aqui esta o resultado' + primeiro + segundo
)
console.log('tchau')
console.log('oi dnv')
