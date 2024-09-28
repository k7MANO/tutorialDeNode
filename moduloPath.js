const path = require('path')
const { fileURLToPath } = require('url')

console.log(path.sep)

const caminhoArquivo = path.join('conteúdo', 'oioi', 'a.txt')

console.log(caminhoArquivo)

const base = path.basename(caminhoArquivo)
console.log(base)

const absolute = path.resolve(__dirname, 'conteúdo', 'oioi', 'a.txt')

console.log(absolute)
