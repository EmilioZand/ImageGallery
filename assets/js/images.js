var JSONdata = {
  "images": [
    { "src": "assets/images/1.png"},
    { "src": "assets/images/2.png"},
    { "src": "assets/images/3.png"},
    { "src": "assets/images/4.png"},
    { "src": "assets/images/5.png"},
    { "src": "assets/images/6.png"},
    { "src": "assets/images/7.png"},
    { "src": "assets/images/8.png"},
    { "src": "assets/images/9.png"},
    { "src": "assets/images/10.png"},
    { "src": "assets/images/11.png"},
    { "src": "assets/images/12.png"}
  ]
};

JSONdata.images.forEach( function(obj) {
  var img = new Image();
  img.src = obj.src;
  img.setAttribute("class", "gallery-img");
  img.setAttribute("draggable", "true");
  img.addEventListener('dragstart', dragStart, false);
  img.addEventListener('dragenter', dragEnter, false);
  img.addEventListener('dragleave', dragLeave, false);
  img.addEventListener('dragover', dragOver, false);
  img.addEventListener('drop', drop, false);
  img.addEventListener('dragend', dragEnd, false);
  document.getElementById("img-container").appendChild(img);
});
