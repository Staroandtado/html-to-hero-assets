let lang_code = "en";
console.log("header.js loaded!");

function getCookie(name) {
    // Construct the cookie name as a search pattern
    const cookiePattern = `${name}=`;
    const cookies = document.cookie.split('; '); // Split cookies into individual parts

    for (let cookie of cookies) {
        if (cookie.startsWith(cookiePattern)) {
            // Extract the cookie value
            return cookie.substring(cookiePattern.length);
        }
    }

    // Return null if cookie is not found
    return null;
}

function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}



let loginButton = document.querySelector("#loginButton");
loginButton.addEventListener("click", (event) => {
    window.location.href = "/" + lang_code + "/" + "login";
});

let profilePicture = document.querySelector("#profile_image");
const isLoggedIn = getCookie("isLoggedIn");
if (isLoggedIn === null || isLoggedIn === false) {
    loginButton.style.display = "block";
}
if (isLoggedIn == "true") {
    profilePicture.style.display = "inline";
}

let exercisesHtml = document.querySelector(".header_exercisesHtml_button");
exercisesHtml.addEventListener("click", (event) => {
    window.location.href = "/" + lang_code + "/exercises/HTML";
});

let exercisesCss = document.querySelector(".header_exercisesCss_button");
exercisesCss.addEventListener("click", (event) => {
    window.location.href = "/" + lang_code + "/exercises/CSS";
});

let exercisesJs = document.querySelector(".header_exercisesJs_button");
exercisesJs.addEventListener("click", (event) => {
    window.location.href = "/" + lang_code + "/exercises/JS";
});

let tutorialsHtml = document.querySelector(".header_tutorialsHtml_button");
tutorialsHtml.addEventListener("click", (event) => {
    window.location.href = "/" + lang_code + "/tutorials/HTML";
});

let tutorialsCss = document.querySelector(".header_tutorialsCss_button");
tutorialsCss.addEventListener("click", (event) => {
    window.location.href = "/" + lang_code + "/tutorials/CSS";
});

let tutorialsJs = document.querySelector(".header_tutorialsJs_button");
tutorialsJs.addEventListener("click", (event) => {
    window.location.href = "/" + lang_code + "/tutorials/JS";
});

let homeButton = document.querySelector("#homeButton");
homeButton.addEventListener("click", (event) => {
    window.location.href = "/" + lang_code;
});

let langSelect = document.querySelector("#langSelect");
langSelect.value = lang_code;
langSelect.addEventListener("change", (event) => {
    window.location.href = "/" + event.target.value;
});

let profileImage = document.querySelector("#profile_image");
profileImage.addEventListener("click", (event) => {
    window.location.href = "/" + lang_code + "/profile";
});

let profileButton = document.querySelector("#profileButton");
profileButton.addEventListener("click", (event) => {
    window.location.href = "/" + lang_code + "/profile";
});

let logoutButton = document.querySelector("#logoutButton");
logoutButton.addEventListener("click", (event) => {
    deleteCookie("isLoggedIn");
    deleteCookie("currentEmail");
    window.location.href = "/" + lang_code;
});
