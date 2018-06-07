exports.initial_quest = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'do_next',
        choices: ['List products', 'Make purchase']
    }
]

exports.purchase_quest = [
    {
        type: 'input',
        message: 'Enter ID of product.',
        name: 'product_id'
    },
    {
        type: 'input',
        message: 'How many units would you like to purchase?',
        name: 'purchase_amount'
    }
]