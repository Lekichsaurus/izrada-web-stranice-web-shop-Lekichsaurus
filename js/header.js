function myFunction() {
  const header = new XMLHttpRequest();
  header.onload = function () {
    document.getElementById("header").innerHTML = this.responseText;
  };

  header.open("GET", "../partials/header.html");
  header.send();

  const footer = new XMLHttpRequest();
  footer.onload = function () {
    document.getElementById("footer").innerHTML = this.responseText;
  };

  footer.open("GET", "../partials/footer.html");
  footer.send();
}
myFunction();
