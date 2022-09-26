const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/',(req,res)=>{
    const header = new Promise((resolve,rejects) => {
        fs.readFile('./views/html/header.html','utf-8',(err,data)=>{
            if(err) rejects(err);
            resolve(data);
        })
    })
    const home = new Promise((resolve,rejects)=>{
        fs.readFile('./views/html/home.html','utf-8',(err,data)=>{
            if(err) rejects(err);
            resolve(data)
        })
    })
    const footer = new Promise((resolve,rejects)=>{
        fs.readFile('./views/html/footer.html','utf-8',(err,data)=>{
            if(err) rejects(err)
            resolve(data);
        })
    })

    Promise.allSettled([header,home,footer]).then((values)=>{
        res.setHeader('Content-Type','text/html');
        res.status(200).send(values[0].value+values[1].value+values[2].value);
    })
});




router.get('/*',(req,res)=>{
    res.status(404).send('<h1>Page Not Found</h1>');
})





module.exports = router;