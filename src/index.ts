import express from 'express'
import sequelize from './config/database'
import UserModel from './models/UserModel'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello, World! :)')
})

app.get('/users', async (req, res) => {
    const users = await UserModel.findAll()
    res.send(users)
})

// sync database
sequelize
    .sync({ alter: true })
    .then(() => {
        console.log('database foi sincronizado com sucesso')
    })
    .catch((error) => {
        console.log('deu zica no bagulho', error)
    })

app.listen(port, () => {
    console.log('Server is running on port ', port)
})