const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
});
const path = require("path");

require("dotenv").config({
    path: path.join(__dirname, "..", ".env.server")
});