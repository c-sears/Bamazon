const { prompt } = require('inquirer')
const { initial_questions } = require('./assets/js/questions')
const { Customer } = require('./assets/js/BamazonCustomer')
const { Manager } = require('./assets/js/BamazonManager')
const { Interaction } = require('./assets/js/db_interaction')
require('dotenv').config()

const myMan = new Customer()
Object.setPrototypeOf(myMan, new Interaction())

myMan.prompt_user()