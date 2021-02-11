const express = require('express');
const app = express();
require('./server/config/mongoose.config'); 
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
const routes = require("./server/routes/jokes.routes");
routes(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
