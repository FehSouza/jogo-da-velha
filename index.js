const $switchBallBot = document.querySelector(".switch-ball1");
const $switchBall2 = document.querySelector(".switch-ball2");
const $switchBot = document.querySelector(".switch1");
const $switch2 = document.querySelector(".switch2");
const $bigBoardPiece = document.querySelectorAll(".big-board-piece");
const $playerWonPoints = document.querySelector(".player-won-points");
const $pointsPlayer1txt = document.querySelector(".points-jogador1");
const $pointsPlayer2txt = document.querySelector(".points-jogador2");
const $playerName1 = document.querySelector(".player-name1");
const $playerName2 = document.querySelector(".player-name2");
const $playHistoryList = document.querySelector(".play-history-list");
const $matchHistoryList = document.querySelector(".match-history-list");
const $buttonPlay = document.querySelector(".button-play");
const $buttonRestart = document.querySelector(".button-restart");
const $overallWinner = document.querySelector(".overallWinner");

let currentMove = "X";
let pointsPlayer1 = 0;
let pointsPlayer2 = 0;
let isPlaying = false;
let bot = false;
let listMoves = [];
let quantityOfMatch = 0;
let md = true;

const buttonList = $bigBoardPiece;

const listHorizontal1 = [buttonList[0], buttonList[1], buttonList[2]];
const listHorizontal2 = [buttonList[3], buttonList[4], buttonList[5]];
const listHorizontal3 = [buttonList[6], buttonList[7], buttonList[8]];
const listVertical1 = [buttonList[0], buttonList[3], buttonList[6]];
const listVertical2 = [buttonList[1], buttonList[4], buttonList[7]];
const listVertical3 = [buttonList[2], buttonList[5], buttonList[8]];
const listDiagonal1 = [buttonList[0], buttonList[4], buttonList[8]];
const listDiagonal2 = [buttonList[2], buttonList[4], buttonList[6]];

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

$switchBot.addEventListener("click", () => {
  $switchBallBot.classList.toggle("switch-active1");
  bot = !bot;
});

$switch2.addEventListener("click", () => {
  $switchBall2.classList.toggle("switch-active2");
  md = !md;
});

const makePlay = (place, position) => {
  if (place.textContent === "") {
    printPlay(place);
    verifyWinner();
    checkBoardFilled();
    addPlayHistory(currentMove, `${clickPosition(position)} quadrado`);
    if (verifyWinner() === currentMove) quantityOfMatch++;
    if (verifyWinner() === currentMove || currentMove === "Empate") {
      addMatchHistory();
      givePoints();
      printNameWinner();
    }
    toggleMoves();
    resetBoard();
  }
};

for (let index = 0; index < buttonList.length; index++) {
  const $boardButtons = buttonList[index];
  $boardButtons.addEventListener("click", () => {
    makePlay($boardButtons, index);
    if (bot) botPlay();
  });
}

const indexBot = () => {
  const indexBotMove = Math.floor(Math.random() * 9);
  return indexBotMove;
};

const botPlay = () => {
  let positionBotMove;
  let indexBotPlay = indexBot();

  while (
    positionBotMove === undefined &&
    !checkIsFull() &&
    verifyWinner() !== currentMove
  ) {
    const isEmpty = !buttonList[indexBotPlay].textContent;
    if (isEmpty) positionBotMove = buttonList[indexBotPlay];
    if (!isEmpty) indexBotPlay = indexBot();
  }

  if (positionBotMove) makePlay(positionBotMove, indexBotPlay);
};

$buttonPlay.addEventListener("click", () => {
  isPlaying = true;
  selectEnableButton(...buttonList, $buttonRestart);
  selectDesableButton($buttonPlay, $playerName1, $playerName2);
  $playerWonPoints.textContent = "Aguardando jogadas...";
});

$buttonRestart.addEventListener("click", () => {
  isPlaying = false;
  selectEnableButton($buttonPlay, $playerName1, $playerName2);
  selectDesableButton(...buttonList, $buttonRestart);
  $playerWonPoints.textContent = "Aguardando iniciar...";
  reset();
});

const clickPosition = (position) => {
  const listPositions = [
    "Primeiro",
    "Segundo",
    "Terceiro",
    "Quarto",
    "Quinto",
    "Sexto",
    "Sétimo",
    "Oitavo",
    "Nono",
  ];
  return listPositions[position];
};

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
    selectDesableButton(...buttonList);

    setTimeout(() => {
      item.classList.remove("won");
      if (isPlaying) selectEnableButton(...buttonList);
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

const checkIsFull = () => {
  if (
    buttonList[0].textContent &&
    buttonList[1].textContent &&
    buttonList[2].textContent &&
    buttonList[3].textContent &&
    buttonList[4].textContent &&
    buttonList[5].textContent &&
    buttonList[6].textContent &&
    buttonList[7].textContent &&
    buttonList[8].textContent
  )
    return true;
  return false;
};

const checkBoardFilled = () => {
  if (checkIsFull() && verifyWinner() !== currentMove) {
    currentMove = "Empate";
    selectDesableButton(...buttonList);

    setTimeout(() => {
      if (isPlaying) selectEnableButton(...buttonList);
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

const positionOfPlayHistory = () => {
  let index = -1;
  for (const item of buttonList) {
    if (item.textContent) index++;
  }
  return index;
};

const saveMoves = () => {
  listMoves.push(getMoves());
  return listMoves;
};

const printPlayHistory = (scenery) => {
  for (let index = 0; index < scenery.length; index++) {
    buttonList[index].textContent = scenery[index];
  }
};

const addPlayHistory = (currentMove, position) => {
  const indexPlayHistory = positionOfPlayHistory();
  const movesPlayHistory = saveMoves();

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

  $playHistory.addEventListener("click", () => {
    printPlayHistory(movesPlayHistory[indexPlayHistory]);
  });
};

const getMoves = () => {
  let moves = [];
  for (const boardItem of buttonList) {
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

  const listMoves = getMoves();

  for (const item of listMoves) {
    const $boardPiece = document.createElement("div");
    $boardPiece.classList.add("board-piece");
    $boardPiece.textContent = item;
    $smallBoard.appendChild($boardPiece);
  }
};

selectDesableButton(...buttonList, $buttonRestart);
