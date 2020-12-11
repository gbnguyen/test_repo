import express from 'express';
const app = express()
const PORT : string|number = process.env.PORT || 5000;

app.use("*",(req, res) =>{

    res.send(`<h1>Welcome to your simple server! Awesome right</h1> ${JSON.stringify(req.params,null,1)}`);

    console.log(`req.query : ${JSON.stringify(req.query)}</p>`);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    console.log('<p>');
    urlParams.forEach((value:string,key:string)=>{
        console.log(`<br/> ${value} - ${key}`);
    })
    console.log('</p>');

});

app.listen(PORT,() => console.log(`hosting @${PORT}`));