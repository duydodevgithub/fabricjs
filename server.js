const express = require("express");
const app = express();
const path = require("path");

const PORT = 3301;

// Static directory to be served
app.use(express.static("app/public"));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/app/public/index.html"));
})

app.listen(PORT, function() {
    console.log("Server is running on Port ", PORT);
})