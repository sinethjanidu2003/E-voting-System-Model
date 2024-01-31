const express = require("express");
const router = express.Router();

const homeController = require("../Controllers/HomeController.js");

//This is for the ID verification and Photo Upload
const multer = require('multer');


// Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.get('/',(req,res)=>{
    res.render('home');
});

//upload.single('document')

router.post('/verfication', homeController.verification);
router.post('/vote',homeController.vote);

module.exports = router;
