function myFunction() {
  const header = new XMLHttpRequest();
  header.onload = function () {
    document.getElementById("header").innerHTML = this.responseText;
  };

  header.open("GET", "./partials/header.html");
  header.send();
}
myFunction();
