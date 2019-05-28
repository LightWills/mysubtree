import React from 'react';
import Board from 'Board'

export default class Game extends React{

    render(){
        return(
            <div className="game">
                <div className="game-info">
                    <Board/>
                </div>

            </div>
        );
    }

}
