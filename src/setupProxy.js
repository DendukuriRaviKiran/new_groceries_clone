const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/insert",{
            target: "https://newpybackend.herokuapp.com",
            secure: false,
            changeOrigin: true
        })
    );
};