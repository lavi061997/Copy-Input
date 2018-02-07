
//inputs.classList.add("copy");

function copy(){
  console.log("hello");
  var inputs = document.getElementsByTagName('input');
  var btn = [];

  for (var i = 0; i < inputs.length; i+=1){

  var rect = inputs[i].getBoundingClientRect();

  btn[i] = document.createElement("BUTTON");
  var buttonText = document.createTextNode("Copy");

  btn[i].value = "copy";
  btn[i].type = "button";
  btn[i].index = i;
  btn[i].appendChild(buttonText);

  btn[i].onclick = function(){
    /* Select the text field */
    input = inputs[this.index];
    input.select();
    /* Copy the text inside the text field */
    document.execCommand("Copy");
}
  inputs[i].parentNode.appendChild(btn[i]);

}

}
//download image https://stackoverflow.com/questions/19830088/download-multiple-images-at-once-with-javascript
function images(){
  console.log("images");
  var imgs = document.querySelectorAll("img, i");

  for(var j = 0; j < imgs.length; j+=1){
    imgs.index = j;
    imgs[j].onclick = function(){
      download(this);
    }
  }

}
function download(img) {
    console.log("heeeee");
    var link = document.createElement("a");
    link.href = img.src;
    link.download = true;
    link.style.display = "none";
    var evt = new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable": true
    });

    document.body.appendChild(link);
    link.dispatchEvent(evt);
    document.body.removeChild(link);
    console.log("Downloading...");
}


browser.runtime.onMessage.addListener((message) => {
  if (message.command === "input") {
    copy();
  } else if (message.command === "image") {
    images();
  }
});
