const mongoose = require('mongoose');


//config
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/teste', {
    useNewUrlParser: true
}).then(function () {
    console.log('Connected!')
}).catch(function (error) {
    console.log('Deu falha' + error)
});


//model - users
//definindo o model
const userSchema = mongoose.Schema({

    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    pais: {
        type: String
    }

})
//collection
mongoose.model('users', userSchema);

const newUser = mongoose.model('users')

new newUser({
    nome: 'Amaral',
    sobrenome: 'Mashida',
    idade: 20,
    email: 'mashida@amaral.com',
    pais: 'Brasil'
}).save().then(function(){
    console.log('Usuario criado com sucesso')
}).catch(function(error){
    console.log('Houve um erro ao criar um usuario: ' + error)
})