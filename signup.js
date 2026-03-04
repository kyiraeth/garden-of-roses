document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("signupForm");
    const button = document.querySelector(".rose-btn");

    if (!form || !button) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        const btnRect = button.getBoundingClientRect();

        for (let i = 0; i < 6; i++) {
            const rose = document.createElement("span");
            rose.classList.add("rose-burst");
            rose.innerHTML = "🌹";

            // Random X and Y within +/- 50px from button center
            const offsetX = (Math.random() - 0.5) * 100; 
            const offsetY = (Math.random() - 0.5) * 50; 

            rose.style.left = btnRect.left + btnRect.width/2 + offsetX + "px";
            rose.style.top = btnRect.top + btnRect.height/2 + offsetY + "px";

            document.body.appendChild(rose);

            setTimeout(() => rose.remove(), 1000);
        }

        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000);
    });

});

function goBack() {
    window.location.href = "index.html";
}