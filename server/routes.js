const ObjectId = require('mongodb').ObjectId;

module.exports = (app, db) => {
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
}