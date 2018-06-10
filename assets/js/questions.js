// BEGIN CUSTOMER QUESTIONS
// =========================================================================
exports.cust_initial_quest = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'do_next',
        choices: ['List products', 'Make purchase']
    }
]

exports.cust_purchase_quest = [
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
// END CUSTOMER QUESTIONS
// =========================================================================

// BEGIN MANAGER QUESTIONS
// =========================================================================
exports.mgr_init_quest = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'do_next',
        choices: [
            'View products',
            'View low inventory',
            'Add inventory',
            'Add new product'
        ]
    }
]

exports.mgr_add_inv = [
    {
        type: 'input',
        message: 'ID of product to add inventory',
        name: 'prod_id'
    },
    {
        type: 'input',
        message: 'Enter quantity to add',
        name: 'quantity'
    }
]

exports.mgr_ask_params = [
    {
        type: 'prompt',
        message: 'Specify maximum stock quantity returned',
        name: 'low_quant'
    }
]

exports.mgr_add_prod = [
    {
        type: 'input',
        message: 'Enter name of product',
        name: 'prod_name',
    },
    {
        type: 'input',
        message: 'Enter product\'s department name',
        name: 'depart_name',
    },
    {
        type: 'input',
        message: 'Enter stock quantity of product',
        name: 'stock_quant',
    },
    {
        type: 'input',
        message: 'Enter price of product',
        name: 'prod_price',
    }
]
// END MANAGER QUESTIONS
// =========================================================================