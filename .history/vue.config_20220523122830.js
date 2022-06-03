const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
});

process.env.dsadas = require('./package.json').version

module.exports = {
    DB: "dsadas"
}