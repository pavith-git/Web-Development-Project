var productcontainer = document.getElementById('products');
var search = document.getElementById('search');
var productlist=productcontainer.querySelectorAll('div');

search.addEventListener('keyup', function(event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector('p').textContent.toUpperCase();
        if (productname.indexOf(enteredValue) < 0) {
            productlist[count].style.display = 'none';
        } else {
            productlist[count].style.display = 'block';
        }
    }
});

var sidenav = document.querySelector(".side-navbar");

function shownav() {
  sidenav.style.left = "0";
}
function hidenav() {
    sidenav.style.left = "-60%";
  }