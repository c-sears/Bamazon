const db = require('mysql')
const { prompt } = require('inquirer')
const { cust_initial_quest, cust_purchase_quest } = require('./questions')
const { Interaction } = require('./db_interaction')
require('console.table')
// require('dotenv').config({path:'../../.env'})

exports.Customer = function(){
    
    this.disp_products = function(){
        this.query_db('SELECT * FROM products ORDER BY department_name', data => console.table(data))
    }

    this.prompt_user = function(){
        prompt(cust_initial_quest).then(({ do_next }) =>{
            switch(do_next){
                case 'List products':
                    return this.disp_products()
                case 'Make purchase':
                    return this.user_purchase()
            }
        })
    }

    this.user_purchase = async function(){
        let item_id, requested_amount, actual_amount

        await prompt(cust_purchase_quest).then(({ product_id, purchase_amount }) =>{
            item_id = product_id
            requested_amount = purchase_amount
        })
        
        // query database for user selected item
        this.query_db(`SELECT product_name,stock_quantity FROM products WHERE id = ${item_id}`, data =>{
            actual_amount = data[0].stock_quantity

            switch(actual_amount >= requested_amount){
                case true:
                    console.log(`Thank you for your purchase!`)
                    return this.update_db(`UPDATE products SET stock_quantity=${(actual_amount-requested_amount)} WHERE id=${item_id}`)
                case false:
                    return console.log(`\n\nInsuficient Product\nPlease check back soon!`)
            }
        })

    }
}