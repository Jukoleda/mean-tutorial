const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const contectarDB = async () => {
    try {

        await mongoose.connect(proceess.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('DB Conectada');
         
    } catch(err){
        console.log(err);
        process.exit(1);
    }
};

module.exports = contectarDB;