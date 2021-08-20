const colors = [
    '#2E0219',
    '#4A001F',
    '#6A0F49',
    '#A7C4C2',
    '#97EFE9',
    '#F46036',
    '#1B998B',
    '#C5D86D',
    '#1e0911',
    '#8DAA9D',
    '#D81E5B',
    '#DDC3D0',
    '#031926',
    '#ffa500',
    '#395B50',
    '#F7DBA7'
];

const quotes = [
    { quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", author: "Robert Frost" },
    { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { quote: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
    { quote: "Whatever the mind of man can conceive and believe, it can achieve.", author: "Napoleon Hill" },
    { quote: "Life isn’t about getting and having, it’s about giving and being.", author: "Kevin Kruse" },
    { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" }
];

function changeColor() {
    const button = document.querySelectorAll('.btn');
    const text = document.querySelectorAll('.text');
    const quoteIcon = document.querySelector('#quote-icon');

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < button.length; i++) {
        button[i].style.backgroundColor = randomColor;
    }

    for (let i = 0; i < text.length; i++) {
        text[i].style.color = randomColor;
    }

    document.body.style.backgroundColor = randomColor;

    quoteIcon.style.color = randomColor;
}

function getQuote() {
    const quote = document.querySelector('#text');
    const author = document.querySelector('#author');

    const randomObject = Math.floor(Math.random() * quotes.length);

    const quoteValue = Object.values(quotes[randomObject])[0];

    const authorValue = Object.values(quotes[randomObject])[1];

    quote.innerHTML = quoteValue;

    author.innerHTML = authorValue;
}

const newQuote = document.getElementById('new-quote');

newQuote.addEventListener('click', () => {
    changeColor();
    getQuote();
});

$(document).ready(function () {
    changeColor();
    getQuote();
});