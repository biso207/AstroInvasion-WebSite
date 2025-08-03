// array con le immagini
const immagini = [
    "url('../assets/img/bgsTitle/bgTitle1.jpg')",
    "url('../assets/img/bgsTitle/bgTitle2.jpg')",
    "url('../assets/img/bgsTitle/bgTitle3.jpg')"
];

// array dei colori associati alle immagini
const colori = [
    "#FFFFFF",  // bianco img1
    "#151A3B",  // blu scuro img2
    "#FFFFFF"   // bianco img3
];

// array dei testi
const texts = [
    "An amazing journey is waiting for you", // testo 1
    "Explore the space and beyond", // testo 2
    "The space is just waiting you" // testo 3
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

// Inizializza lo slider
aggiornaSlider();
