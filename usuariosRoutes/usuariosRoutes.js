const express = require("express");
const usuariosControllers = require("../controllers/usuariosControllers");
const router = express.Router();

router.get("/", usuariosControllers.usuarios);
router.get("/newUsuario", usuariosControllers.usuarioForm);
router.post("/newUsuario", usuariosControllers.newUsuario);
router.get("/editUsuario/:id", usuariosControllers.editForm);
router.put("/editUsuario/:id", usuariosControllers.editUsuario);
router.delete("/delete/:id", usuariosControllers.deleteUsuario);
router.get("/:id", usuariosControllers.detalleUsuario);

module.exports = router;