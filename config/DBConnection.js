const mongoose = require("mongoose");
require("dotenv").config({path:"./.env"});
const _DBUrl = "mongodb+srv://college-project07:React%4007@cluster0.lmwyh.mongodb.net/React_App?retryWrites=true&w=majority";
// const _DBUr2 = "mongodb+srv://college-project07:React%4007@cluster0.lmwyh.mongodb.net/React_App?retryWrites=true&w=majority";



mongoose
  .connect(_DBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("Connected Successful")).catch((err) => console.log(`Connection failed ! Error : ${err}`));
