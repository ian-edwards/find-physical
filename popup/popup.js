var search = window.prompt("Enter search text: ");
var searchSpace = search.replace(" ", "%20");

const timeoutinterval = 1000;
var timeoutstep = 0;

var searchPlus = search.replace(" ", "+");
setTimeout(function(){ window.open(`https://www.amazon.co.uk/s?k=${searchPlus}`); }, timeoutstep++ * timeoutinterval);
setTimeout(function(){ window.open(`https://www.base.com/fsearch.htm?search=${searchPlus}`); }, timeoutstep++ * timeoutinterval);

var searchMinus = search.replace(" ", "-");
setTimeout(function(){ window.open(`https://www.argos.co.uk/search/${searchMinus}/`); }, timeoutstep++ * timeoutinterval);
//window.open(`https://www.amazon.co.uk/s?k=${searchPlus}`);
//window.open(`https://www.base.com/fsearch.htm?search=${searchPlus}`);

//window.open(`https://www.argos.co.uk/search/${searchMinus}/`);

var searchSpace = search.replace(" ", "%20");
setTimeout(function(){ window.open(`https://www.coolshop.co.uk/s/?q=${searchSpace}`); }, timeoutstep++ * timeoutinterval);
//window.open(`https://www.coolshop.co.uk/s/?q=${searchSpace}`);