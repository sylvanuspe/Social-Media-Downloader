const express = require("express");
const downloader = require("./routes/downloader");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/api/facebook/", downloader);

app.listen(2020);
