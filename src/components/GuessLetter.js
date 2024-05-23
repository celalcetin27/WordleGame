import { useState } from 'react';
import './GuessLetter.css'
import "bootstrap/dist/css/bootstrap.min.css";
function GuessLetter(props) {

    const words = [
        "RADYO",
        // "SEHPA",
        // "DOLAP",
        // "KALEM",
        // "KAVUN",
        // "KÖPEK",
        // "MERAK",
        // "GAZAP",
        // "ROMAN",
        // "CEVİZ",
      ];

    return(
       <>
       
       {props.sendRandom}
       {props.position}
       <div  className="word-board text-dark bg-dark">
        <div className="board-row" id='00'>{props.guessWord[0]}</div>
        <div className="board-row" id='01'></div>
        <div className="board-row" id='02'></div>
        <div className="board-row" id='03'></div>
        <div className="board-row" id='04'></div>
       </div>
       <div  className="word-board text-dark bg-dark">
        <div className="board-row"  id='10'></div>
        <div className="board-row"  id='11'></div>
        <div className="board-row"  id='12'></div>
        <div className="board-row"  id='13'></div>
        <div className="board-row"  id='14'></div>
       </div>
       <div  className="word-board text-dark bg-dark">
        <div className="board-row"  id='20'></div>
        <div className="board-row"  id='21'></div>
        <div className="board-row"  id='22'></div>
        <div className="board-row"  id='23'></div>
        <div className="board-row"  id='24'></div>
       </div>
       <div  className="word-board text-dark bg-dark">
        <div className="board-row"  id='30'></div>
        <div className="board-row"  id='31'></div>
        <div className="board-row"  id='32'></div>
        <div className="board-row"  id='33'></div>
        <div className="board-row"  id='34'></div>
       </div>
       <div  className="word-board text-dark bg-dark">
        <div className="board-row"  id='40'></div>
        <div className="board-row"  id='41'></div>
        <div className="board-row"  id='42'></div>
        <div className="board-row"  id='43'></div>
        <div className="board-row"  id='44'></div>
       </div>


       <div className='keyboard bg-dark'>
        <button className='key' id='E'>E</button>
        <button className='key' id='R'>R</button>
        <button className='key' id='T'>T</button>
        <button className='key' id='Y'>Y</button>
        <button className='key' id='U'>U</button>
        <button className='key' id='I'>I</button>
        <button className='key' id='O'>O</button>
        <button className='key' id='P'>P</button>
        <button className='key' id='Ğ'>Ğ</button>
        <button className='key' id='Ü'>Ü</button>
       </div>
       <div className='keyboard bg-dark'>
        <button className='key' id='A'>A</button>
        <button className='key' id='S'>S</button>
        <button className='key' id='D'>D</button>
        <button className='key' id='F'>F</button>
        <button className='key' id='G'>G</button>
        <button className='key' id='H'>H</button>
        <button className='key' id='J'>J</button>
        <button className='key' id='K'>K</button>
        <button className='key' id='L'>L</button>
        <button className='key' id='Ş'>Ş</button>
        <button className='key' id='İ'>İ</button>
       </div>
       <div className='keyboard bg-dark'>

        <button className='key' id='Z'>Z</button>
        <button className='key' id='C'>C</button>
        <button className='key' id='V'>V</button>
        <button className='key' id='B'>B</button>
        <button className='key' id='N'>N</button>
        <button className='key' id='M'>M</button>
        <button className='key' id='Ö'>Ö</button>
        <button className='key'id='Ç'>Ç</button>
        
        
       </div>

       </>
    )
}
export default GuessLetter;