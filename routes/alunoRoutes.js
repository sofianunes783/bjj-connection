const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

router.get('/', alunoController.getAll);
router.post('/', alunoController.create);

module.exports = router;
