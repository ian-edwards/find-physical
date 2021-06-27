/**
 * Copyright (c) 2020 Ian Edwards
 *
 * @summary Adds click listener to browser action to prompt and then open searches in new tabs
 * @author Ian Edwards <https://github.com/ian-edwards>
 */
chrome.browserAction.onClicked.addListener(function(activeTab){
    const search = window.prompt("Enter search text:");
    const searchCancelled = search == null;
    if (!searchCancelled) {
      const searchPlus = search.replace(" ", "+");
      chrome.tabs.create({ url: `https://www.amazon.co.uk/s?k=${searchPlus}` });
      chrome.tabs.create({ url: `https://www.base.com/fsearch.htm?search=${searchPlus}` });
      chrome.tabs.create({ url: `https://www.board-game.co.uk/search-results/?query=${searchPlus}` }); // Zatu
      chrome.tabs.create({ url: `https://www.currys.co.uk/gbuk/search-keywords/xx_xx_xx_xx_xx/${searchPlus}/xx-criteria.html` });
      chrome.tabs.create({ url: `https://www.ebay.co.uk/sch/i.html?_nkw=${searchPlus}` });
      chrome.tabs.create({ url: `https://www.game.co.uk/webapp/wcs/stores/servlet/AjaxCatalogSearch?storeId=10151&searchTerm=${searchPlus}` });
      chrome.tabs.create({ url: `https://www.gamingnerds.co.uk/index.php/catalogsearch/result/?q=${searchPlus}` });
      chrome.tabs.create({ url: `https://www.go2games.com/catalogsearch/result/?q=${searchPlus}` });
      chrome.tabs.create({ url: `https://store.iffyseurope.com/search?q=${searchPlus}` });
      chrome.tabs.create({ url: `https://store.nisaeurope.com/search?q=${searchPlus}` });
      chrome.tabs.create({ url: `https://offergames.co.uk/search?q=${searchPlus}` });
      chrome.tabs.create({ url: `https://www.rarewaves.com/search?q=${searchPlus}` });
      chrome.tabs.create({ url: `https://www.shop4world.com/search/${searchPlus}` });
      chrome.tabs.create({ url: `https://www.simplygames.com/search?keywords=${searchPlus}` });
      chrome.tabs.create({ url: `https://www.smythstoys.com/uk/en-gb/search/?text=${searchPlus}` });
      chrome.tabs.create({ url: `https://www.thegamery.co.uk/catalogsearch/result/?q=${searchPlus}` });
      chrome.tabs.create({ url: `https://www.monster-shop.co.uk/?s=${searchPlus}&post_type=product&type_aws=true` });
      chrome.tabs.create({ url: `https://thechelseagamer.com/pages/search-results-page?q=${searchPlus}` });

      const searchMinus = search.replace(" ", "-");
      chrome.tabs.create({ url: `https://www.argos.co.uk/search/${searchMinus}/` });
      chrome.tabs.create({ url: `https://www.very.co.uk/e/q/${searchMinus}.end` });

      const searchSpace = search.replace(" ", "%20");
      chrome.tabs.create({ url: `https://ao.com/l/search/101/99/?search=${searchSpace}` });
      chrome.tabs.create({ url: `https://www.coolshop.co.uk/s/?q=${searchSpace}` });
      chrome.tabs.create({ url: `https://itemdrop.co.uk/index.php?route=product/search&search=${searchSpace}` });
      chrome.tabs.create({ url: `https://www.musicmagpie.co.uk/store/category/?keyword=${searchSpace}` });
      chrome.tabs.create({ url: `https://www.shopto.net/en/search/?input_search=${searchSpace}` });
      chrome.tabs.create({ url: `https://store.eu.square-enix-games.com/en_GB/search/${searchSpace}` });
      chrome.tabs.create({ url: `https://www.thegamecollection.net/#sqr:(q[${searchSpace}])` });
      chrome.tabs.create({ url: `https://uk.webuy.com/search?stext=${searchSpace}` }); // CEX
      chrome.tabs.create({ url: `https://itemdrop.co.uk/index.php?route=product/search&search=${searchSpace}` });
    }
  });