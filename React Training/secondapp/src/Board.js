import React from 'react';
import Square from 'Square'



export default  class Board extends React{

    renderSquare(i){
        return <Square value={i}/>
    }

    render(){
       const status = 'This game is fun !!!';

       return(
           <div>
                <div className="state"> {status} </div>
               <div className="board-row">
                   {this.renderSquare(0)}
                   {this.renderSquare(1)}
                   {this.renderSquare(2)}
               </div>
               <div className="board-row">
                   {this.renderSquare(0)}
                   {this.renderSquare(1)}
                   {this.renderSquare(2)}
               </div>
               <div className="board-row">
                   {this.renderSquare(0)}
                   {this.renderSquare(1)}
                   {this.renderSquare(2)}
               </div>
           </div>
       );

    }
}
