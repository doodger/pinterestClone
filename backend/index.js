const express = require('express');
const app = express()
const port = 3000

app.use(express.json() );

//setting up postgres using sequelize
const Sequelize = require('sequelize')
const sequelize = new Sequelize('pinterestdb',
				'pinterest',
				'root', { dialect: 'postgres'})
sequelize

.authenticate()

.then(() => {

console.log('Connection has been established successfully.');

})

.catch(err => {

console.error('Unable to connect to the database:', err);

});

const Pin = sequelize.define('pin', {
// attributes
imgSource : {//link to the image
	type : Sequelize.STRING,
	allowNull : true
	},
alt : {//alternative text
	type : Sequelize.STRING,
	defaultValue : "Image"
	},
pinTitle : {//Title of the pin
	type : Sequelize.STRING,
	allowNull : false
	},
pinText : {//Text of the pin
	type : Sequelize.STRING,
	allowNull : false
	}
});

// Note: using `force: true` will drop the table if it already exists
Pin.sync( { force : true })


//POST endpoint that contains the pins
app.post('/pin', async (req, res) => {
	try {
		const newPin = new Pin(req.body)
		await newPser.save()

		res.json( { pin : newPin})
	} catch(error) {
		console.log(error)
	}

})

app.get('/', (req, res) => res.json( { message: 'Hello, world!' }))

app.listen(port, () =>  console.log('Example app listening on port ${port}!'))
