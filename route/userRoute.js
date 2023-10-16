const userRoute = require('express').Router()
const { getAllUser, getsingleUser, createUser,updateUser, deleteUser } = require('../controller/userController')


userRoute.get(`/`, getAllUser)
userRoute.get(`/single/:id`, getsingleUser)

userRoute.past(`/add`, createUser)

userRoute.patch(`/update/:id`, updateUser)

userRoute.delete(`/delete/:id`, deleteUser)

module.exports = userRoute