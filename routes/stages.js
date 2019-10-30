const router = require('express').Router();

const StagesController = require('../controllers/stagesController');

// Begin routes

router.get('/', StagesController.index);
router.get('/:id', StagesController.show);
router.get('/:id/edit', StagesController.edit);
router.post('/', StagesController.create);
router.post('/update', StagesController.update);
router.post('/destroy', StagesController.destroy);

// End routes

module.exports = router;