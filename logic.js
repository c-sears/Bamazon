const { prompt } = require('inquirer')
const { initial_questions } = require('./assets/js/questions')
const { Customer } = require('./assets/js/BamazonCustomer')
const { Manager } = require('./assets/js/BamazonManager')
const { Interaction } = require('./assets/js/db_interaction')
require('console.table')
require('dotenv').config()

const myMan = new Manager()
Object.setPrototypeOf(myMan, new Interaction())

myMan.prompt_manager()