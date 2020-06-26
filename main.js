const square = document.createElement('div');
document.body.appendChild(square);

let grow = true; //flaga
let size = 100; //wielkość kwadratu

// max. wielkość kwadratu
// window.innerWidth * 0.5

square.style.width = `${size}px`;
square.style.height = `${size}px`;

window.addEventListener('scroll', () => {
    if (size >= window.innerWidth / 2) {
        grow = !grow;
    } else if (size <= 0) {
        grow = !grow;
    }
    if (grow) {
        size += 5
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
    } else {
        size -= 5;
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
    }
});