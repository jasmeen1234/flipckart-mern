const mongoose =require('mongoose');
// var bluebird =require('bluebird')(mongoose);
// var Promise = require("bluebird");
// var Promise = require('bluebird');
// // var fs = Promise.promisifyAll(require('fs'));
// var mongoose = Promise.promisifyAll(require('mongoose'));

// mongoose.Promise = bluebird;
// const Connection = async (username, password, databaseName = 'cluster0') => {

//     const encodedUsername = encodeURIComponent(username);
    
//     const encodedPassword = encodeURIComponent(password);
    
//     const URL = `mongodb+srv://${encodedUsername}:${encodedPassword}@cluster0.v9fkxgt.mongodb.net/${databaseName}?retryWrites=true&w=majority`;
    
//     try {
    
//     await mongoose.connect(URL);
    
//     console.log('Database Connected Successfully');
    
//     } catch (error) {
    
//     console.log('Error: ', error.message);
    
//     }
    
//     };
    
//     module.exports={Connection}  ;


    async function connection.on(username, password) {
        // const URL = `mongodb://${username}:${password}@ecommerceweb-shard-00-00.fdvft.mongodb.net:27017,ecommerceweb-shard-00-01.fdvft.mongodb.net:27017,ecommerceweb-shard-00-02.fdvft.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-8a6bhp-shard-0&authSource=admin&retryWrites=true&w=majority`;
        // const URL = `mongodb://${username}:${password}@ecommerce-shard-00-00.fdvft.mongodb.net:27017,ecommerce-shard-00-01.fdvft.mongodb.net:27017,ecommerce-shard-00-02.fdvft.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-ilaj5d-shard-0&authSource=admin&retryWrites=true&w=majority`;
        const URL = `mongodb+srv://${username}:${password}@cluster0.v9fkxgt.mongodb.net/${databaseName}?retryWrites=true&w=majority`;
        try {
            await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
            console.log('Database Connected Succesfully');
        } catch(error) {
            console.log('Error: ', error.message);
        }
    
    };
    
    module.exports ={connection};