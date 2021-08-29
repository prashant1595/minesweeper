export default function CreateBoard(row, cell, bombs) {
  let board = [];
  let mineLocation = [];

  for (let x = 0; x < row; x++) {
    let subCol = [];
    for (let y = 0; y < col; y++) {
        subCol.push({
            value:0,
            revealed: false,
            x:x,
            y:y,
            flagged:false
        });
    }
    board.push(subcol);
  }

  let bombCount=0;
  while(bombCount<bombs){
      let x = random(0, row-1);
      let y = random(0, col-1);

      if(board[x][y].value ===0){
          board[x][y]="X";
          mineLocation.push([x,y]);
          bombCount++;
      }
  }
}
