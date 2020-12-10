import express from 'express';
const app = express()
const PORT : string|number = process.env.PORT || 5000;

app.use("*",(req, res) =>{

    res.send(`<h1>Welcome to your simple server! Awesome right</h1> ${JSON.stringify(req.params,null,1)}`);

    res.send(`req.query : ${JSON.stringify(req.query)}`);
});

app.listen(PORT,() => console.log(`hosting @${PORT}`));