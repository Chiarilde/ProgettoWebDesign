// Aggiungi un listener per il click sui link di navigazione
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        // Rimuovi la classe "active" da tutti i link
        navLinks.forEach((item) => item.classList.remove("active"));
        // Aggiungi la classe "active" solo al link cliccato
        e.target.classList.add("active");
    });
});

document.addEventListener("scroll", function () {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            setTimeout(() => card.classList.add("visible"), index * 200);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Seleziona tutte le immagini trigger
    const triggers = document.querySelectorAll(".popup-trigger");
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-btn");
    const popupText = document.getElementById("popup-text");
    const popupTitle = document.getElementById("popup-title");

    // Oggetti di titolo e testo per ogni immagine
    const content = {
        image1: {
            title: "🍇 The Mineral-Rich Soil of Our Vineyard",
            text: "Nestled in the heart of our region, the vineyard of Gleras Wines is blessed with mineral-rich soil that tells a story millions of years in the making. Formed through ancient geological processes, our soil is composed of a unique blend of limestone, clay, and volcanic rock, which provides an exceptional foundation for vine cultivation. These minerals are naturally absorbed by the roots of our grapevines, imparting a distinctive character to our wines—crisp acidity, a touch of salinity, and a complexity that is unmistakable.The influence of these minerals is most evident in our white wines, where the crisp flavors of Glera and Pinot Grigio are complemented by subtle notes of wet stone and a refreshing, clean finish. This minerality is not just a flavor—it is a signature of our terroir, a mark of the soil’s interaction with the vines. Our red varietals, like Sangiovese, also benefit from this mineral foundation, achieving a balance between fruity richness and earthy undertones.",
        },
        image2: {
            title: "🍇 The Grapes: A Symphony of Flavors",
            text: "At Gleras Wines, our vineyards are home to a carefully curated selection of grape varieties that reflect the rich heritage of our region. Our most cherished varietal is Glera, a delicate white grape known for producing crisp, aromatic wines with hints of green apple, pear, and a touch of floral sweetness. Traditionally used for our sparkling wines, Glera captures the freshness of our terroir, making each sip a refreshing experience. Alongside Glera, we cultivate Sangiovese, a versatile red grape that thrives in our sun-drenched hills. This varietal produces elegant red wines with flavors of ripe cherries, plums, and a subtle touch of spices. Our Sangiovese wines are crafted with care, showcasing balanced tannins and a smooth finish, perfect for pairing with grilled meats, hearty pasta, or aged cheeses. Lastly, we take pride in our Pinot Grigio, a white grape that flourishes in our cool, breezy vineyards. Our Pinot Grigio is renowned for its vibrant acidity and citrus-driven profile, with notes of lemon, green apple, and a hint of minerality.",
        },
        image3: {
            title: "🍷 The Magic of Our Barrels",
            text: "At Gleras Wines, our barrels are more than just containers—they are instruments of transformation. Crafted from the finest oak, each barrel is carefully selected to enhance the flavors and aromas of our wines. During the aging process, the wine interacts with the wood, absorbing subtle notes of vanilla, spices, and toasted almonds. This slow, controlled oxidation allows the wine to develop a smooth texture, greater complexity, and a refined character that is unmistakable. But the magic doesn’t end with flavor. Our barrels also shape the wine’s color and structure. For our red wines, the tannins soften over time, resulting in a velvety mouthfeel, while white wines take on a golden hue with enhanced richness. Every barrel tells a story, and with each vintage, we capture the perfect balance between the vibrant fruit of our vineyards and the warm, elegant influence of oak.",
        },
        image4: {
            title: "🍷 The Wines of Gleras Wines",
            text: "At Gleras Wines, we pride ourselves on crafting wines that capture the essence of our unique terroir. Our flagship varietal, Glera, is a crisp and aromatic white wine known for its fresh notes of green apple, pear, and delicate floral hints. Carefully cultivated in our mineral-rich soils, Glera wines showcase a vibrant acidity and a refreshing finish, making them the perfect choice for light dishes, seafood, or simply enjoyed on a sunny afternoon. Beyond Glera, our vineyard is also home to a selection of premium red and white wines. Our Sangiovese offers a smooth, fruit-forward profile with flavors of ripe cherries and a touch of spice, while our Pinot Grigio delights with its bright citrus character and crisp minerality. Each bottle of Gleras Wines is a testament to our commitment to quality, sustainability, and the timeless art of winemaking.",
        },
    };

    // Aggiungi evento click a ciascuna immagine
    triggers.forEach((trigger) => {
        trigger.addEventListener("click", function () {
            const id = trigger.id; // Ottieni l'id dell'immagine cliccata
            if (content[id]) {
                popupTitle.textContent = content[id].title;
                popupText.textContent = content[id].text;
            } else {
                popupTitle.textContent = "Wine Story";
                popupText.textContent = "Wine story not available.";
            }
            popup.classList.add("active");
        });
    });

    // Chiudi il pop-up al clic della X
    closeBtn.addEventListener("click", function () {
        closePopup();
    });

    // Chiudi il pop-up cliccando fuori dal contenuto
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            closePopup();
        }
    });

    // Funzione per chiudere il pop-up
    function closePopup() {
        popup.classList.remove("active");
    }
});

document.querySelectorAll(".header__menu__item a").forEach((item, index) => {
    item.addEventListener("click", function (event) {
        // event.preventDefault();

        // Rimuove la classe jump da tutti
        // document
        //     .querySelectorAll(".inner-rounded-container")
        //     .forEach((container) => {
        //         container.classList.remove("jump");
        //     });

        // Scroll morbido verso la sezione cover
        // window.scrollTo({
        //     top: document.querySelector("#cover").offsetTop,
        //     behavior: "smooth",
        // });

        // Aggiunge il salto dopo un ritardo
        setTimeout(() => {
            const targetContainer = document.querySelector(
                `.inner-rounded-container${index + 1}`
            );
            if (targetContainer) {
                targetContainer.classList.add("jump");
                setTimeout(() => {
                    targetContainer.classList.remove("jump");
                }, 500);
            }
        }, 500); // Ritardo di 1 secondo
    });
});

const hamburger = document.querySelector(".header__icon-bar");
const menu = document.querySelector(".header__menu");
const headerBar = document.querySelector(".header__bar");

hamburger.addEventListener("click", function (e) {
    e.preventDefault();

    menu.classList.toggle("is-open");
    headerBar.classList.toggle("is_white");
});
