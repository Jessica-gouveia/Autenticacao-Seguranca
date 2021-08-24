## Autenticação e Segurança :rocket:

Esse projeto é a continuação do projeto anterior de criação de estúdios e filmes fazendo CRUD completo e integrando ao banco de dados MongoDB. Para fazer a autenticação foram instaladas algumas dependências:

`jsonwebtoken`

É um método que faz a autenticação entre duas partes por meio de um *token* assinado que autentica uma requisição web.

`dotenv`

Dotenv é um módulo de dependência zero que carrega variáveis de ambiente de um `.env`arquivo para o `process.env` .

`dotenv-safe`

Idêntico ao *dotenv* mas garante que todas as variáveis de ambiente necessárias sejam definidas após a leitura `.env`. Essas variáveis necessárias são lidas `.env.example`, que devem ser confirmadas junto com seu projeto.

`bcrypt`

O *Bcrypt* oferece uma maior segurança do que os outros algoritmos criptográficos porque contém uma variável que é proporcional à quantidade de processamento necessário para criptografar a informação desejada, tornando-o resistente a ataques do tipo “força-bruta”.

#### Criando rota, criptografando senha e rota de login para as usuárias

A rota criada para as usuárias foi:

`router.post('/create', controller.create)`

Usamos o Bcrypt para criptografar a senha , gerando um hash com a senha recebida no body da request.

`bcrypt.hashSync(request.body.senha.10)`

Rota de login:

`router.post('/login', controller.login)`



#### Notas 

Achei muito interessante esse processo de autenticação e autorização , testar no postman e ver os resultados é muito lindo :heart_eyes:. Aprendi também a importância de cada dependência usada.

Quero deixar aqui meu agradecimento mais que especial à minha incrível Profa Paula por todo amor e dedicação , você é demais! :heart:

![MIB](https://c.tenor.com/OudZ6DL3rCgAAAAC/%D0%B9%D0%BE%D0%BA%D0%B5%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D0%B5-men-in-black.gif)





   



​                                                        



















