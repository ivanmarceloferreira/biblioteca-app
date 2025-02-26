import express from 'express'
import sequelize from './config/database'
import userRoutes from './routes/userRoutes'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello, World! :)')
})

app.use(userRoutes)

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