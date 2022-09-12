const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');
router.get('/', controller.getBootcamps);
router.get('/:id', controller.getBootcamp);
router.post('/', (req, res, next) =>
  controller.createBootcamps(req, res, next)
);
router.put('/:id', (req, res, next) =>
  controller.updateBootcamps(req, res, next)
);
router.delete('/:id', (req, res, next) =>
  controller.deleteBootcamps(req, res, next)
);

module.exports = router;
