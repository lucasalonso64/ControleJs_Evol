const db = require('./db')

const Post = db.sequelize.define('CalcConsumo',{
    timestamps: false,
    
    kmatual: {
        type: db.Sequelize.STRING
    },
    kmabas: {
        type: db.Sequelize.STRING
    },
    consumomedio: {
        type: db.Sequelize.STRING
    },

    kmpercorrido: {
        type: db.Sequelize.STRING
    },

    qtdlitro: {
        type: db.Sequelize.STRING
    },
    
})
module.exports = Post