const express = require('express');
const app = express();
app.use(express.json());
const {addTrail, getTrails, updateInfo, deleteTrail} = require('./controller/trailController')
const port = 4001;

//* FULL *
//** C **
app.post('/api/trails', addTrail);

//** R **
app.get('/api/trails', getTrails);

//** U **
app.put('/api/trails/:id', updateInfo);

//** D **
app.delete('/api/trails/:id', deleteTrail);

//
app.listen(port,() => {
    console.log(`Running strong on port ${port}`)
});

