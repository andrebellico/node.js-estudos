const Sequelize = require("sequelize");
const sequelize = new Sequelize('aula', 'root', '0000', {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!");
}).catch(function(error){
    console.log("falha ao se conectar: " + error);
});

const Postagem = sequelize.define('Postagens', {
    Titulo: {
        type: Sequelize.STRING
    },
    Conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    Titulo: 'AULAS DE NODE.JS',
    Conteudo: 'APRENDENDO A USAR O SEQUELIZE NO MEU VSCODE E CONECTANDO ELE AO MEU BANCO DE DADOS'
})

const Usuario = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

Usuario.create({
    nome: 'André',
    sobrenome: 'Bellico',
    idade: 18,
    email: 'teste@gmail.com'
})