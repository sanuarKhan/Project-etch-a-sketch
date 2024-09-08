// get all elements from html

const root = document.querySelector("#root");
const givenSizeBtn = document.querySelector(".givenSizeBtn");

// making Grid function
const makeGrid = (num) => {
  for (let i = 0; i < num * num; i++) {
    const div = document.createElement("div");
    div.classList.add("gritdBox");
    root.appendChild(div);
  }
};

// asking size of boes from user
givenSizeBtn.addEventListener("click", () => {
  let num = prompt("give a number less then 100 for size of grid squares");
  const giveNum = parseInt(num);
  console.log(giveNum);
  makeGrid(giveNum);
});

// in case don't provide size of box
if (!givenSizeBtn.clicked) {
  makeGrid(16);
}

//hover effect with events
root.addEventListener("mouseout", (e) => {
  e.stopPropagation();
  let genColorCode = "#" + Math.random().toString(16).slice(-3);
  const box = e.target;
  if (e.target != root) {
    box.style.background = genColorCode;
  }

  box.classList.add("hoverBox");
});

root.addEventListener("touchstart", (e) => {
  const box = e.target;
  if (e.target != root) {
    box.style.background = genColorCode;
  }
  box.classList.add("hoverBox");
});
