function deleteCookieAnim() {
 var img = document.getElementById("cokkie");
 img.remove();
 var node = document.getElementById("loadCookie");
 node.remove();

}

function printCookie() {

  var img = document.createElement('img');
  img.setAttribute("id", "cokkie");
  img.setAttribute("class", "spin");
  img.src = "/img/small_logo.png";
  img.width = "200";
  img.height = "200";
  img.addEventListener("animationend", deleteCookieAnim);

  var node = document.getElementById("loadCookie");

  if(node!=null){
      var children = node.childNodes;
      if(children.length == 0){
         node.appendChild(img);
      }
  }





}




