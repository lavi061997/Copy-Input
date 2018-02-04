var inputs = document.getElementsByTagName('input');
var btn = [];
//inputs.classList.add("copy");
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
