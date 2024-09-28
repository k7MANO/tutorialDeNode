// npm - comando global
// npm --version versão do npm
// local dependency usada em projetos pariculares
//npm i <packageName>
// global dependency usada em qualquer projeto
// npm install -g <packageName>
//sudo install -g <packageName>

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const itemsNovos = _.flattenDeep(items)

console.log(items)
