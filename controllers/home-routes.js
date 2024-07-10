const router = require ("express").Router();
const { Model } = require("sequelize");
const { User, Post, Comment } = require("../models");

router.get("/", async (req,res)=>{
    try{
        const postData = await Post.findAll({
            include:[{model:User, attributes: ["username"]}]
        });
        const posts = postData.map((post)=>post.get({plain:true}));
        res.render("home-page",{posts});
    }catch (err){
        res.status(500).json(err);
    }
});
module.exports = router;