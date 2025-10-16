// array con le immagini
const immagini = [
    "url('../../assets/img/bgsTitle/bgTitle1.jpg')",
    "url('../../assets/img/bgsTitle/bgTitle2.jpg')",
    "url('../../assets/img/bgsTitle/bgTitle3.jpg')"
];

// array dei colori associati alle immagini
const colori = [
    "#FFFFFF",  // bianco img1
    "#151A3B",  // blu scuro img2
    "#FFFFFF"   // bianco img3
];

let index = 0; // immagine iniziale

const contenitore = document.getElementById("hero");
document.getElementById("main-text").innerHTML = "Explore all my projects";
contenitore.style.color = "#FFFFFF";

// funzione per aggiornare immagine e colore
function aggiornaSlider() {
    contenitore.style.opacity = 0;

    // Dopo 500ms cambia immagine e colore, poi riappare
    setTimeout(() => {
        contenitore.style.backgroundImage = immagini[index];
        //contenitore.style.color = colori[index];
        contenitore.style.opacity = 1;
    }, 400);
}

// immagine seguente
function avanti() {
    index = (index + 1) % immagini.length;
    aggiornaSlider();
}

// avvio automatico ogni 4 secondi
setInterval(() => {
    avanti();
}, 10000);

// scroll delle slide dx->sx e sx->dx
const sliders = document.querySelectorAll('.project-section');


sliders.forEach(slider => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // velocità
        slider.scrollLeft = scrollLeft - walk;
    });
});

// inizializza lo slider
aggiornaSlider();

// check dispositivo download
function sistemaOperativo() {
    const ua = navigator.userAgent;

    if (/Windows NT|Win32|Win64/i.test(ua)) return "Windows";
    if (/Macintosh|Mac OS X/i.test(ua)) return "Mac";
    if (/Linux/i.test(ua)) return "Linux";
    if (/Android/i.test(ua)) return "Android";
    if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
    return "Altro";
}

document.querySelectorAll(".projectLink").forEach(function(link) {
    link.addEventListener("click", function(event) {
        const os = sistemaOperativo();

        // Se NON è Windows
        if (os !== "Windows") {
            // se è un link con download, blocco il download
            if (link.hasAttribute("download")) {
                event.preventDefault(); // blocca il link
                alert("Il download è disponibile solo su Windows");
            }
        }
    });
});

// funzione per notificare che un elemento non è presente
function notAvailable() {
    alert("Element not available");
}
