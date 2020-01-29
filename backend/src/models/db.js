const Sequelize = require("sequelize");

const sequelize = new Sequelize('Controle', 'sa', 'epc@123', {
    dialect: 'mssql',
    host: 'BH-DSI-003316I',
    dialectOptions: {
        encrypt: true
    }
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}


//Usuario.sync({force: true})