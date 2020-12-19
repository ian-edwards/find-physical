var search = window.prompt("Enter search text: ");
var searchPlus = search.replace(" ", "+");
var searchMinus = search.replace(" ", "-");
var searchSpace = search.replace(" ", "%20");

alert(searchSpace)

window.open(`https://www.amazon.co.uk/s?k=${searchPlus}`);

window.open(`https://www.argos.co.uk/search/${searchMinus}/`);

window.open(`https://uk.webuy.com/search?stext=${searchSpace}`);