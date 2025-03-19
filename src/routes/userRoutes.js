express=require('express')
const router=express.Router();
const userControllers=require('../controllers/userControllers')


router.post('/',userControllers.createUser)
router.get('/',userControllers.getAllusers)
router.get('/:id',userControllers.getUserById)
router.put('/:id',userControllers.updateUserById)
router.patch('/:id',userControllers.partiallyUpdateUserById)
router.delete('/:id',userControllers.deleteUserById)
module.exports=router