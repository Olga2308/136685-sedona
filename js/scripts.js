var link = document.querySelector(".start");
var search = document.querySelector(".search_form");
var checkin = search.querySelector ("[name=checkin]");
var checkout = search.querySelector ("[name=checkout]");
var form = search.querySelector(form);
var storage = localStorage.getItem("checkin");
var html = document.documentElement;
html.className = html.className.replace("no-js","js");

link.addEventListener("click", function(event) {
 if (search.classList.contains("search_form_show")){
   event.preventDefault();
   search.classList.remove("search_form_show");
 }
  else {
   event.preventDefault();
   search.classList.add("search_form_show");
 }
  if (storage) {
    checkin.value = storage;
    checkout.focus();
  } else {
    checkin.focus();}
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (!checkin.value || !checkout.value) {
    event.preventDefault();
    search.classList.remove("search_form_error");
    search.offsetWidth = search.offsetWidth;
    search.classList.add("search_form_error");
  } else {
    localStorage.setItem("checkin", checkin.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (search.classList.contains("search_form_show")) {
      search.classList.remove("search_form_show");
      search.classList.remove("search_form_error");
    }
  }
});

