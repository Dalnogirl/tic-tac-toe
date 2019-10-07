class TicTacToe {
    constructor() {
        this.field = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ],
            this.playerSymbol = 'x',
            this.winner = ''
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex].length === 0) {
            this.field[rowIndex][columnIndex] = this.playerSymbol;
            this.change();
            return true;
        } else {
            return false;
        }
    }

    isFinished() {
        //проверка на ряды
        for (let i = 0; i < this.field.length; i++) {
            if (this.field[i].filter((item) => item === 'x').length === 3 | this.field[i].filter((item) => item === 'o').length === 3) {
                this.winner = this.field[i][0];
                return true;
            }
        }
        //проверка на колонки (переворачиваю игровое поле)
        for (let i = 0; i < 3; i++) {
            if (this.field[0][i] === this.field[1][i] && this.field[0][i] === this.field[2][i] && (this.field[0][i] === 'o' | this.field[0][i] === 'x')) {
                this.winner = this.field[0][i];
                return true;
            }
        }
        //проверка на диагонали слева-направо
        if (this.field[0][0] !== '' && this.field[0][0] === this.field[1][1] && this.field[0][0] === this.field[2][2]) {
            this.winner = this.field[0][0];
            return true;
        }

        //проверка на диагонали справа-налево
        if (this.field[0][2] !== '' && this.field[0][2] === this.field[1][1] && this.field[0][2] === this.field[2][0]) {
            this.winner = this.field[1][1];
            return true;
        }

        if (this.noMoreTurns()) {
            return true;
        }
        return false;
    }

    getWinner() {
        this.isFinished();
        if (this.winner === '') {
            return null;
        } else {
            return this.winner;
        };
    }

    noMoreTurns() {
        for (let i = 0; i < this.field.length; i++) {
            for (let k = 0; k < this.field.length; k++) {
                if (this.field[i][k] === '') {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        this.isFinished();
        if (this.winner === '' && this.noMoreTurns()) {
            return true;
        } else {
            return false;
        }

    }

    getFieldValue(rowIndex, colIndex) {
        if (this.field[rowIndex][colIndex] === '') {
            return null
        } else return this.field[rowIndex][colIndex];
    }

    change() {
        if (this.playerSymbol === 'x') {
            this.playerSymbol = 'o';
        } else {
            this.playerSymbol = 'x';
        }
    }
}



module.exports = TicTacToe;
