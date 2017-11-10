const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId;
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 9000 : process.env.PORT;
const app = express();

let db;

MongoClient.connect('mongodb://localhost:27017/organizer',  (err, database) => {
    if (err) throw err
    db = database;
})

if (isDeveloping) {
	console.log("In development mode");
}
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/api/goals', (req, res) => {
    db.collection('goals').find().toArray((err, goals) => res.send(goals))
})

app.post('/api/goals', (req, res) => {
    try {
        db.collection('goals').insert(req.body)
    } catch (e) {
        throw new Error('Failed to add goal');
    }
    res.send({"Status:": "Successfully added goal"})
})

app.delete('/api/goals/:id', (req, res) => {
    try {
        db.collection('goals').remove({_id:  new ObjectId(req.params.id)})
    } catch (e) {
        throw new Error('Failed to remove goal');
    }
    res.send({"Status:": "Successfully removed goal"})
})

app.listen(port, '0.0.0.0', (err) => {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});