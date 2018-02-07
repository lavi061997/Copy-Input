
function listenForClicks(){
  document.addEventListener("click", (e) => {
    console.log("clicked");
    if (!e.target.classList.contains("beast")) {
        return;
}

function imageify(tabs){
  browser.tabs.sendMessage(tabs[0].id, {
    command: "image",
});
}

function inputify(tabs){
  browser.tabs.sendMessage(tabs[0].id, {
    command: "input",
});
}

function reportError(){
  console.log("error");
}
if (e.target.classList.contains("image")) {
  browser.tabs.query({active: true, currentWindow: true})
    .then(imageify)
    .catch(reportError);
}
else if (e.target.classList.contains("input")) {
  browser.tabs.query({active: true, currentWindow: true})
    .then(inputify)
    .catch(reportError);
}
  });
}



function reportExecuteScriptError(error) {
  console.log("hello");
}


browser.tabs.executeScript({file: "/content_scripts/copy-input.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);
