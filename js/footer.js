function myFunction() {
  const footer = new XMLHttpRequest();
  footer.onload = function () {
    document.getElementById("footer").innerHTML = this.responseText;
  };

  footer.open("GET", "partials/footer.html");
  footer.send();
}
myFunction();
