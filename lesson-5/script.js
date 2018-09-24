var figures = {
    white: {
        king: '&#9812',
        queen: '&#9813',
        rook: '&#9814',
        elephant: '&#9815',
        horse: '&#9816',
        pawn: '&#9817'
    },
    black: {
        king: '&#9818',
        queen: '&#9819',
        rook: '&#9820',
        elephant: '&#9821',
        horse: '&#9822',
        pawn: '&#9823'
    }
}

var board = [
    [ false, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', false ],
    ['8', figures.black.rook, figures.black.horse, figures.black.elephant, figures.black.queen, figures.black.king, figures.black.elephant, figures.black.horse, figures.black.rook, '8'],
    ['7', figures.black.pawn, figures.black.pawn, figures.black.pawn, figures.black.pawn, figures.black.pawn, figures.black.pawn, figures.black.pawn, figures.black.pawn, '7'],
    ['6', '', '', '', '', '', '', '', '', '6'],
    ['5', '', '', '', '', '', '', '', '', '5'],
    ['4', '', '', '', '', '', '', '', '', '4'],
    ['3', '', '', '', '', '', '', '', '', '3'],
    ['2', figures.white.pawn, figures.white.pawn, figures.white.pawn, figures.white.pawn, figures.white.pawn, figures.white.pawn, figures.white.pawn, figures.white.pawn, '2'],
    ['1', figures.white.rook, figures.white.horse, figures.white.elephant, figures.white.queen, figures.white.king, figures.white.elephant, figures.white.horse, figures.white.rook, '1'],
    [ false, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', false ]
];

var table = document.createElement('table');
var tr, td, row, cell, color = 'white';

for ( var row, cell, i = 0; i < board.length; i++ ) {
    row = board[i];
    tr = document.createElement('tr');
    color = color == 'black' ? 'white' : 'black';

    for ( var j = 0; j < row.length; j++ ) {
        cell = row[j];
        td = document.createElement('td');

        if ( cell === '' || cell.length > 1) {
            td.classList.add(color);
            color = color == 'black' ? 'white' : 'black';
        }

        if ( cell ) {
            td.innerHTML = cell;
        }

        tr.appendChild(td);
    }

    table.appendChild(tr);
}

document.body.appendChild(table);

console.log(board);