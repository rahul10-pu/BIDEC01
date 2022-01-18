module.exports = (sequelizeConfig,Sequelize) => {
    const Auth=sequelizeConfig.define("userauth",{
        userName : {
            type : Sequelize.STRING,
            primaryKey: true
        },
        password : {
            type : Sequelize.STRING
        },
        emailID : {
            type : Sequelize.STRING
        }
    });
    return Auth
}