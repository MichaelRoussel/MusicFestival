const router = require('express').Router();

const PerformancesController = require('../controllers/performancesController');

// Begin routes

router.get('/', PerformancesController.index);
router.get('/:id', PerformancesController.show);
router.get('/:id/edit', PerformancesController.edit);
router.post('/', PerformancesController.create);
router.post('/update', PerformancesController.update);
router.post('/destroy', PerformancesController.destroy);

// End routes

module.exports = router;