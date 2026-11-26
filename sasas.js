
const book = document.getElementById("book");
const cover = document.getElementById("cover");
const bookScene = document.getElementById("bookScene");
const questionScene = document.getElementById("questionScene");
const finalScene = document.getElementById("finalScene");

const yes = document.getElementById("yes");
const no = document.getElementById("no");

const particles = document.getElementById("particles");

for (let i = 0; i < 45; i++) {
    const particle = document.createElement("span");

    particle.className = "particle";
    particle.textContent = i % 4 === 0 ? "♡" : "✦";

    particle.style.left = Math.random() * 100 + "%";
    particle.style.fontSize = 5 + Math.random() * 15 + "px";
    particle.style.animationDuration = 6 + Math.random() * 12 + "s";
    particle.style.animationDelay = -Math.random() * 15 + "s";

    particles.appendChild(particle);
}

cover.addEventListener("click", () => {
    book.classList.add("open");
});

document.getElementById("finish").addEventListener("click", () => {
    book.classList.remove("open");

    setTimeout(() => {
        bookScene.classList.add("hidden");
        document.body.classList.add("green");

        setTimeout(() => {
            questionScene.classList.remove("hidden");
        }, 800);

    }, 2400);
});

let moves = 0;

no.addEventListener("click", () => {
    if (moves < 2) {
        moves++;

        const x = moves === 1 ? -65 : 35;
        const y = moves === 1 ? -75 : 40;

        no.style.transform = `translate(${x}px, ${y}px)`;
        return;
    }

    questionScene.classList.add("hidden");

    finalScene.querySelector(".bigHeart").textContent = "❦";
    finalScene.querySelector("h1").textContent = "Tushunaman";
    finalScene.querySelectorAll("p")[0].textContent =
        "Qaroringni hurmat qilaman.";
    finalScene.querySelectorAll("p")[1].textContent =
        "Samimiy so'zlarimni o'qiganing uchun rahmat.";
    finalScene.querySelectorAll("p")[2].textContent =
        "Senga doimo yaxshilik tilayman.";

    setTimeout(() => {
        finalScene.classList.remove("hidden");
    }, 700);
});

yes.addEventListener("click", () => {
    questionScene.classList.add("hidden");

    setTimeout(() => {
        finalScene.classList.remove("hidden");
    }, 700);

    document.querySelectorAll(".particle").forEach(p => {
        p.textContent = "♡";
        p.style.color = "#ffe6d2";
    });
});
