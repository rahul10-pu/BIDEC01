const dbConfig=require("../config/postgres.config.js")
const Sequelize=require("sequelize")
const sequelizeConfig=new Sequelize(
    dbConfig.DB,
    dbConfig.USERNAME,
    dbConfig.PASSWORD,
    {
        host : dbConfig.HOST,
        dialect : dbConfig.dialect,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.accquire,
            idle:dbConfig.pool.idle
        }
    }
)
const db={}
db.Sequelize=Sequelize
db.sequelizeConfig=sequelizeConfig
db.users=require("./user.js")(sequelizeConfig,Sequelize)
module.exports=db
