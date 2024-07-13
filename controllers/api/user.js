const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
router.post("/login", async (req, res) => {
    const user = await User.findOne({ where: { username: req.body.username } });
    console.log("user:", user)
    console.log("req.body.username:", req.body.username)
    console.log("req.body.password:", req.body.password)
    if (!user || !user.checkPassword(req.body.password)) {
        res.status(400).json({ message: "username or password is not correct" })
        return;
    }
    req.session.save(() => {
        req.session.user_id = user.id;
        req.session.login = true
        res.status(200).json({ user, message: "you are logged in" })

    });
    // res.json({ message: "you are logged in" })   
});
router.post("/logout", (req, res) => {
    if (req.session.login) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});
router.post("/signup", async (req, res) => {
    const user = await User.findOne({
        where: { username: req.body.username }
    });
    if (user) {
        res.status(400).json({ message: "username already exists" })
        return;
    }
    const newUser = await User.create({
        username: req.body.username,
        password: req.body.password
    });
    req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.login = true
        res.status(200).json({ newUser, message: "you are signed up" })
    });
})
router.post("/dashboard", async (req,res) =>{
    console.log("title", req.body.title)
    console.log("content", req.body.content)
    const post = await Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
    });
    res.status(200).json({ message: "you are signed up" });
})
router.post("/post/:id", async (req,res)=>{
    const comment = await Comment.create({
        comment_text: req.body.content,
        user_id: req.session.user_id,
        post_id: req.params.id
    });
    res.status(200).json({ message: "you are signed up" });
});
router.put("/dashboard/post/:id", async(req,res)=>{
    await Post.update({
        title: req.body.title,
        content: req.body.content
    },{
        where: {id: req.params.id}
    });
    res.status(200).json({ message:"edit post sucessfully"});
});
router.delete("/dashboard/post/:id", async(req,res)=>{
    await Post.destroy({
        where: {id: req.params.id}
    });
    console.log("backend removed a post successfully")
    res.status(200).json({ message:"delete post sucessfully"});
});


module.exports = router

