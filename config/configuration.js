module.exports = function (app, express) {

    console.info("app")
    app.set("PORT2", "FEF")
    process.env.MY_VARIABLE = 'ahoy';

    switch (process.env.ENVIRONNEMENT) {
        case 'DEV':
            require("./development.js")(app, express);
            break;
            
        case 'DEV':
            require("./development.js")(app, express);
            break;
            
        default:
            console.info("no environnement specified")
            break;
    }


//    // DEVELOPMENT
//    app.configure('development', function () {
//        console.info("app>>")
//        require("./development.js")(app, express);
//    });
//
//
//    // PRODUCTION
//    app.configure('production', function () {
//        console.info("app>")
//        require("./production.js")(app, express);
//    });

}