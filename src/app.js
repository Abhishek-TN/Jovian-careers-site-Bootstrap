const express = require('express');
const app = express();
const path = require('path');
const JOBS = require('./jobs');
const mustacheExpress = require('mustache-express');

app.use(express.static(path.join(__dirname,'public')));

app.set('views',path.join(__dirname));
app.set('view engine','mustache');
app.engine('mustache',mustacheExpress());

app.get('/',(req,res)=>{
    //res.send("Hello world!");
    //res.sendFile(path.join(__dirname,'index.html'));
    res.render('index',{jobs:JOBS});
});


app.get('/jobs/:id', (req, res) => {
    const id = req.params.id;
    const matchedJob = JOBS.find(job => job.id.toString() === id);
    res.render('job', { job: matchedJob});
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('Server running on https://localhost:${port}');
});

