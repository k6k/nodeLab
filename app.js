
	var config  = require('config');
	var app = {
		root : __dirname,
		config : config
	};
	app.server = require('./drivers/server')(app);
	app.routes = require('./drivers/routes.js')(app);
	app.socket = require('./drivers/socket.js')(app);
	app.messenger = require('./services/messenger.js')(app);
	app.server.create();
	console.log(app.config);

	/*
	
	io.on('connection',function(socket){
		console.log('a user connected');

		socket.on('send',function(msg){
			console.log(msg);
			io.emit('receive',msg);
		});

		socket.on('disconnect',function(){
			console.log('user is disconnected');
		});
	});

	*/