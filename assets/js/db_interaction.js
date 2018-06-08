// Module to handle all sql database interactions

const db = require('mysql')

exports.Interaction = function(){
    
    // Holds connection object -- accessible in all methods of `Interaction`
    this.connection = {}

    // Creates a generic connection
    this.connect_to_db = function(){
        this.connection = db.createConnection({
            host: process.env.HOST_NAME,
            user: process.env.USER_NAME,
            password: process.env.PASSWORD,
            database: process.env.DATABASE
        })
        this.connection.connect()
    }

    // Ends connection with database
    this.disconnect_db = function(){
        this.connection.end()
    }


   /**
    * @param  {string} query sql style syntax for query
    * @param  {function} cb callback function executing on query data
    */
    this.query_db = function(query, cb){

        this.connect_to_db()

        this.connection.query(query, (err, data)=>{
            if(err) console.error(err)
            return cb(data)
        })
        this.disconnect_db()
    }
   
    /**
     * @param  {string} update_query sql style syntax for update query
     * @returns {promise} returns a promise
     */
    this.update_db = async function(update_query){

        this.connect_to_db()

        this.connection.query(update_query, (err, data)=>{
            if(err) console.error(err)
        })

        this.connection.end()

        return Promise.resolve()
    }

    /**
     * @param  {string} query `INSERT INTO` query
     */
    this.add_to_db = function(query){

        this.connect_to_db()

        this.connection.query(query, (err, data)=>{
            if(err) throw err
        })

        this.connection.end()
    }
}
