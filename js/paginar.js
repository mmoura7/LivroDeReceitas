function paginar(pageId) {
    var items = document.getElementsByClassName("item");
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove("active");
    }
    document.getElementById(pageId).classList.add("active");
  }