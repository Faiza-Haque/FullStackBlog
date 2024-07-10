const loginForm = $("#login-form");
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
            window.location.replace ("/");
        }
    } catch (error) {
        alert("failed to login");
    }
}
loginForm.on("submit", loginHandler);
