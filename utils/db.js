const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/alosista", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Database Connect Error"));
db.once("open", () => {
  console.log("Database Berhasil Terhubung");
});
