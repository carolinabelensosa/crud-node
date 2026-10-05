const fs = require("fs");

const ruta = "./data/usuarios.json";

function read() {
    const data = fs.readFileSync(ruta, "utf-8");
    return JSON.parse(data);
}

function write(usuarios) {
    fs.writeFileSync(ruta, JSON.stringify(usuarios, null, 2));
}

module.exports = {
    read,
    write
};