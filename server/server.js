const express = require("express");
const app = express();
const db = require("./models");
const userRouter = require("./routes/userRoute");

app.use(express.json());

app.use("/api", userRouter);

db.sequelize.sync().then((req) => {
  app.listen(3000, function () {
    console.log("listening on port 3000");
  });
});
