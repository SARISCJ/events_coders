window.addEventListener("load",function(){
  var papel=document.getElementById("papel");
  papel.addEventListener("click",function(e){
    var evt=window.evt || e;
    document.getElementById("div2").style.left=evt.clientX+ "px";
    document.getElementById("div2").style.top=evt.clientY + "px";
  });
});


  function allowDrop(ev) {
      ev.preventDefault();
  }

  function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
}

