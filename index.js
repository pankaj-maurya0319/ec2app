import express from 'express'

const app = express();

const port = 3000;

app.get('/', (req, res) =>{
    res.send('Hello From AWS EC2');
});

app.listen(port, ()=>{
    console.log(`App listning on port ${port}`);
});

