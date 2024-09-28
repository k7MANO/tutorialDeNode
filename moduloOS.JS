//import { log } from 'console'

const os = require('os')

// info sobre o usuario atual

const user = os.userInfo()
console.log(user)

//metodo que retorna o tempo de atividade do sistema em s

console.log('o tempo é ' + os.uptime())

const atualos = {
  nome: os.type(),
  realese: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem()
}

console.log(atualos)
