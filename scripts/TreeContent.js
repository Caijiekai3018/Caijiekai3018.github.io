var toggler = document.getElementsByClassName("caret");

for (var i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.classList.toggle("caret-down");
    var nestedList = this.nextElementSibling;
    nestedList.classList.toggle("active");
  });
}