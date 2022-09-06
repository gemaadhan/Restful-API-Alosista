const express = require("express");
const app = express();
const port = 3000;
const routePngnRtlh = require("./routes/penanganan-rtlh");
const bodyParser = require("body-parser");

const cors = require("cors");
app.use(cors());
require("./utils/db");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use("/penanganan-rtlh", routePngnRtlh);

app.listen(port, () => {
  console.log(`Alosista Listen di Port ${port}`);
});
