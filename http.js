const http=require('http')

const server=http.createServer((req,res)=>{
    console.log(req)
    if (req.url==='/'){
        res.end('welcome to our homepage')
    }
    if (req.url==='/about'){
        res.end('its in about')
    }
    res.end(`<p>oops</p>
    <h1>404</h1>
    <a href='/'>homepage</a>`)
    //res.write('welcome to our homepage')
    //res.end() 
})
server.listen(5000)