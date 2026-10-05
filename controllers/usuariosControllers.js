const usuariosModel = require("../models/usuariosModel");

module.exports = {
    usuarios: (req, res) => {
        const usuarios = usuariosModel.read();

        res.render("usuarios", {
            usuarios,
            titulo: "Usuarios"
        });
    },

    detalleUsuario: (req, res) => {
        const usuarios = usuariosModel.read();

        const id = req.params.id;

        const usuario = usuarios.find(usuario => usuario.id == id);

        res.render("detalleUsuario", {
            usuario,
            titulo: "Detalle del usuario"
        });
    },

    usuarioForm: (req, res) => {
        res.render("usuarioForm", {
            titulo: "Nuevo usuario"
        });
    },

    newUsuario: (req, res) => {
        const usuarios = usuariosModel.read();

        const newUsuario = {
            id: Date.now(),
            nombre: req.body.name,
            edad: Number(req.body.age)
        };

        usuarios.push(newUsuario);

        usuariosModel.write(usuarios);

        res.redirect("/usuarios");
    },
    editForm: (req, res) => {
        const usuarios = usuariosModel.read();

        const id = Number(req.params.id);

        const usuario = usuarios.find(usuario => usuario.id == id);

        res.render("usuarioEdit", {
            usuario,
            titulo: "Editar usuario"
        });
    },
    editUsuario: (req, res) => {
        let usuarios = usuariosModel.read();

        usuarios = usuarios.map(usuario =>
            usuario.id == req.params.id ? {
                ...usuario,
                nombre: req.body.name,
                edad: Number(req.body.age)
            } : usuario
        );

        usuariosModel.write(usuarios);

        res.redirect("/usuarios");
    },
    deleteUsuario: (req, res) => {
        let usuarios = usuariosModel.read();

        let id = req.params.id;

        usuarios = usuarios.filter(usuario => usuario.id != id);

        usuariosModel.write(usuarios);

        res.redirect("/usuarios");
    },
};