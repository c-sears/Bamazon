const { prompt } = require('inquirer')
const { init_logic } = require('./assets/js/questions')
const { Customer } = require('./assets/js/BamazonCustomer')
const { Manager } = require('./assets/js/BamazonManager')
const { Interaction } = require('./assets/js/db_interaction')
require('dotenv').config()


async function start() {
    let user
    await prompt(init_logic).then(({ role })=>{
        switch(role){
            case 'Manager':
                user = new Manager()
                return Object.setPrototypeOf(user, new Interaction())
            case 'Customer':
                user =(new Customer())
                return Object.setPrototypeOf(user, new Interaction())
        }
    })
    user.prompt_user()
}

start()