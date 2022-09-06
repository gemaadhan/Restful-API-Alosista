const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://data:permisi77@clusterdisperakimjateng.pdfjvyg.mongodb.net/alosistapkp?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Database Connect Error"));
db.once("open", () => {
  console.log("Database Berhasil Terhubung");
});
