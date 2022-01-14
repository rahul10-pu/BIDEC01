module.exports = (sequelizeConfig,Sequelize) => {
    const User=sequelizeConfig.define("user",{
        id : {
            type : Sequelize.INTEGER,
            primaryKey: true
        },
        name : {
            type : Sequelize.STRING
        },
        age : {
            type : Sequelize.INTEGER
        },
        married : {
            type : Sequelize.BOOLEAN
        }
    });
    return User
}