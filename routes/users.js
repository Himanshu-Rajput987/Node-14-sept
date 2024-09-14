const express = require('express');
const router = express.Router();
const usercontroller = require('../controller/usercontroller');

router.get('/users', (req, res)=>{
    usercontroller.getAllUsers(req, res);
})
//http://localhost:3000/user/4
router.get('/user/:id', (req,res)=>{
    usercontroller.getUser(req, res);
})

module.exports = router;
