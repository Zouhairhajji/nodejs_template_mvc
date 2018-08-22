
/**
 * DEVELOPMENT Environment settings
 */
module.exports = function (app, express) {
    process.env.db_uri = 'mongodb://localhost/mvc-development';
    //app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
}
