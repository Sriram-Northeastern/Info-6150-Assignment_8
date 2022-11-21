const express = require("express");
const userRoutes = require('./routes/userRoutes')
// const cors = require("cors"); /* cors is a middleware. it will add some headers in each response and our API can be called from everywhere*/
const mongoose = require("mongoose");

const app = express();


app.use(express.json()); // called because express cannot handle a json file directly
// app.use(cors());

app.use("/user", userRoutes)


app.get("/", (req, res) => {
  res.send("User API");
});


const PORT = 5000;

mongoose
  .connect(
    "mongodb+srv://sriram:sriram@cluster0.k2m1jju.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to Database");
    app.listen(PORT, () => {
      console.log(`Server up and running at PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
