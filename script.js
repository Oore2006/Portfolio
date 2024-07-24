window.addEventListener('DOMContentLoaded', () => {

    let header = document.querySelector("header");
    let menu = document.querySelector("#menu-icon");

    let navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        header.classList.toggle("shadow", window.scrollY > 0);

    });

    menu.onclick = () => {
        navbar.classList.toggle("active");
    };
    window.onscroll = () => {
        navbar.classList.remove("active");

    }

    // darkmode /light moded

    let darkmode = document.querySelector("#darkmode");
    let home = document.querySelector(".home");

    darkmode.addEventListener('click', () => {
        if (darkmode.classList.contains("bx-moon")) {
            darkmode.classList.replace("bx-moon", "bx-sun");
            document.body.classList.add("active");
            home.classList.add("active");
            about.classList.add("active");
            skills.classList.add("active");
            services.classList.add("active");
            Contact.classList.add("active");

        }
        else {
            darkmode.classList.replace("bx-sun", "bx-moon");
            document.body.classList.remove("active");
            home.classList.remove("active");
            about.classList.remove("active");
            skills.classList.remove("active");
            services.classList.remove("active");
            Contact.classList.remove("active");
        }
    })
});

  