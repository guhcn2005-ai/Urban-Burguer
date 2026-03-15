const express = require('express');
const router = express.Router();

const burgersController = require('../controllers/burgersController');

router.get('/', burgersController.listar);
router.post('/', burgersController.criar);

module.exports = router;

