// HTML'deki elemanlara ulaşalım
const button = document.getElementById('colorBtn');
const card = document.getElementById('profileCard');

// Butona tıklama olayı ekleyelim
button.addEventListener('click', () => {
    // Rastgele bir renk üretelim
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    // Kartın arka plan rengini güncelleyelim
    card.style.backgroundColor = "#" + randomColor;
});