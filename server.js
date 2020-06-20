import express from 'express';
import Sequelize from 'sequelize';
import bodyParser from 'body-parser';

import user from './src/routes/users'

const app = express();
const port = 2000;

app.use(bodyParser.json());


  //config database
// const sequelize = new Sequelize('toko', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
//   });

  
user(app);




app.listen(port);

console.log('RESTful API server started on: ' + port);
