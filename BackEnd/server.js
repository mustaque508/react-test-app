/***************************project run from this file ******************************************************/
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;

// server-side rendering
app.use(
  express.static(path.join(__dirname, "..", "frontEnd", "build"), {
    maxAge: 31557600000, //for 1year[miliseconds]
    etag: true, //allow to generate tag for all pages
  })
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontEnd", "build", "index.html"));
});

// running node server
app.listen(PORT, () => {
  console.log(`successfully server running on ${PORT}`);
});
