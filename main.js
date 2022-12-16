var affirmations = [
    "I forgive myself and set myself free.",
    "I believe I can be all that I want to be.",  
    "I am in the process of becoming the best version of myself.",    
    "I have the freedom & power to create the life I desire.",    
    "I choose to be kind to myself and love myself unconditionally.",   
    "My possibilities are endless.",    
    "I am worthy of my dreams.",   
    "I am enough.",   
    "I deserve to be healthy and feel good.",   
    "I am full of energy and vitality and my mind is calm and peaceful.",    
    "Every day I am getting healthier and stronger.",    
    "I honor my body by trusting the signals that it sends me.",   
    "I manifest perfect health by making smart choices."
]

var mantras = [
    "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
    "Don't let yesterday take up too much of today.",
    "Every day is a second chance.",   
    "Tell the truth and love everyone.",   
    "I am free from sadness.",   
    "I am enough.",
    "In the beginning it is you, in the middle it is you and in the end it is you.",
    "I love myself.",
    "I am present now.",
    "Inhale the future, exhale the past.",
    "This too shall pass.",
    "Yesterday is not today.",
    "The only constant is change.",
    "Onward and upward.",
    "I am the sky, the rest is weather."
]

var favorites = [];

var affirmation = document.querySelector("#affirmation");
var mantra = document.querySelector("#mantra");
var receiveButton = document.querySelector("#submit");
var mantraBox = document.querySelector(".shown-message");
var homeButton = document.querySelector('.home-button');
var favoritesPageBtn = document.querySelector(".favorites-page");
var favoriteBtn = document.querySelector('.favorite-button');
var favoritesPage = document.querySelector(".favorites");
var mainPage = document.querySelector('.main');
var favList = document.querySelectorAll('.fav-list');

var currentMessage;

receiveButton.addEventListener('click', getRandomQuote);
favoriteBtn.addEventListener('click', favoriteMessage);
favoritesPageBtn.addEventListener('click', showFavorites);
homeButton.addEventListener('click', goHome);
favoritesPage.addEventListener('dblclick', removeFav);

function getRandomNumber(array) {
    return Math.floor(Math.random() * array.length);
}

function getRandomQuote() {
    event.preventDefault();
    favoriteBtn.classList.remove('hidden')
    favoriteBtn.classList.add("color");
    if (affirmation.checked) {
        currentMessage = affirmations[getRandomNumber(affirmations)];
        mantraBox.innerHTML = "";
        mantraBox.innerHTML = `<p>${currentMessage}</p>`;
    } else if (mantra.checked) {
        currentMessage = mantras[getRandomNumber(mantras)];
        mantraBox.innerHTML = "";
        mantraBox.innerHTML = `<p>${currentMessage}</p>`;
    };
};

function favoriteMessage() {
    favoriteBtn.classList.remove("color");
    if (!favorites.includes(currentMessage)) {
        favorites.push(currentMessage);
    }
};

function showFavorites() {
    favoritesPage.classList.remove('hidden');
    favoritesPageBtn.classList.add('hidden');
    mainPage.classList.add("hidden");
    homeButton.classList.remove("hidden");
    favoritesPage.innerHTML = "";
    for (i = 0; i < favorites.length; i++) {
        favoritesPage.innerHTML += `<p class="fav-list" id="${i}">${favorites[i]}</p>`;
    };
};

function goHome() {
    favoritesPage.innerHTML = '';
    favoritesPage.classList.add('hidden');
    favoritesPageBtn.classList.remove('hidden');
    mainPage.classList.remove("hidden");
    homeButton.classList.add("hidden");
}

function removeFav(e) {
    var target = e.target
    target.remove()
    for (i = 0; i < favorites.length; i++) {
        if(target.innerText === favorites[i]) {
            favorites.splice(i, 1)
        }
    };
}