let quote;
fetch("https://api.quotable.io")
.then((res) => res.json())
.then((response) => {
	quote = response;
	console.log(response);
});

console.log(quote);
