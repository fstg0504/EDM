

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.set('port', (process.env.PORT ||8080));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.location('/index.html');
    // // res.send('Admin Homepage');
    // fs.stat(root + pathname, function(error, stats){
    //     var pathname = decodeURI(req.url).substring(1);
    //     if(!error && stats && stats.isFile && stats.isFile() ){
    //         resp.writeHead(200, {
    //             "Content-Type": mime.lookup(pathname) || 'text/html'
    //         });
    //         fs.createReadStream(pathname).pipe(resp);
    //     }else{
    //         resp.writeHead(404, {
    //             "Content-Type": 'text/html'
    //         });
    //         resp.end("404");
    //     }
    // });
});









// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});



app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
