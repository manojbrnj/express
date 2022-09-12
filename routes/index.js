const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  res.status(200).json({ data: 'show all boootcamps' });
});
router.post('/', (req, res) => {
  res.status(200).json({ data: 'create bootcamp' });
});
router.put('/:id', (req, res) => {
  res.status(200).json({ data: 'update bootcamp' });
});
router.delete('/:id', (req, res) => {
  res.status(200).json({ data: 'delete bootcamp' });
});

module.exports = router;
