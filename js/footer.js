function myFunction() {
  const footer = new XMLHttpRequest();
  footer.onload = function () {
    document.getElementById("footer").innerHTML = this.responseText;
  };

<<<<<<< HEAD
  footer.open("GET", "./partials/footer.html");
=======
  footer.open("GET", "partials/footer.html");
>>>>>>> b8b10c53c020c185d9255e7069df3348bd8b1f2f
  footer.send();
}
myFunction();
