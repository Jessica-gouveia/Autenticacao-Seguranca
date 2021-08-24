const mongoose = require('mongoose')   //criando minha conexao com a database
const mongourl = process.env.MONGODB_URL

const connect = () => {
    mongoose.connect(mongourl, {  //deixar o mongourl colado nos parenteses, senão não funciona
        useNewUrlParser: true,
        useUnifiedTopology: true

    })

    .then(console.log('Database conectada com sucesso!'))  //promessa de retorno de sucesso ou falha na conexão da minha database
    .catch(err => console.err)
}

module.exports = {connect}
