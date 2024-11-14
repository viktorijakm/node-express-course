
const os = require('os')

const user = os.userInfo()
console.log(user)

// Returns the amount of free system memory in bytes as an integer.
console.log(`The System CPU is ${os.freemem()}.`)

const currentOS = {
    name: os.type(),
    totalMem: os.totalmem(),
    load: os.loadavg(),
    direc: os.homedir(),
    release: os.release(),
}
console.log(currentOS);