const mongoose = require('mongoose')
const Estudio = require('../models/estudio')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET


const getAll =  async (req, res) => {
    const authHeader = req.get('authorization') //acessar autorização 
    const token = authHeader.split(' ')[1] //pegar somente o token sem a palavra baerer por isso 1

    if(!token) {
        return res.status(403).send({'message': 'Cadê o tokezinnn??'})
    } 
    //usar metodo jsonwebtoken p autenticar a rota
    //verificacao do token com o SECRET do projeto
    jwt.verify(token,SECRET, async (err) => {
        if(err) {
            res.status(403).send({'message': 'Token não válido', err})
        }
        const estudios = await Estudio.find()
        res.json(estudios)

    })
   
  }

const createStudio = async (req, res) => {
    //fazendo a autorizacao p poder criar meu estudio
    const authHeader = req.get('authorizathion')
    const token = authHeader.split(' ')[1] 
    if(!token) {
        return res.status(403).send({'message': 'Vai p onde? Precisa da autorizaçãooo'})
    }

    jwt.verify(token, SECRET, async (err) => {
        if(err) {
            res.status(403).send({'message': 'Token não é válido'}, err)
        }

    })
    //permito a criação de um estudio
    const estudio = new Estudio({
      _id: new mongoose.Types.ObjectId(),
      nome: req.body.nome,
      criadoEm: req.body.criadoEm,
    })
  //salvar esse estudio criado no banco de dados na const novoEstudio
  const estudioJaExiste = await Estudio.findOne({nome: req.body.nome})
  if(estudioJaExiste) {
      return res.status(404).json({error: 'Estudio já cadastrado'})
  }
  try{
      const novoEstudio = await estudio.save()
      res.status(200).json(novoEstudio)
  } catch(err) {
      res.status(400).json({message: err.message})
  }
  
  }

  const updateOne =  async (req,res) => {
      //tenta encontrar um estudio por id
      try{
          const estudio = await Estudio.findById(req.params.id) //mongoose vai no mongodb e procura o estudio dessa rota
          if(estudio == null) {
              return res.status(404).json({"message": "Estúdio não encontrado"})
          }

          //fazer as alteraçoes
          if(req.body.nome != null) {
            estudio.nome = req.body.nome
        }
          const estudioAtualizado = await estudio.save()
          res.status(200).json({estudioAtualizado}) 

      } catch(err) {
          res.status(500).json({"message": err.message})
      }

  }

  const deleteEstudio = async (req,res) => {
      //fazendo a autorizacao p deletar meu estudio
      const authHeader = req.get('authorization')
      const token = authHeader.split(' ')[1]
      if(!token) {
          return res.status(403).send({'message': 'Cadê sua autorização hein??'})
    }

    jwt.verify(token, SECRET, async (err) => {
        if(err) {
            res.status(403).send({'message': 'Token não válido', err})
        }
    })
      const estudio = await Estudio.findById(req.params.id)
      if(estudio == null) {
          return res.status(404).json({'message': 'Estúdio não encontrado'})

      }

      try{
          await estudio.remove()
          res.status(200).json({'message': 'Estúdio deletado com sucesso!'})
      } catch (err) {
          res.status(500).json({'message': err.message})
      }
  }








module.exports = {
    getAll,
    createStudio,
    updateOne,
    deleteEstudio
}