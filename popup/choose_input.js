






function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Failed to execute`);
}


browser.tabs.executeScript({file: "../copy-input.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);
