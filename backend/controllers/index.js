const { Pin } = require('../models');

const createPin = async (req, res) => {
	try {
		const pin = await Pin.create(req.body);
		return res.status(201).json({
			pin,
		});
	} catch (error) {
		return res.status(500).json({ error : error.message})
	}

}

const getAllPins = async (req, res) => {
	try {
		const pins = await Pin.findAll();
		return res.status(200).json({ pins });
	} catch (error) {
		return res.status(500).send(error.message);
	}
}

const getPinById = async (req, res) => {
	try {
		const { id } = req.params;
		const pin = await Pin.findOne({
			where : { id : id}
		});
		if (pin) {
			return res.status(200).json({ pin });
		}
		return res.status(404).send('Pin with specified id does not exist!');
	} catch (error) {
		return res.status(500).send(error.message);
	}

}

module.exports = {
	createPin,
	getAllPins,
	getPinById
}