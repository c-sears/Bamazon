const inquirer = require('inquirer')
const db = require('mysql')

const connection = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Bamazon'
})

connection.connect()

connection.query('SELECT * FROM `products`', (err, data)=>{
    if(err){
        console.log(err)
    } 
    for (const product of data){
        console.log(product.price)
    }
    connection.end()
})