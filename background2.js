
chrome.runtime.onInstalled.addListener(function(details) {
     chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
       chrome.declarativeContent.onPageChanged.addRules([rule2]);
     });
   });

   var rule2 = {
    conditions: [
      new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: 'www.google.com', schemes: ['https'] }
      })
    ],
    actions: [ new chrome.declarativeContent.ShowPageAction() ]
  };
chrome.pageAction.onClicked.addListener(function() {
 // query the current tab on the current window
  chrome.tabs.query( { active: true, currentWindow: true }, function ( tabs ) {
   // exceute the main.js script on this tab

     var tabUrl = tabs[0].id;
  });
});

function replaceContentInContainer(matchClass) {
    var elems = document.getElementsByTagName('*'), i, n, titles[];
    for (i in elems) {
        if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ')
                > -1) {

        }
    }
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
