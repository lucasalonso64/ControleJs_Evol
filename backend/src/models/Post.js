// const mongoose = require('mongoose');

// const PostSchema = new mongoose.Schema({
//     kmtroca: Number,
//     kmptroca: Number,
//     kmatual: Number,
//     dataptroca: String,
// }, {
//     timestamps: true,
// });
// module.exports = mongoose.model('Post', PostSchema);

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
    

    // id: {
    //     type: db.Sequelize.STRING,
    //     primaryKey: false
    // },

    
})

//Post.sync({force: true}) //use este comando somente quandor for 
module.exports = Post