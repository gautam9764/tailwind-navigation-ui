let smg = window.document.getElementById("msg");

let home = window.document.getElementById("Home");
let Profile = window.document.getElementById("Profile");
let Settings = window.document.getElementById("Settings");


home.addEventListener("click", () => {
    smg.textContent = "Home Page"
    home.style.scale = "1.2"
    home.style.transition = "all 0.3s"

});
Profile.addEventListener("click", () => {
    smg.textContent = "Profile Page"
    Profile.style.scale = "1.2"
    Profile.style.transition = "all 0.3s"

});
Settings.addEventListener("click", () => {
    smg.textContent = "Settings Page"
    Settings.style.scale = "1.2"
    Settings.style.transition = "all 0.3s"

});