const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought
} = require('../../controllers/thoughtControllers');

// /api/thoughts
router.route('/').get(getThoughts);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought);

module.exports = router;