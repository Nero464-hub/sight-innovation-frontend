const express = require("express")
const path = require("path")
const cors = require("cors")
const app = express();
const homeRoutes = require('./routes/homeRoutes');
app.use(express.json())
app.use(express.static(__dirname));
const bodyParser = require("body-parser")
app.use(cors({origin: '*'}));
app.use(bodyParser.json());
app.use("/",homeRoutes);


const port = process.env.PORT|| 6500;
app.listen(port,() => console.log("server started in port",port))