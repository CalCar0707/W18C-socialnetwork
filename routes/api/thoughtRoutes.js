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

// /api/thoughts/:thoughtId/reactions
//post to create reaction stored in single thoughts reaction array
// dlete to pull and remove reaction by reaction id

module.exports = router;