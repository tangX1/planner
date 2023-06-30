import React, { useState } from 'react';

const SudokuWidget = () => {
    const [board, setBoard] = useState([
        [5, 3, null, null, 7, null, null, null, null],
        [6, null, null, 1, 9, 5, null, null, null],
        [null, 9, 8, null, null, null, null, 6, null],
        [8, null, null, null, 6, null, null, null, 3],
        [4, null, null, 8, null, 3, null, null, 1],
        [7, null, null, null, 2, null, null, null, 6],
        [null, 6, null, null, null, null, 2, 8, null],
        [null, null, null, 4, 1, 9, null, null, 5],
        [null, null, null, null, 8, null, null, 7, 9],
    ]);

    const handleCellValueChange = (row, col, value) => {
        const updatedBoard = [...board];
        updatedBoard[row][col] = value;
        setBoard(updatedBoard);
    };
    return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "row" , width: "400", height: "200"}}>
            <h2>Sudoku</h2>
            <table>
                <tbody>
                    {board.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td key={colIndex}>
                                    <input
                                        type="number"
                                        min="1"
                                        max="9"
                                        value={cell || ''}
                                        onChange={(e) =>
                                            handleCellValueChange(rowIndex, colIndex, e.target.value !== '' ? Number(e.target.value) : null)
                                        }
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    );
};

export default SudokuWidget;
