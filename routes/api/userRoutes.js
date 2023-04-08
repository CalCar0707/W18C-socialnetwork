const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    deleteUser
} = require('../../controllers/userControllers');

// /api/users
router.route('/').get(getUsers);


module.exports = router;