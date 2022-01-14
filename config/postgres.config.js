module.exports={
    HOST:"localhost",
    PORT:"5432",
    USERNAME:"postgres",
    PASSWORD:"postgres",
    DB:"tutorial",
    dialect:"postgres",
    pool:{
        idle:20000,
        accquire: 10000,
        max:10,
        min:0 
    }
}