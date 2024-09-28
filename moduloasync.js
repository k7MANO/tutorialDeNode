const { error, log } = require('console')
const { readFileSync, writeFileSync, read, readFile } = require('fs')
const { writeFile } = require('fs/promises')
console.log('oi')
readFile('./conteúdo/oioi/um.txt', 'utf8', (error, result) => {
  if (error) {
    console.log('erro')
    return
  }
  const primeiro = result
  readFile('./conteúdo/dois.txt', 'utf8', (error, result) => {
    if (error) {
      console.log('erro')
      return
    }
    const segundo = result
    writeFile(
      './conteúdo/result-async.txt',
      'o carlinhos da a bunda o carlinos da a bundaaaaa',
      (error, result) => {
        if (error) {
          return
          console.log(error)
        }
        console.log(tchau)
      }
    )
  })
})
console.log('oi dnv')
