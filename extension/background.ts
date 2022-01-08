// background.js

let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  console.log("hello");
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    tabs.map((tab) => {
      if (tab.id && tab.url?.includes("http://localhost:8000")) {
        // console.log(tab.id);
        chrome.tabs.insertCSS(tab.id, { file: "blah.css" });
      }
    });
  });
});
