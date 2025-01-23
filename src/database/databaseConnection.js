const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER, 
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_NAME 
});

connection.connect((error) => {
  if (error) {
    console.error('Erro ao conectar com o banco de dados:', error.stack);
    return;
  }
  
  console.log('Conectado ao banco de dados com sucesso!');
});

module.exports = connection;