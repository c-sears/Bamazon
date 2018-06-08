const { prompt } = require('inquirer')
const { mgr_init_quest, mgr_add_inv } = require('./questions')
require('console.table')

exports.Manager = function(){
    this.prompt_manager = function(){
        prompt(mgr_init_quest).then(({ do_next }) =>{
            switch(do_next){
                case 'View products':
                    return this.disp_products()
                case 'View low inventory':
                    return this.view_low_inv()
                case 'Add inventory':
                    return this.add_inventory()
                case 'Add new product':
                    return this.add_product()
            }
        })
    }

    this.disp_products = function(){
        this.query_db(`SELECT * FROM products`, data => console.table(data))
    }

    this.view_low_inv = function(){
        this.query_db(`SELECT * from products WHERE stock_quantity <= 100`, data => console.table(data))
    }

    this.add_inventory = function(){
        prompt(mgr_add_inv).then(({ prod_id,quantity }) =>{
            this.query_db(`SELECT stock_quantity FROM products WHERE id=${prod_id}`, data =>{
                let amount = data[0].stock_quantity
                const new_amount = parseInt(amount)+parseInt(quantity)
                this.update_db(`UPDATE products SET stock_quantity=${new_amount} WHERE id=${prod_id}`)
            })
        })
    }
}