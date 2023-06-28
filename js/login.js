function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// async function getAllUser() {
//     return fetch('https://dummyjson.com/users')
//         .then(res => res.json())
//         .then(json => console.log(json));

// }

const userlogin = () => {
    let form = document.getElementById("form1");
    let username = form["username"].value;
    let password = form["password"].value;
    fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    })
        .then((res) => res.json())
        .then((json) => {
            // console.log(json)
            localStorage.setItem("userinfo", JSON.stringify(json));
            localStorage.setItem("token", json.token);
            window.location.assign(`form.html?id=${json.id}`);
        }

        );
    return false;
};