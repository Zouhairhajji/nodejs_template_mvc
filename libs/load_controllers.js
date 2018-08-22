var fs = require('fs');
var path = require('path');


module.exports = function (app, options) {
    var dir = path.join(__dirname, '..', 'controllers');
    var verbose = options.verbose;



    fs.readdirSync(dir).forEach(function (name) {
        var file = path.join(dir, name)

        if (!fs.statSync(file).isDirectory()) {
            //return;
        }

        var obj = require(file);
        var name = obj.name || name;

        for (var key in obj) {
            if (~['name', 'prefix', 'engine', 'before', 'views_folder'].indexOf(key))
                continue;


            var handler = obj[key];
            var method = key.split('_').length === 1 ? 'get' : key.split('_')[0];
            var route = key.split('_').length === 1 ? 'get' : key.substring(key.indexOf('_') + 1);
            var prefix = obj.prefix || '';
            var url = '/' + prefix + '/' + route
            var view_path = obj.views_folder + '/' + route;
            
            app[method](url, (req, res, next)=> {
                var params = handler(req, res, next)
                res.render(view_path, params)
            });
            
            console.info("You can access with [%s] method to [%s] and render ", method, url, view_path)
        }




    });
}