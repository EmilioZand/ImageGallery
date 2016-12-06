var dragElement = null;

function dragStart(e) {
  this.style.opacity = '0.4';

  dragElement = this;

  var dt =  e.dataTransfer;
  var imageURL = this.src;

  dt.effectAllowed = 'move';
  dt.setData("text/uri-list", imageURL);
}

function dragEnter(e) {
  if (dragElement != this) {
    this.style.opacity = '0.5';
  }
}

function dragLeave(e) {
  if (dragElement != this) {
    this.style.opacity = '1.0';
  }
}

function dragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = 'move';

  return false;
}

function dragEnd(e) {
  this.style.opacity = '1.0';
}

function drop(e) {

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragElement != this) {
    this.style.opacity = '1.0';
    dragElement.src = this.src;
    this.src = e.dataTransfer.getData('text/uri-list');
  }

  return false;
}
