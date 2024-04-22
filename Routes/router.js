const express = require('express')
const userController = require('../Controller/userController')
const router = new express.Router()
const projectController = require('../Controller/projectController')
const jwtMiddleware = require('../Middleware/jwtMiddleware')
const multerConfig = require('../Middleware/multerMiddleware')

//register
router.post('/register',userController.register)
//login
router.post('/login',userController.login)
//addproject

router.post('/add-project',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)

//getallprojects
router.get('/all-projects',jwtMiddleware,projectController.getAllProjects)
//getuserprojects
router.get('/user-projects',jwtMiddleware,projectController.getUserProjects)

//gethomeprojects
router.get('/home-projects',projectController.getHomeProjects)

//edit project
router.put('/edit-project/:pid',jwtMiddleware,multerConfig.single('projectImage'),projectController.editProject)

//remove project
router.delete('/remove-project/:pid',jwtMiddleware,projectController.removeProject)

//edit profile
router.put('/edit-user',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)


//export router
module.exports = router