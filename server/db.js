const MongoClient = require('mongodb').MongoClient

const connectDatabase = () => {
    return new Promise((resolve, reject) => {
        return MongoClient.connect('mongodb://localhost:27017/organizer',  (err, database) => {
            if (err) reject(err)
            resolve(database)
        })
    }) 
}

module.exports = connectDatabase()
