import express from 'express';
const app = express()
const PORT : string|number = process.env.PORT || 5000;

app.use("*",(req, res) =>{

    res.send(`<h1>Welcome to your simple server! Awesome right</h1> ${JSON.stringify(req.params,null,1)}`);

    res.send(`<p>req.query : ${JSON.stringify(req.query)}</p>`);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    res.send('<p>');
    urlParams.forEach((value:string,key:string)=>{
        res.send(`<br/> ${value} - ${key}`);
    })
    res.send('</p>');

});

app.listen(PORT,() => console.log(`hosting @${PORT}`));