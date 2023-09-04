const express = require('express');
const router = express.Router();
const CropsController = require('../Controllers/CropsController');


router.post('/crops', CropsController.createCrops);



module.exports = router;