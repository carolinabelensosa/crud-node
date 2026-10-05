const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "../data/products.json")

function read() {
    return JSON.parse(fs.readFileSync(file, "utf8"))
}

function write(data) {
 fs.writeFileSync(file, JSON.stringify(data, null, 2))
}

module.exports = {read, write};


