chrome.browserAction.onClicked.addListener(function(activeTab){
    const search = window.prompt("Enter search text:");

    const searchPlus = search.replace(" ", "+");
    chrome.tabs.create({ url: `https://www.amazon.co.uk/s?k=${searchPlus}` });
    chrome.tabs.create({ url: `https://www.base.com/fsearch.htm?search=${searchPlus}` });
    chrome.tabs.create({ url: `https://www.ebay.co.uk/sch/i.html?_nkw=${searchPlus}` });
    chrome.tabs.create({ url: `https://www.go2games.com/catalogsearch/result/?q=${searchPlus}` });
    chrome.tabs.create({ url: `https://www.shop4world.com/search/${searchPlus}` });
    chrome.tabs.create({ url: `https://www.simplygames.com/search?keywords=${searchPlus}` });
    chrome.tabs.create({ url: `https://www.smythstoys.com/uk/en-gb/search/?text=${searchPlus}` });
    chrome.tabs.create({ url: `https://www.thegamery.co.uk/catalogsearch/result/?q=${searchPlus}` });

    const searchMinus = search.replace(" ", "-");
    chrome.tabs.create({ url: `https://www.argos.co.uk/search/${searchMinus}/` });
    chrome.tabs.create({ url: `https://www.very.co.uk/e/q/${searchMinus}.end` });

    const searchSpace = search.replace(" ", "%20");
    chrome.tabs.create({ url: `https://ao.com/l/search/101/99/?search=${searchSpace}` });
    chrome.tabs.create({ url: `https://www.coolshop.co.uk/s/?q=${searchSpace}` });
    chrome.tabs.create({ url: `https://www.shopto.net/en/search/?input_search=${searchSpace}` });
    chrome.tabs.create({ url: `https://www.thegamecollection.net/#sqr:(q[${searchSpace}])` });
    chrome.tabs.create({ url: `https://uk.webuy.com/search?stext=${searchSpace}` });
  });