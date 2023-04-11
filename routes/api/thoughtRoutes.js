const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought
} = require('../../controllers/thoughtControllers');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

module.exports = router;