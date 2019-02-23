require('dotenv').config()

const express= require('express')
const bodyParser= require('body-parser')
const ctrl= require('./controller')
const massive= require('massive')


const {CONNECTION_STRING, SERVER_PORT, } = process.env

const app= express()

app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)

    console.log('Touching our DB ;)')
    app.listen(SERVER_PORT, () =>
    console.log(`I'm listening to you... on port ${SERVER_PORT}`)
    )
})

app.get('/api/houses', ctrl.getAll)
app.post('/api/house', ctrl.createHouse)
app.delete('/api/house/:id', ctrl.deleteHouse)