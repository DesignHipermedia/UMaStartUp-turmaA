//nav
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
}
navSlide();


// slider
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000);
}


//mapa
function initMap() {
    var uluru = { lat: 32.650502, lng: -16.902587 };
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 20, center: uluru });
    var marker = new google.maps.Marker({ position: uluru, map: map });
}