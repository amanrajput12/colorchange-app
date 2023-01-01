let changeColor = document.getElementById("canvas");
let btn = document.getElementById("button");


btn.addEventListener("click", function color() {
    let value = "0123456789ABCDEF";
let count = "#";
  for (let i = 0; i < 6; i++) {
    count = count + value[Math.floor(Math.random() * 16)];
    changeColor.style.backgroundColor = count;
  }
});


