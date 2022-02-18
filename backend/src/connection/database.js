const knex = require('knex')({
	client: 'mysql2',
	connection: {
	  host : '127.0.0.1',
	  user : 'root',
	  password : '',
	  database : 'avafilmes'
	}
});

// Client references the installed library to recognize sql commands, in this project mysql2 was used

module.exports = knex;