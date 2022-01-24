'use strict';

const nodemailer = require("nodemailer")
const express = require("express");
let app = express();
const router = express.Router();
const dotenv = require("dotenv").config()
const bodyParser = require("body-parser")
const {request} = require("express");
// Constants
const PORT = 8282;
const HOST = '0.0.0.0';

const path = __dirname + '/src/';

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

router.post("/sendMail",async function (req,res,next ){
    try {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            name: 'florianspk.fr',
            host: "ssl0.ovh.net",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIl_USER,
                pass: process.env.EMAIL_PASS
            },
        });
        console.log(transporter)
        let info = await transporter.sendMail({
            from: {
                name: req.body.name,
                address: req.body.email
            },
            to: "florianspk@gmail.com",
            subject: "Nouveau message de :" + req.body.name ,
            text: req.body.message,
        });
        console.log(info)
        if (info.messageId){
            res.status(200).json("success")
        }else {
            res.status(401).json("error")
        }
    }catch (e){
        res.status(405).json("error")
    }
})

// App
app.get('/', (req, res) => {
    res.sendFile(path + "index.html");
});

app.use(express.static(path));
app.use("/", router);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
