const winningBoxIndex = Math.floor(Math.random() * 3);

function checkWin(box) {
  const boxes = document.querySelectorAll(".box");
  const boxIndex = Array.from(boxes).indexOf(box);

  if (boxIndex === winningBoxIndex) {
    box.textContent = "Gagné!";
    box.style.backgroundColor = "#4CAF50";
  } else {
    box.textContent = "Perdu!";
    box.style.backgroundColor = "#f44336";
  }

  // Disable further clicks
  boxes.forEach((box) => (box.onclick = null));
}
