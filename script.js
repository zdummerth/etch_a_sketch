let canvas = document.querySelector("#canvas");


let size = 50;
for (let i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    canvas.appendChild(cell);
}