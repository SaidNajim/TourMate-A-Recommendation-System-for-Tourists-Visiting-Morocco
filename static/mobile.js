const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

function openMap(name, address) {
  var mapSearch = name + ' ' + address;
  var mapLink = 'https://www.google.com/maps/place/' + encodeURIComponent(mapSearch);
  window.open(mapLink, '_blank');
}