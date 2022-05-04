const q1 = document.getElementById('q1');
const b1 = document.getElementById('btn1');
const a1 = document.getElementById('a1');
b1.addEventListener('click', function() {
    a1.classList.toggle('move-left');
});