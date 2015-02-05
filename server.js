var express=require('express');
var app=express();
// Defini l'emplacement du fichier des routes et lui passe app en parametre
require('./router/main')(app);
// Definir l'emplacement du dossier des views
app.set('views',__dirname + '/views');
// View engine
app.set('view engine', 'ejs');
// Tell Server that we are actually rendering HTML files through EJS
app.engine('html', require('ejs').renderFile);
// Watch port 3000 
var server=app.listen(3000,function(){
	console.log("We have started our server on port 3000");
});

