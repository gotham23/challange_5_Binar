const express = require("express")
const multer = require("multer")
const app = express()
const form = multer({ dest: "upload" });
const controllers = require("./controllers")
const { PORT = 8000 } = process.env

app.set("view engine", "ejs")
app.use(express.json())

app.use("/assets", express.static("public/assets"))
app.use(express.static("upload"))

// Controller untuk menampilkan HTML
app.get("/", controllers.list)
app.get("/form", controllers.form)
app.get("/form/:id", controllers.form)

// Controller untuk API
app.get("/api/v1/cars", controllers.carGetAll)
app.get("/api/v1/cars/:id", controllers.carGetById)
app.post("/api/v1/cars", controllers.carPost)
app.post("/api/v1/cars-upload", form.single("attachment"), controllers.carUpload)
app.put("/api/v1/cars/:id", controllers.carPut)
app.delete("/api/v1/cars/:id", controllers.carDelete)
app.listen(PORT, () => console.log(`listen on port ${PORT}`))

