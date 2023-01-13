const path = require("path")
const bodyParser = require("body-parser");
const express = require("express");
const leaveRoutes = require("./routes/leaveNote");
const readRoutes = require("./routes/readNote");
const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "..", "public")))

app.get("/", (req, res, next)=>{
    res.sendfile(path.join(__dirname, "views", "home.html"));
})

app.use("/admin",leaveRoutes);
app.use(readRoutes);


app.use((req, res, next)=>{
    res.status(404).send("<h1>not found</h1>")
})

const PORT = process.env.PORT || 8002
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
