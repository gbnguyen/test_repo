import express from 'express';
const app = express()
const PORT : string|number = process.env.PORT || 5000;



app.use("*",(req, res) =>{

    res.send(`<h1>Welcome to your simple server! Awesome right</h1> ${JSON.stringify(req.params,null,1)}`);

    console.log(`req.query : ${JSON.stringify(req.query)}</p>`);

   console.log(`req.params : ${req.params}`);
   console.log(`req.body : ${req.body}`);
   console.log(`req.params : ${req.body}`);
   console.log(`req.query : ${req.query}`);
   console.log(`req.query : ${req.headers}`);

});

app.listen(PORT,() => console.log(`hosting @${PORT}`));