// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor")!;

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  (await chrome.tabs.query({ active: true, currentWindow: true })).map(
    (tab) => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id! },
        func: setPageBackgroundColor,
        args: [tab.id!],
      });
    }
  );
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor(id: number) {
  console.log(id);
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
