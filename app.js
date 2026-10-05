const express = require("express");
const app = express();
const mainRoutes = require("./routes/mainRoutes");
const productRoutes = require("./routes/productRoutes");
const usuariosRoutes = require("./usuariosRoutes/usuariosRoutes");
const methodOverride = require("method-override");
const PORT = 3000;

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.use("/" , mainRoutes)
app.use("/product", productRoutes)
app.use("/usuarios", usuariosRoutes);