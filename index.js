import express from 'express'

const app = express()
const PORT = 3500

app.get('/', (req, res)=>{
    res.send('Wellcome to Uganda')
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on http://localhost:${PORT}`)
})