const router = require("express").Router();
const auth = require("../middlewares/auth")
const { User, Post, Comment } = require("../models");

router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User, attributes: ["username"] }]
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render("home-page", { posts, login: req.session.login });
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/signup", (req, res) => {
    res.render("signup");
});

router.get("/dashboard", auth, async (req, res) => {
    const userData = await User.findOne({ where: { id: req.session.user_id }, include: [{ model: Post }] });
    const posts = userData.posts.map((post) => post.get({ plain: true }));
    console.log(userData)
    res.render("dashboard", { posts, login: req.session.login });


})
router.get("/dashboard/post/:id", auth, async (req, res) => {
    const postData = await Post.findOne({ where: { id: req.params.id } })
    const post = postData.get({ plain: true });
    res.render("post-editor", { post, login: req.session.login });
});
router.get("/post/:id", auth, async (req, res) => {
    const commentData = await Comment.findAll({
        where: { post_id: req.params.id }, include: [{ model: User, attributes: ["username"] }]
    });
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    const postData = await Post.findOne({
        where: { id: req.params.id }, include: [{ model: User, attributes: ["username"] }]
    });
    const post = postData.get({ plain: true });
    res.render("post-comment", { post, comments, login: req.session.login });
});
module.exports = router;