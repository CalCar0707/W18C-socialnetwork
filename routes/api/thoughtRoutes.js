const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    deleteThought
} = require('../../controllers/thoughtControllers');

// /api/thoughts
router.route('/').get(getThoughts);

module.exports = router;