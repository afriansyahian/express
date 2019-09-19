const express = require("express");
const app = express();
const indexRouter= require("./routes/index")
const newUser= require("./routes/user")
const bodyParser= require("body-parser")
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}))
app.use("/", indexRouter)
app.use("/user", newUser)

app.get("/hello", (request, response, next) => {
  response.send({
    message: "Hello world!"
  });
});





app.listen(3777,() => console.log("Express server is ready on localhost:3777"));


