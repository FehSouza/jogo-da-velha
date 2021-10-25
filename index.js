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

const $pointsPlayer1txt = document.querySelector(".points-jogador1");
const $pointsPlayer2txt = document.querySelector(".points-jogador2");

let currentMove = "X";

let pointsPlayer1 = 0;
let pointsPlayer2 = 0;

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

$switchBall1.addEventListener("click", () => {
  $switchBall1.classList.toggle("switch-active1");
});

$switchBall2.addEventListener("click", () => {
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

const printPlay = (board) => {
  board.textContent = currentMove;
};

const toggleMoves = () => {
  if (currentMove === "X") return (currentMove = "O");
  if (currentMove === "O") return (currentMove = "X");
};

const verifyWinner = () => {
  for (const list of allLists) {
    if (
      list[0].textContent &&
      list[0].textContent === list[1].textContent &&
      list[1].textContent === list[2].textContent
    ) {
      colorPlayerWinner(list);
      return currentMove;
    }
  }
};

const colorPlayerWinner = (listWinner) => {
  for (const item of listWinner) {
    item.classList.add("won");
    desableButtons();

    setTimeout(() => {
      item.classList.remove("won");
      enableButtons();
    }, 2000);
  }
};

const printNameWinner = () => {
  if (verifyWinner() === currentMove) {
    $playerWonPoints.textContent = `Jogador ganhador: ${verifyWinner()}`;
    givePoints(currentMove);

    setTimeout(() => {
      $playerWonPoints.textContent = "Aguardando jogadas...";
    }, 2000);
  }

  if (currentMove === "Empate") {
    $playerWonPoints.textContent = `${currentMove}`;

    setTimeout(() => {
      $playerWonPoints.textContent = "Aguardando jogadas...";
    }, 2000);
  }
};

const givePoints = (playerWinner) => {
  if (playerWinner === "X") {
    pointsPlayer1++;
    if (pointsPlayer1 < 10) $pointsPlayer1txt.textContent = `0${pointsPlayer1}`;
    if (pointsPlayer1 >= 10) $pointsPlayer1txt.textContent = `${pointsPlayer1}`;
  }
  if (playerWinner === "O") {
    pointsPlayer2++;
    if (pointsPlayer2 < 10) $pointsPlayer2txt.textContent = `0${pointsPlayer2}`;
    if (pointsPlayer2 >= 10) $pointsPlayer2txt.textContent = `${pointsPlayer2}`;
  }
};

const resetBoard = () => {
  if (verifyWinner() === currentMove || currentMove === "Empate") {
    setTimeout(() => {
      for (const itemList of allLists) {
        itemList[0].textContent = "";
        itemList[1].textContent = "";
        itemList[2].textContent = "";
      }
    }, 2000);
    return (currentMove = "X");
  }
};

const checkBoardFilled = () => {
  if (
    $bigBoardPiece1.textContent &&
    $bigBoardPiece2.textContent &&
    $bigBoardPiece3.textContent &&
    $bigBoardPiece4.textContent &&
    $bigBoardPiece5.textContent &&
    $bigBoardPiece6.textContent &&
    $bigBoardPiece7.textContent &&
    $bigBoardPiece8.textContent &&
    $bigBoardPiece9.textContent &&
    verifyWinner() !== currentMove
  ) {
    currentMove = "Empate";
  }
};

const desableButtons = () => {
  $bigBoardPiece1.disabled = true;
  $bigBoardPiece2.disabled = true;
  $bigBoardPiece3.disabled = true;
  $bigBoardPiece4.disabled = true;
  $bigBoardPiece5.disabled = true;
  $bigBoardPiece6.disabled = true;
  $bigBoardPiece7.disabled = true;
  $bigBoardPiece8.disabled = true;
  $bigBoardPiece9.disabled = true;
};

const enableButtons = () => {
  $bigBoardPiece1.disabled = false;
  $bigBoardPiece2.disabled = false;
  $bigBoardPiece3.disabled = false;
  $bigBoardPiece4.disabled = false;
  $bigBoardPiece5.disabled = false;
  $bigBoardPiece6.disabled = false;
  $bigBoardPiece7.disabled = false;
  $bigBoardPiece8.disabled = false;
  $bigBoardPiece9.disabled = false;
};
