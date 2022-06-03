const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
}), {
    "root": "dist",
    "clean_urls": true,
    "routes": {
        "/**": "index.html"
    }
};