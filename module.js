const path=require('path')
const os=require('os')
const fs=require('fs')
fs.writeFileSync('first.txt',`we can write`)
const filepath=os.homedir()
const user=path.basename(filepath)
console.log(filepath)
