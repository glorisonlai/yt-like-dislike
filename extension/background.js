"use strict";
// background.js
var color = "#3aa757";
chrome.runtime.onInstalled.addListener(function () {
    console.log("hello");
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
        tabs.map(function (tab) {
            var _a;
            if (tab.id && ((_a = tab.url) === null || _a === void 0 ? void 0 : _a.includes("http://localhost:8000"))) {
                // console.log(tab.id);
                chrome.tabs.insertCSS(tab.id, { file: "blah.css" });
            }
        });
    });
});
