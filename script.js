function getQuote() {
    fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((result_json) => {
        let rand_quote = result_json[Math.floor(Math.random()*result_json.length)];
        quote.phrase = rand_quote.text;
        quote.author = rand_quote.author;
        phrase_out.textContent = quote.phrase;
        author_out.textContent = quote.author;
        return;
    });
};


const quote = {
    phrase: undefined,
    author: undefined,
};

const phrase_out = document.querySelector("#quote-phrase");
const author_out = document.querySelector("#quote-author");
const new_quote_button = document.querySelector("#generate");

getQuote();
new_quote_button.addEventListener('click', getQuote);