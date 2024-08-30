// add nav to navbar class
let nav = document.querySelector(".nav");
let footer = document.querySelector(".footer");

let uri = window.location.href;
uri = uri.replace(uri.split("/")[uri.split("/").length - 1], "index.html");

footer.innerHTML = `
<footer>
                &copy; 2024 Designed by Aldo Natanael Sihaloho
            </footer>
`;

nav.innerHTML = `
<nav class="navbar">
                <div class="logo">
                    <img src="./assets/logo.png" alt="logo" />
                </div>
                <ul class="menu-nav">
                    <li><a href="${uri}">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>
                <div class="search">
                    <input
                        type="text"
                        placeholder="Search"
                        id="search-news"
                        class="search-news"
                    />
                    <ul class="list-search no-result">
                        <li>
                            <a href="#">
                                <h1 class="title-search">halo</h1>
                                <p>halo bang</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <h1 class="title-search">halo</h1>
                                <p>halo bang</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
`;

setTimeout(() => {
    let identifyPage = document.querySelector(".container");

    // home page
    if (identifyPage.classList.contains("home")) {
        // banner
        let posaBanner = document.querySelector(".posa-nbanner");
        let cardnBanner = document.querySelectorAll(".card-nbanner");
        cardnBanner[1].classList.add("otw");

        setInterval(() => {
            cardnBanner = document.querySelectorAll(".card-nbanner");
            cardnBanner[1].classList.add("otw");
            posaBanner.style = "transition: 0;";
            posaBanner.style.paddingLeft = "320px";

            setTimeout(() => {
                posaBanner.style = "transition: 1s;";
                cardnBanner[1].style.left = "-50%";
                setTimeout(() => {
                    cardnBanner[1].style.bottom = "0";
                    cardnBanner[1].style.aspectRatio = "1/0.78";
                    cardnBanner[1].style.width = "130vh";
                    posaBanner.style.paddingLeft = "0";

                    cardnBanner[1].addEventListener("transitionend", () => {
                        posaBanner.appendChild(cardnBanner[0]);
                        posaBanner.lastElementChild.classList.remove("start");
                        posaBanner.lastElementChild.style = "";
                        posaBanner.firstElementChild.classList.replace(
                            "otw",
                            "start"
                        );
                    });
                }, 100);
            }, 100);
        }, 5000);

        // gallery
        let num = document.querySelectorAll(".num-gallery");
        let boardGallery = document.querySelectorAll(".card-gallery");

        for (let i = 0; i < num.length; i++) {
            num[i].innerHTML = i + 1;
        }

        for (let i = 0; i < boardGallery.length; i++) {
            let timeoutMouseEnter;

            boardGallery[i].addEventListener("mouseenter", () => {
                timeoutMouseEnter = setTimeout(() => {
                    boardGallery[i].querySelector(
                        ".board-gallery"
                    ).style.opacity = "1";
                }, 300);
            });

            boardGallery[i].addEventListener("mouseleave", () => {
                clearTimeout(timeoutMouseEnter);

                boardGallery[i].querySelector(".board-gallery").style.opacity =
                    "0";
            });
        }

        // services

        let services = document.querySelector(".services");
        let delay;

        window.addEventListener("scroll", () => {
            if (window.scrollY > services.offsetTop - 300) {
                services.classList.add("onview");
                delay = setTimeout(() => {
                    services.querySelector(".list-service").style.opacity = "1";
                }, 1000);
            } else {
                clearTimeout(delay);
                services.querySelector(".list-service").style.opacity = "0";
                services.classList.remove("onview");
            }
        });

        // portfolio

        let motion = document.querySelector(".motion-port");
        let portfolio = document.querySelector(".portfolio");
        let motionG;

        window.addEventListener("scroll", () => {
            if (
                window.scrollY >
                portfolio.offsetTop + portfolio.style.height - 100
            ) {
                motionG = setTimeout(() => {
                    motion.classList.add("onview");
                    setTimeout(() => {
                        motion.classList.remove("onview");
                        setTimeout(() => {
                            motion.style.display = "none";

                            setTimeout(() => {
                                portfolio.querySelector(
                                    ".board-portfolio"
                                ).style.opacity = "1";
                            }, 1000);
                        }, 2000);
                    }, 500);
                }, 1000);
            } else if (window.scrollY < portfolio.offsetTop - 500) {
                clearTimeout(motionG);
                motion.style.display = "inherit";
                portfolio.querySelector(".board-portfolio").style.opacity = "0";
            }
        });
    }

    // blog page
    if (identifyPage.classList.contains("blog")) {
        let navbar = document.querySelector(".navbar");
        navbar.querySelector(".search").style.display = "none";

        let alert = document.querySelector(".alert-new");

        function shakeAlert(step = 1) {
            if (step <= 6) {
                alert.style.rotate = step % 2 === 0 ? "-8deg" : "8deg";
                setTimeout(() => shakeAlert(step + 1), 100);
            } else {
                alert.style.rotate = "0deg";
                alert.style.scale = "1";
            }
        }

        setInterval(() => {
            alert.style.scale = "1.2";
            shakeAlert();
        }, 5000);

        let numPop = document.querySelectorAll(".number-popular");

        for (let i = 0; i < numPop.length; i++) {
            numPop[i].innerHTML = "#" + (i + 1);
        }
    }
}, 1);
