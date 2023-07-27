



//POST CALL
const loginVerification = () => {
    console.log("test")
    //Update name, salary and age with the username and password
    // const username = document.getElementById('username-a30d').value;
    // const password = document.getElementById('password-a30d').value;
    const bodyPayload = { "customerName": "John Smith", "password": "qwerty" }
    console.log(bodyPayload)
    const postOptions = {

        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(bodyPayload),

    };

    //Update the link in the fetch request with the login URL

    fetch("http://18.207.173.95:8080/bank/login", postOptions)

        .then((y) => {

            console.log(y);

            if (y.status == 200) {

                document.getElementById("SuccessMessage").innerHTML = "post call worked";
                window.location.href = "Home.html"
            } else if (y.status == 429) {

                document.getElementById("post").innerHTML = "Post call worked";

            } else {

                document.getElementById("post").innerHTML = y.status;

            }

        })

        .catch((err) => alert("Error: " + err));
}
