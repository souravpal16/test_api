const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send({"result": "Welcome to test api"});
});

app.get('/about', (req, res)=>{
    res.send({"result":"Welcome to about endpoint"});
});

app.get('/user', (req, res)=>{
    res.send({"how to use": "Just try to add /user/{username} and see the magic."});
});

app.get('/user/:username', (req, res) => {
    const username = req.params.username;
    res.send({"result":`Welcome user: ${username}`});
})

app.listen(PORT, ()=>{
    console.log(`server is up on port: ${PORT}`);
})