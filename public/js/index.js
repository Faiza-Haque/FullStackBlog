const loginForm = $("#login-form");
const signupForm = $("#signup-form");
const postForm = $("#post-form");
const postEditForm = $("#post-from-editor")
const deleteBtn = $("#delete-btn")
const logoutBtn = $(".btn-logout");
const loginHandler = async (event) => {
    try {
        event.preventDefault();
        const username = $("#username").val().trim();
        const password = $("#password").val();
        const res = await $.ajax({
            url: "/api/user/login",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({ username, password }),
        });
        $("#username").val("");
        $("#password").val("");
        if (res) {
            window.location.replace("/");
        }
    } catch (error) {
        alert("failed to login");
    }
}
const signupHandler = async (event) => {
    try {
        event.preventDefault();
        const username = $("#username").val().trim();
        const password = $("#password").val();
        const res = await $.ajax({
            url: "/api/user/signup",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({ username, password }),
        });
        $("#username").val("");
        $("#password").val("");
        if (res) {
            window.location.replace("/");
        }
    } catch (error) {
        alert("failed to signup");
    }
}
const logoutHandler = async (event) => {
    try {
        await $.ajax({
            url: "/api/user/logout",
            method: "POST",
        });
        window.location.replace("/login");
    } catch (error) {
        alert("failed to logout");
    }
};
const postHandler = async (event) => {
    event.preventDefault()
    const title = $("#title").val().trim();
    const content = $("#content").val().trim();
    const res = await $.ajax({
        url: "/api/user/dashboard",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({ title, content }),
    });
    if (res) window.location.replace("/dashboard");
    $("#title").val("");
    $("#content").val("");

}
const postEditHandler = async (event) => {
    event.preventDefault();
    const id = postEditForm.data("postId");
    const title = $("#title").val().trim();
    const content = $("#content").val().trim();
    const res = await $.ajax({
        url: `/api/user/dashboard/post/${id}`,
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify({ title, content }),
    });
    if (res) window.location.replace("/dashboard");
    $("#title").val("");
    $("#content").val("")
}
const deleteHandler = async () => {
    const id = ppostEditForm.data("postId");
    const res = await $.ajax({
        url: `/api/user/dashboard/post/${id}`,
        method: "DELETE",
    });
    if (res) window.location.replace("/dashboard");
}


loginForm.on("submit", loginHandler);
signupForm.on("submit", signupHandler);
postForm.on("submit", postHandler);
postEditForm.on("submit", postEditHandler);
logoutBtn.on("click", logoutHandler);
deleteBtn.on("click", deleteHandler);