const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const app = express(cors({
  origin: "*",
  methods: ["GET", "POST"],
}));
app.use(bodyParser.urlencoded({ extended: false }));

const router = require("./src/router/routes")

app.use(router)

app.listen(3000)