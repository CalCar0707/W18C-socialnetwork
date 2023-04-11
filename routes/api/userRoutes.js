const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend
} = require('../../controllers/userControllers');

// /api/users// both WORKING properly
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friend/:friendId
//post to add new friend to users friend list
//delete to remove friend  from users friend list
router.route('/:userId/friend/:friendId').post(addFriend);


module.exports = router;