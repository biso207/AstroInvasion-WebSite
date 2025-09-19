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

// array dei testi
const texts = [
    "Explore all my projects", // testo 1
    "View my latest homeworks", // testo 2
    "Take a look to stage projects" // testo 3
]

let index = 0; // immagine iniziale

const contenitore = document.getElementById("hero");
const testo = document.getElementById("main-text");

// funzione per aggiornare immagine e colore
function aggiornaSlider() {
    contenitore.style.opacity = 0;

    // Dopo 500ms cambia immagine e colore, poi riappare
    setTimeout(() => {
        contenitore.style.backgroundImage = immagini[index];
        contenitore.style.color = colori[index];
        testo.innerHTML = texts[index];
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
const slider = document.querySelector('.project-section');

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
    if (!isDown) return; // se non clicchi, non fai nulla
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // moltiplica la velocità
    slider.scrollLeft = scrollLeft - walk;
});

// Inizializza lo slider
aggiornaSlider();
