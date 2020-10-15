const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));
router.post('/pins', controllers.createPin);
router.get('/pins', controllers.getAllPins);
router.get('/pins/:id', controllers.getPinById);
module.exports = router;