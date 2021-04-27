const express = require("express");
const app = express();
const sss = require("./sss");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/sss", sss);

const port = process.env.PORT || 3003;

app.listen(port, () => console.log(`Server is listening on port ${port}`));
