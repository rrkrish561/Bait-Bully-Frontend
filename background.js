chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
  });
chrome.webRequest.onCompleted.addListener(
function(details) {

        console.log("URL :" + details.url);
        var link = details.url;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            message: link
          }));
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var baitTest = xhr.responseText.results;
                var temp
              }
                var p = 0;
                while (p<10) {
                  var elems = document.getElementsByTagName('*'), i;
                    for (i in elems) {
                        if((' ' + elems[i].className + ' ').indexOf(' ' + 'phYMDf nDgy9d' + ' ')> -1) {
                          var temp = elems[i].innerHTML;
                            if (baitTest[p]==0) {
                              elems[i].innerHTML = temp + "f";
                            }
                            else {
                              elems[i].innerHTML = temp + "t";
                            }
                            p++;
                            }
                          }
                }
    }
},
{
    urls: [
        "http://*.google.com/*",
        "https://*.google.com/*",
    ],
}
);
