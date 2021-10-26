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

const $playerName1 = document.querySelector(".player-name1");
const $playerName2 = document.querySelector(".player-name2");

const $playHistoryList = document.querySelector(".play-history-list");

const $buttonPlay = document.querySelector(".button-play");
const $buttonRestart = document.querySelector(".button-restart");

let currentMove = "X";

let pointsPlayer1 = 0;
let pointsPlayer2 = 0;
let isPlaying = false;

const listBigButons = [
  $bigBoardPiece1,
  $bigBoardPiece2,
  $bigBoardPiece3,
  $bigBoardPiece4,
  $bigBoardPiece5,
  $bigBoardPiece6,
  $bigBoardPiece7,
  $bigBoardPiece8,
  $bigBoardPiece9,
];

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
    addPlayHistory(currentMove, "Primeiro quadrado");
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
    addPlayHistory(currentMove, "Segundo quadrado");
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
    addPlayHistory(currentMove, "Terceiro quadrado");
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
    addPlayHistory(currentMove, "Quarto quadrado");
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
    addPlayHistory(currentMove, "Quinto quadrado");
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
    addPlayHistory(currentMove, "Sexto quadrado");
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
    addPlayHistory(currentMove, "Sétimo quadrado");
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
    addPlayHistory(currentMove, "Oitavo quadrado");
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
    addPlayHistory(currentMove, "Nono quadrado");
    toggleMoves();
    resetBoard();
  }
});

$buttonPlay.addEventListener("click", () => {
  isPlaying = true;
  selectEnableButton(...listBigButons, $buttonRestart);
  selectDesableButton($buttonPlay);
  $playerWonPoints.textContent = "Aguardando jogadas...";
});

$buttonRestart.addEventListener("click", () => {
  isPlaying = false;
  selectEnableButton($buttonPlay);
  selectDesableButton(...listBigButons, $buttonRestart);
  $playerWonPoints.textContent = "Aguardando iniciar...";
  reset();
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
    selectDesableButton(...listBigButons);

    setTimeout(() => {
      item.classList.remove("won");
      if (isPlaying) selectEnableButton(...listBigButons);
    }, 2000);
  }
};

const printNameWinner = () => {
  if (verifyWinner() === currentMove) {
    if (currentMove === "X" && $playerName1.value)
      $playerWonPoints.textContent = `Ganhador: ${$playerName1.value}`;
    if (currentMove === "O" && $playerName2.value)
      $playerWonPoints.textContent = `Ganhador: ${$playerName2.value}`;
    if (currentMove === "X" && $playerName1.value === "")
      $playerWonPoints.textContent = `Ganhador: ${currentMove}`;
    if (currentMove === "O" && $playerName2.value === "")
      $playerWonPoints.textContent = `Ganhador: ${currentMove}`;
    givePoints(currentMove);

    setTimeout(() => {
      if (isPlaying) $playerWonPoints.textContent = "Aguardando jogadas...";
    }, 2000);
  }

  if (currentMove === "Empate") {
    $playerWonPoints.textContent = `${currentMove}!`;

    setTimeout(() => {
      if (isPlaying) $playerWonPoints.textContent = "Aguardando jogadas...";
    }, 2000);
  }
};

const givePoints = (playerWinner) => {
  if (playerWinner === "X") {
    pointsPlayer1++;
    $pointsPlayer1txt.textContent = pointsPlayer1.toString().padStart(2, "0");
  }
  if (playerWinner === "O") {
    pointsPlayer2++;
    $pointsPlayer2txt.textContent = pointsPlayer2.toString().padStart(2, "0");
  }
};

const reset = () => {
  for (const itemList of allLists) {
    itemList[0].textContent = "";
    itemList[1].textContent = "";
    itemList[2].textContent = "";
  }
  $playHistoryList.textContent = "";
  $pointsPlayer1txt.textContent = "00";
  $pointsPlayer2txt.textContent = "00";
  pointsPlayer1 = 0;
  pointsPlayer2 = 0;
};

const resetBoard = () => {
  if (verifyWinner() === currentMove || currentMove === "Empate") {
    setTimeout(() => {
      $playHistoryList.textContent = "";
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
    selectDesableButton(...listBigButons);
    setTimeout(() => {
      if (isPlaying) selectEnableButton(...listBigButons);
    }, 2000);
  }
};

const desableButtonGeneric = (button) => {
  button.disabled = true;
};

const selectDesableButton = (...parametro) => {
  for (const item of parametro) desableButtonGeneric(item);
};

const enableButtonGeneric = (button) => {
  button.disabled = false;
};

const selectEnableButton = (...parametro) => {
  for (const item of parametro) enableButtonGeneric(item);
};

const addPlayHistory = (currentMove, position) => {
  let playerName = "";
  if (currentMove === "X" && $playerName1.value)
    playerName = $playerName1.value;
  if (currentMove === "O" && $playerName2.value)
    playerName = $playerName2.value;
  if (currentMove === "X" && $playerName1.value === "")
    playerName = "Jogador X";
  if (currentMove === "O" && $playerName2.value === "")
    playerName = "Jogador O";
  if (currentMove === "Empate" && $playerName1.value) {
    currentMove = "X";
    playerName = $playerName1.value;
  }
  if (currentMove === "Empate" && $playerName1.value === "") {
    currentMove = "X";
    playerName = "Jogador X";
  }

  const $playHistory = document.createElement("div");
  $playHistory.classList.add("play-history");

  const $placePlay = document.createElement("div");
  $placePlay.classList.add("place-play");
  $placePlay.textContent = currentMove;

  const $history = document.createElement("div");
  $history.classList.add("history");

  const $playerMadeMove = document.createElement("span");
  $playerMadeMove.classList.add("player-made-move");
  $playerMadeMove.textContent = playerName;

  const $move = document.createElement("span");
  $move.classList.add("move");
  $move.textContent = position;

  $playHistoryList.appendChild($playHistory);
  $playHistory.appendChild($placePlay);
  $playHistory.appendChild($history);
  $history.appendChild($playerMadeMove);
  $history.appendChild($move);
};

selectDesableButton(...listBigButons, $buttonRestart);
