function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    let size = Math.random() * 1.5 + 1;
    heart.style.fontSize = size + "rem";
    let duration = Math.random() * 3 + 2;
    heart.style.animationDuration = duration + "s";

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(() => {
    for (let i = 0; i < 5; i++) {
        createHeart();
    }
}, 200);

// Autoplay Musik Tanpa Jeda
const music = document.getElementById("background-music");

// Coba play otomatis saat halaman dimuat
window.addEventListener("load", () => {
    music.volume = 0.5; // Atur volume ke 50%
    music.play().then(() => {
        console.log("Musik diputar otomatis!");
    }).catch(err => {
        console.log("Autoplay dicegah oleh browser. Menunggu interaksi pengguna...");
    });// Autoplay Musik dengan memastikan langsung berbunyi di HP
    const music = document.getElementById("background-music");
    
    // Coba play otomatis saat halaman dimuat
    window.addEventListener("load", () => {
        music.volume = 0.5; // Atur volume ke 50%
        music.play().then(() => {
            console.log("Musik diputar otomatis!");
        }).catch(err => {
            console.log("Autoplay dicegah oleh browser. Menunggu interaksi pengguna...");
        });
    });
    
    // Memastikan musik tetap berjalan setelah interaksi pertama
    document.addEventListener("touchstart", () => {
        if (music.paused) {
            music.play();
        }
    }, { once: true });
    
    // Efek jantung bergerak
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        document.body.appendChild(heart);
    
        heart.style.left = Math.random() * 100 + "vw";
        let size = Math.random() * 1.5 + 1;
        heart.style.fontSize = size + "rem";
        let duration = Math.random() * 3 + 2;
        heart.style.animationDuration = duration + "s";
    
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
    
    // Lebih banyak jantung di HP
    setInterval(() => {
        for (let i = 0; i < 5; i++) {
            createHeart();
        }
    }, 200);
    
});

// Memastikan musik tetap berjalan setelah interaksi
document.addEventListener("click", () => {
    if (music.paused) {
        music.play();
    }
});
