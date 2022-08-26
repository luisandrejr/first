
/*const {name1, name2} = require('./names')
const sayHello = require('./utils')
sayHello(name1)*/

/*const os = require('os')
const user = os.userInfo()

const info = {
    name: os.type(),
    release: os.release()
}*/

/*const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/firstText.txt', 'utf8')
const second = readFileSync('./content/subfolder/secondText.txt', 'utf8')

console.log(first, second)

writeFileSync('./content/third.Txt', 'This is the third file')*/

const http = require('http')
const server = http.createServer((req, res)=>{
    res.write('My first website')
    res.end()
})

server.listen(4000)