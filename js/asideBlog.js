function myFunction() {
  const asideBlog = new XMLHttpRequest();
  asideBlog.onload = function () {
    document.getElementById("asideBlog").innerHTML = this.responseText;
  };

  asideBlog.open("GET", "../partials/asideBlog.html");
  asideBlog.send();
}
myFunction();
