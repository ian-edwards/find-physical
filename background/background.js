chrome.browserAction.onClicked.addListener(function(activeTab){
    const search = window.prompt("Enter search text: ");

    const searchPlus = search.replace(" ", "+");
    chrome.tabs.create({ url: `https://www.amazon.co.uk/s?k=${searchPlus}` });

    const searchMinus = search.replace(" ", "-");
    chrome.tabs.create({ url: `https://www.argos.co.uk/search/${searchMinus}/` });

    const searchSpace = search.replace(" ", "%20");
    chrome.tabs.create({ url: `https://www.coolshop.co.uk/s/?q=${searchSpace}` });
  });