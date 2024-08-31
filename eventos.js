const div = document.querySelector("div");
const button = document.querySelector("button");

div.addEventListener("click", function(event) {
    alert('¡Hola! Soy el div');
});

button.addEventListener("click", function(event) {
    event.stopPropagation();
    alert("¡Hola!");
});
