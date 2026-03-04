document.getElementById("signupForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    const button = event.submitter;
    const btnRect = button.getBoundingClientRect();

    for (let i = 0; i < 6; i++) {
        const rose = document.createElement("span");
        rose.classList.add("rose-burst");
        rose.innerHTML = "🌹";

        const offsetX = (Math.random() - 0.5) * 100;
        const offsetY = (Math.random() - 0.5) * 50;

        rose.style.position = "fixed";
        rose.style.left = btnRect.left + btnRect.width/2 + offsetX + "px";
        rose.style.top = btnRect.top + btnRect.height/2 + offsetY + "px";
        rose.style.fontSize = "24px";
        rose.style.pointerEvents = "none";
        rose.style.zIndex = "9999";

        document.body.appendChild(rose);

        const moveX = (Math.random() - 0.5) * 200;
        const moveY = -Math.random() * 200;

        const animation = rose.animate([
            { transform: "translate(0px, 0px) scale(1)", opacity: 1 },
            { transform: `translate(${moveX}px, ${moveY}px) scale(1.5)`, opacity: 0 }
        ], { duration: 1000, easing: "ease-out" });

        animation.onfinish = () => rose.remove();
    }

    setTimeout(() => {
        window.location.href = "home.html";
    }, 1000);
});

function goBack() {
    window.location.href = "index.html";
}