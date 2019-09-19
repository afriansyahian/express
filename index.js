const express = require("express");
const app = express();
const indexRouter= require("./routes/index")
const newUser= require("./routes/user")
const bodyParser= require("body-parser")
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}))
app.use("/", indexRouter)
app.use("/user", newUser)

app.get("/hello", (request, response, next) => {
  response.send({
    message: "Hello world!"
  });
});





app.listen(PORT,() => console.log(`Express server is ready on localhost:${PORT}`));


