const $switchBall1 = document.querySelector(".switch-ball1");
const $switchBall2 = document.querySelector(".switch-ball2");

const $bigBoardPiece1 = document.querySelector(".big-board-piece1");
const $bigBoardPiece2 = document.querySelector(".big-board-piece2");
const $bigBoardPiece3 = document.querySelector(".big-board-piece3");
const $bigBoardPiece4 = document.querySelector(".big-board-piece4");
const $bigBoardPiece5 = document.querySelector(".big-board-piece5");
const $bigBoardPiece6 = document.querySelector(".big-board-piece6");
const $bigBoardPiece7 = document.querySelector(".big-board-piece7");
const $bigBoardPiece8 = document.querySelector(".big-board-piece8");
const $bigBoardPiece9 = document.querySelector(".big-board-piece9");

const $playerWonPoints = document.querySelector(".player-won-points");

let currentMove = "X";

const listHorizontal1 = [$bigBoardPiece1, $bigBoardPiece2, $bigBoardPiece3];
const listHorizontal2 = [$bigBoardPiece4, $bigBoardPiece5, $bigBoardPiece6];
const listHorizontal3 = [$bigBoardPiece7, $bigBoardPiece8, $bigBoardPiece9];

const listVertical1 = [$bigBoardPiece1, $bigBoardPiece4, $bigBoardPiece7];
const listVertical2 = [$bigBoardPiece2, $bigBoardPiece5, $bigBoardPiece8];
const listVertical3 = [$bigBoardPiece3, $bigBoardPiece6, $bigBoardPiece9];

const listDiagonal1 = [$bigBoardPiece1, $bigBoardPiece5, $bigBoardPiece9];
const listDiagonal2 = [$bigBoardPiece3, $bigBoardPiece5, $bigBoardPiece7];

const allLists = [
  listHorizontal1,
  listHorizontal2,
  listHorizontal3,
  listVertical1,
  listVertical2,
  listVertical3,
  listDiagonal1,
  listDiagonal2,
];

$switchBall1.addEventListener("click", function () {
  $switchBall1.classList.toggle("switch-active1");
});

$switchBall2.addEventListener("click", function () {
  $switchBall2.classList.toggle("switch-active2");
});

$bigBoardPiece1.addEventListener("click", () => {
  if ($bigBoardPiece1.textContent === "") {
    printPlay($bigBoardPiece1);
    verifyWinner();
    checkBoardFilled();
    printNameWinner();
    toggleMoves();
    resetBoard();
  }
});

$bigBoardPiece2.addEventListener("click", () => {
  if ($bigBoardPiece2.textContent === "") {
    printPlay($bigBoardPiece2);
    verifyWinner();
    checkBoardFilled();
    printNameWinner();
    toggleMoves();
    resetBoard();
  }
});

$bigBoardPiece3.addEventListener("click", () => {
  if ($bigBoardPiece3.textContent === "") {
    printPlay($bigBoardPiece3);
    verifyWinner();
    checkBoardFilled();
    printNameWinner();
    toggleMoves();
    resetBoard();
  }
});

$bigBoardPiece4.addEventListener("click", () => {
  if ($bigBoardPiece4.textContent === "") {
    printPlay($bigBoardPiece4);
    verifyWinner();
    checkBoardFilled();
    printNameWinner();
    toggleMoves();
    resetBoard();
  }
});

$bigBoardPiece5.addEventListener("click", () => {
  if ($bigBoardPiece5.textContent === "") {
    printPlay($bigBoardPiece5);
    verifyWinner();
    checkBoardFilled();
    printNameWinner();
    toggleMoves();
    resetBoard();
  }
});

$bigBoardPiece6.addEventListener("click", () => {
  if ($bigBoardPiece6.textContent === "") {
    printPlay($bigBoardPiece6);
    verifyWinner();
    checkBoardFilled();
    printNameWinner();
    toggleMoves();
    resetBoard();
  }
});

$bigBoardPiece7.addEventListener("click", () => {
  if ($bigBoardPiece7.textContent === "") {
    printPlay($bigBoardPiece7);
    verifyWinner();
    checkBoardFilled();
    printNameWinner();
    toggleMoves();
    resetBoard();
  }
});

$bigBoardPiece8.addEventListener("click", () => {
  if ($bigBoardPiece8.textContent === "") {
    printPlay($bigBoardPiece8);
    verifyWinner();
    checkBoardFilled();
    printNameWinner();
    toggleMoves();
    resetBoard();
  }
});

$bigBoardPiece9.addEventListener("click", () => {
  if ($bigBoardPiece9.textContent === "") {
    printPlay($bigBoardPiece9);
    verifyWinner();
    checkBoardFilled();
    printNameWinner();
    toggleMoves();
    resetBoard();
  }
});

function printPlay(board) {
  board.textContent = currentMove;
}

function toggleMoves() {
  if (currentMove === "X") return (currentMove = "O");
  if (currentMove === "O") return (currentMove = "X");
}

function verifyWinner() {
  for (const list of allLists) {
    if (
      list[0].textContent !== "" &&
      list[0].textContent === list[1].textContent &&
      list[1].textContent === list[2].textContent
    ) {
      colorPlayerWinner(list);
      return currentMove;
    }
  }
}

function colorPlayerWinner(listWinner) {
  for (const item of listWinner) {
    item.classList.add("won");
    setTimeout(() => {
      item.classList.remove("won");
    }, 1500);
  }
}

function printNameWinner() {
  if (verifyWinner() === currentMove) {
    $playerWonPoints.textContent = `Jogador ganhador: ${verifyWinner()}`;
  }
  if (currentMove === "Empate") {
    $playerWonPoints.textContent = `${currentMove}`;
  }
}

function resetBoard() {
  if (verifyWinner() === currentMove) {
    setTimeout(() => {
      for (const itemList of allLists) {
        itemList[0].textContent = "";
        itemList[1].textContent = "";
        itemList[2].textContent = "";
      }
    }, 1500);
    return (currentMove = "X");
  }
  if (currentMove === "Empate") {
    setTimeout(() => {
      for (const itemList of allLists) {
        itemList[0].textContent = "";
        itemList[1].textContent = "";
        itemList[2].textContent = "";
      }
    }, 1500);
    return (currentMove = "X");
  }
}

function checkBoardFilled() {
  if (
    $bigBoardPiece1.textContent !== "" &&
    $bigBoardPiece2.textContent !== "" &&
    $bigBoardPiece3.textContent !== "" &&
    $bigBoardPiece4.textContent !== "" &&
    $bigBoardPiece5.textContent !== "" &&
    $bigBoardPiece6.textContent !== "" &&
    $bigBoardPiece7.textContent !== "" &&
    $bigBoardPiece8.textContent !== "" &&
    $bigBoardPiece9.textContent !== ""
  ) {
    currentMove = "Empate";
  }
}
