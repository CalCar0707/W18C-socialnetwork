const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser
} = require('../../controllers/userControllers');

// /api/users// both WORKING properly
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

module.exports = router;