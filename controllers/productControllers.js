const productos = [

    { id: 1, nombre: "Notebook", precio: 1200 },

    { id: 2, nombre: "Mouse", precio: 20 },

    { id: 3, nombre: "Teclado", precio: 45 }

];

const productModel = require("../models/productModel")

module.exports = {
    productList: (req, res) => {
        const products = productModel.read();
        res.render("productList", { products, titulo: "Productos" });
    },
    productDetail: (req, res) => {
        const products = productModel.read();
        let id = req.params.id
        let product = products.find(producto => producto.id == id)
        res.render("productDetail", { titulo: "Detalle del producto", product });
    },
    productForm: (req, res) => {
        res.render("productForm", { titulo: "Nuevo producto" })
    },
    newProduct: (req, res) => {
        const products = productModel.read();
        const newProduct = {
            id: Date.now(),
            nombre: req.body.name,
            categoria: req.body.category,
            descripcion: req.body.description,
            precio: Number(req.body.price),
            stock: Number(req.body.stock),
            disponible: req.body.available == "on"
        }
        products.push(newProduct)
        productModel.write(products)
        res.redirect('/product')
    },
    editForm: (req, res) => {
        const products = productModel.read();
        let id = Number(req.params.id)
        let product = products.find(producto => producto.id == id)
        res.render("productEdit", { titulo: "Editar producto", product })
    },
    editProduct: (req, res) => {
        let products = productModel.read();
        products = products.map(product =>
            product.id == req.params.id ? {
                ...product,
                nombre: req.body.name,
                categoria: req.body.category,
                descripcion: req.body.description,
                precio: Number(req.body.price),
                stock: Number(req.body.stock),
                disponible: req.body.available == "on"
            } : product
        );
        productModel.write(products)
        res.redirect("/product")
    },
    deleteProduct: (req, res) => {
        let products = productModel.read();
        let id = req.params.id;
        products = products.filter(product => product.id != id);
        productModel.write(products);
        res.redirect("/product");
    }
}