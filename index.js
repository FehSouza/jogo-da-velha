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
const $matchHistoryList = document.querySelector(".match-history-list");

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
    addPlayHistory(currentMove, "Primeiro quadrado");
    if (verifyWinner() === currentMove || currentMove === "Empate") {
      addMatchHistory();
      givePoints();
      printNameWinner();
    }
    toggleMoves();
    resetBoard();
  }
});

$bigBoardPiece2.addEventListener("click", () => {
  if ($bigBoardPiece2.textContent === "") {
    printPlay($bigBoardPiece2);
    verifyWinner();
    checkBoardFilled();
    addPlayHistory(currentMove, "Segundo quadrado");
    if (verifyWinner() === currentMove || currentMove === "Empate") {
      addMatchHistory();
      givePoints();
      printNameWinner();
    }
    toggleMoves();
    resetBoard();
  }
});

$bigBoardPiece3.addEventListener("click", () => {
  if ($bigBoardPiece3.textContent === "") {
    printPlay($bigBoardPiece3);
    verifyWinner();
    checkBoardFilled();
    addPlayHistory(currentMove, "Terceiro quadrado");
    if (verifyWinner() === currentMove || currentMove === "Empate") {
      addMatchHistory();
      givePoints();
      printNameWinner();
    }
    toggleMoves();
    resetBoard();
  }
});

$bigBoardPiece4.addEventListener("click", () => {
  if ($bigBoardPiece4.textContent === "") {
    printPlay($bigBoardPiece4);
    verifyWinner();
    checkBoardFilled();
    addPlayHistory(currentMove, "Quarto quadrado");
    if (verifyWinner() === currentMove || currentMove === "Empate") {
      addMatchHistory();
      givePoints();
      printNameWinner();
    }
    toggleMoves();
    resetBoard();
  }
});

$bigBoardPiece5.addEventListener("click", () => {
  if ($bigBoardPiece5.textContent === "") {
    printPlay($bigBoardPiece5);
    verifyWinner();
    checkBoardFilled();
    addPlayHistory(currentMove, "Quinto quadrado");
    if (verifyWinner() === currentMove || currentMove === "Empate") {
      addMatchHistory();
      givePoints();
      printNameWinner();
    }
    toggleMoves();
    resetBoard();
  }
});

$bigBoardPiece6.addEventListener("click", () => {
  if ($bigBoardPiece6.textContent === "") {
    printPlay($bigBoardPiece6);
    verifyWinner();
    checkBoardFilled();
    addPlayHistory(currentMove, "Sexto quadrado");
    if (verifyWinner() === currentMove || currentMove === "Empate") {
      addMatchHistory();
      givePoints();
      printNameWinner();
    }
    toggleMoves();
    resetBoard();
  }
});

$bigBoardPiece7.addEventListener("click", () => {
  if ($bigBoardPiece7.textContent === "") {
    printPlay($bigBoardPiece7);
    verifyWinner();
    checkBoardFilled();
    addPlayHistory(currentMove, "Sétimo quadrado");
    if (verifyWinner() === currentMove || currentMove === "Empate") {
      addMatchHistory();
      givePoints();
      printNameWinner();
    }
    toggleMoves();
    resetBoard();
  }
});

$bigBoardPiece8.addEventListener("click", () => {
  if ($bigBoardPiece8.textContent === "") {
    printPlay($bigBoardPiece8);
    verifyWinner();
    checkBoardFilled();
    addPlayHistory(currentMove, "Oitavo quadrado");
    if (verifyWinner() === currentMove || currentMove === "Empate") {
      addMatchHistory();
      givePoints();
      printNameWinner();
    }
    toggleMoves();
    resetBoard();
  }
});

$bigBoardPiece9.addEventListener("click", () => {
  if ($bigBoardPiece9.textContent === "") {
    printPlay($bigBoardPiece9);
    verifyWinner();
    checkBoardFilled();
    addPlayHistory(currentMove, "Nono quadrado");
    if (verifyWinner() === currentMove || currentMove === "Empate") {
      addMatchHistory();
      givePoints();
      printNameWinner();
    }
    toggleMoves();
    resetBoard();
  }
});

$buttonPlay.addEventListener("click", () => {
  isPlaying = true;
  selectEnableButton(...listBigButons, $buttonRestart);
  selectDesableButton($buttonPlay, $playerName1, $playerName2);
  $playerWonPoints.textContent = "Aguardando jogadas...";
});

$buttonRestart.addEventListener("click", () => {
  isPlaying = false;
  selectEnableButton($buttonPlay, $playerName1, $playerName2);
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

const nameWinner = () => {
  let winner = "";
  if (currentMove === "X" && $playerName1.value) winner = $playerName1.value;
  if (currentMove === "O" && $playerName2.value) winner = $playerName2.value;
  if (currentMove === "X" && $playerName1.value === "") winner = currentMove;
  if (currentMove === "O" && $playerName2.value === "") winner = currentMove;
  if (currentMove === "Empate") winner = currentMove;
  return winner;
};

const printNameWinner = () => {
  $playerWonPoints.textContent = `Jogador ganhador: ${nameWinner()}`;

  setTimeout(() => {
    if (isPlaying) $playerWonPoints.textContent = "Aguardando jogadas...";
  }, 2000);
};

const givePoints = () => {
  if (currentMove === "X") {
    pointsPlayer1++;
    $pointsPlayer1txt.textContent = pointsPlayer1.toString().padStart(2, "0");
  }
  if (currentMove === "O") {
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
  $matchHistoryList.textContent = "";
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
  const $playHistory = document.createElement("div");
  $playHistory.classList.add("play-history");

  const $placePlay = document.createElement("div");
  $placePlay.classList.add("place-play");
  if (currentMove === "Empate") $placePlay.textContent = "X";
  if (currentMove !== "Empate") $placePlay.textContent = currentMove;

  const $history = document.createElement("div");
  $history.classList.add("history");

  const $playerMadeMove = document.createElement("span");
  $playerMadeMove.classList.add("player-made-move");
  $playerMadeMove.textContent = nameWinner();
  if (currentMove === "Empate" && $playerName1.value)
    $playerMadeMove.textContent = $playerName1.value;
  if (currentMove === "Empate" && $playerName1.value === "")
    $playerMadeMove.textContent = "X";

  const $move = document.createElement("span");
  $move.classList.add("move");
  $move.textContent = position;

  $playHistoryList.appendChild($playHistory);
  $playHistory.appendChild($placePlay);
  $playHistory.appendChild($history);
  $history.appendChild($playerMadeMove);
  $history.appendChild($move);
};

const saveMoves = () => {
  let moves = [];
  for (const boardItem of listBigButons) {
    const movesList = boardItem.textContent;
    moves.push(movesList);
  }
  return moves;
};

const addMatchHistory = () => {
  const $matchHistory = document.createElement("div");
  $matchHistory.classList.add("match-history");

  const $playerWinner = document.createElement("div");
  $playerWinner.classList.add("player-winner");

  const $winnerTxt = document.createElement("span");
  $winnerTxt.classList.add("winner-txt");
  $winnerTxt.textContent = "Vencedor";

  const $winnerName = document.createElement("span");
  $winnerName.classList.add("winner-name");
  $winnerName.textContent = nameWinner();

  const $sceneryTxt = document.createElement("span");
  $sceneryTxt.classList.add("scenery-txt");
  $sceneryTxt.textContent = "Cenário";

  const $smallBoard = document.createElement("div");
  $smallBoard.classList.add("small-board");

  $matchHistoryList.prepend($matchHistory);
  $matchHistory.appendChild($playerWinner);
  $matchHistory.appendChild($sceneryTxt);
  $matchHistory.appendChild($smallBoard);
  $playerWinner.appendChild($winnerTxt);
  $playerWinner.appendChild($winnerName);

  const listMoves = saveMoves();

  for (const item of listMoves) {
    const $boardPiece = document.createElement("div");
    $boardPiece.classList.add("board-piece");
    $boardPiece.textContent = item;
    $smallBoard.appendChild($boardPiece);
  }
};

selectDesableButton(...listBigButons, $buttonRestart);
