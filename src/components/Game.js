import { useState, useEffect, useCallback } from "react";
import Box from "./Box";
import "./Game.css";
import Key from "./Key";
import "bootstrap/dist/css/bootstrap.min.css";

function Game() {
   const words = ["RADYO","SEHPA","DOLAP","KALEM","KAVUN","KÖPEK","MERAK","GAZAP","ROMAN","CEVİZ",];
  

  const [word, setWord] = useState("");
  const [count, setCount] = useState(0);
  const [enterValue, setEnterValue] = useState(["", "", "", "", "", "", ""]);
  const [randomWord, setRandomWord] = useState("");
  const [win, SetWin] = useState(true);
  // const [controlKey,setControlKey]= useState([["","","","",""],
  //   ["","","","",""],
  //   ["","","","",""],
  //   ["","","","",""],
  //   ["","","","",""],
  //   ["","","","",""]]) ;
  const [controlKey, setControlKey] = useState([]);
  const [controlFalse,setControlFalse] = useState([]);
  const [controlTrue,setControlTrue] = useState([]);

  const addControl = (item) => {
    setControlKey((controlKey) => [...controlKey, item]);
  };

  const addTrue = (item) => {
    setControlFalse((controlFalse) => [...controlFalse,item]);
  }
  const addFalse = (item) => {
    setControlTrue((controlTrue) => [...controlTrue,item]);
  }

  

  const checkKey = (key) => {
    var cnt =0;
    var templeRandom = randomWord.toUpperCase().split("");
    var templeValue = enterValue[cnt].toUpperCase().split("");
    
    var result = templeValue.map((index) => {
      if(templeRandom.includes(key) && templeValue.includes(key)){
        return "true";
        
      }
      else {
        return "false";
      }

    })
    
    
    // var result = letters.map((harf, index) => {
    //   if (resultLetterRandom.includes(harf)) {
    //     if (resultLetterRandom[index] === harf) {
    //       return "true";
    //     } else {
    //       return "half-true";
    //     }
    //   } else {
    //     return "false";
    //   }
    // });
    // return result;
cnt+=1;
  };

 


  

  const tutKelime = (index, value) => {
    const newArray = [...enterValue];
    newArray[index] = value;
    setEnterValue(newArray);
    setCount((index = index + 1));
  };
  useEffect(() => {
    getRandomWord();
  }, []);

  function getRandomWord() {
    var randomIndex = Math.floor(Math.random() * words.length);
    var randomWord = words[randomIndex].toUpperCase();
    setRandomWord(randomWord);
  }

  function CheckWord(letters, randomWord) {
    var resultLetterRandom = randomWord.split("");
    var result = letters.map((harf, index) => {
      if (resultLetterRandom.includes(harf)) {
        if (resultLetterRandom[index] === harf) {
          return "true";
        } else {
          return "half-true";
        }
      } else {
        return "false";
      }
    });
    return result;
  }


  function CheckGameLose() {
    if (word.toUpperCase() === randomWord) {
      return <p>Tebrikler kazandınız !!!</p>;
    } else if (win === false) {
      return <p>Maalesef Tekrar Deneyiniz !! Doğru kelime {randomWord}</p>;
    }
  }

  // const handleUpdate = (index,item) => {
  //   controlKey(prevControlKey => {
  //     const newControlKey = [...prevControlKey];
  //     newControlKey[count] = item;
  //     return newControlKey;
  //   })
  // }

  const getGuess = () => {
    if (word.length !== 5) {
      alert("5 harfli kelime giriniz");
    } else if (count < 6 && word.length === 5) {
      tutKelime(count, word.toUpperCase());
      // controlKey[count]=word.toUpperCase().split("");
      addControl(word.toUpperCase().split(""));
      console.log(word);
      setWord("");

      // setCount((count) => count + 1);
      if (randomWord === word.toUpperCase()) {
        
        // alert("Tebrikler");
      } else if (randomWord !== word.toUpperCase && count === 5) {
        SetWin(false);
        alert(
          
          "Kaybettiniz tekrar denemek için sayfayı yeniden başlatınız!!! Doğru kelime  " +
            { randomWord }
        );
      }
    }
  };

  function handleClick(i, v, c) {
    return <Box rowKeyNo={i} rowKey={v} nameClass={c} />;
  }
  function handleKey(i, j, k) {
    return <Key keyClassName={i} keyIdName={j} keyValue={k}></Key>;
  }

  return (
    <>
      {
        <div  id="guessEnter" className="text-center  bg-dark text-white">
          <form></form>
          <label className=" mx-2">
            Enter your guess:
            <input
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  getGuess();
                }
              }}
            />
          </label>

          <button className="btn btn-secondary " onClick={getGuess}>
            Check
          </button>
          <hr></hr>

          <div  id="letter" className="word-board text-light bg-dark">
            {handleClick(
              11,
              enterValue[0][0],
              CheckWord(enterValue[0].toUpperCase().split(""), randomWord)[0]
            )}
            {handleClick(
              12,
              enterValue[0][1],
              CheckWord(enterValue[0].toUpperCase().split(""), randomWord)[1]
            )}
            {handleClick(
              13,
              enterValue[0][2],
              CheckWord(enterValue[0].toUpperCase().split(""), randomWord)[2]
            )}
            {handleClick(
              14,
              enterValue[0][3],
              CheckWord(enterValue[0].toUpperCase().split(""), randomWord)[3]
            )}
            {handleClick(
              15,
              enterValue[0][4],
              CheckWord(enterValue[0].toUpperCase().split(""), randomWord)[4]
            )}
          </div>

          <div className="word-board text-light bg-dark">
            {handleClick(
              11,
              enterValue[1][0],
              CheckWord(enterValue[1].toUpperCase().split(""), randomWord)[0]
            )}
            {handleClick(
              12,
              enterValue[1][1],
              CheckWord(enterValue[1].toUpperCase().split(""), randomWord)[1]
            )}
            {handleClick(
              13,
              enterValue[1][2],
              CheckWord(enterValue[1].toUpperCase().split(""), randomWord)[2]
            )}
            {handleClick(
              14,
              enterValue[1][3],
              CheckWord(enterValue[1].toUpperCase().split(""), randomWord)[3]
            )}
            {handleClick(
              15,
              enterValue[1][4],
              CheckWord(enterValue[1].toUpperCase().split(""), randomWord)[4]
            )}
          </div>
          <div className="word-board text-light bg-dark">
            {handleClick(
              11,
              enterValue[2][0],
              CheckWord(enterValue[2].toUpperCase().split(""), randomWord)[0]
            )}
            {handleClick(
              12,
              enterValue[2][1],
              CheckWord(enterValue[2].toUpperCase().split(""), randomWord)[1]
            )}
            {handleClick(
              13,
              enterValue[2][2],
              CheckWord(enterValue[2].toUpperCase().split(""), randomWord)[2]
            )}
            {handleClick(
              14,
              enterValue[2][3],
              CheckWord(enterValue[2].toUpperCase().split(""), randomWord)[3]
            )}
            {handleClick(
              15,
              enterValue[2][4],
              CheckWord(enterValue[2].toUpperCase().split(""), randomWord)[4]
            )}
          </div>
          <div className="word-board text-light bg-dark">
            {handleClick(
              11,
              enterValue[3][0],
              CheckWord(enterValue[3].toUpperCase().split(""), randomWord)[0]
            )}
            {handleClick(
              12,
              enterValue[3][1],
              CheckWord(enterValue[3].toUpperCase().split(""), randomWord)[1]
            )}
            {handleClick(
              13,
              enterValue[3][2],
              CheckWord(enterValue[3].toUpperCase().split(""), randomWord)[2]
            )}
            {handleClick(
              14,
              enterValue[3][3],
              CheckWord(enterValue[3].toUpperCase().split(""), randomWord)[3]
            )}
            {handleClick(
              15,
              enterValue[3][4],
              CheckWord(enterValue[3].toUpperCase().split(""), randomWord)[4]
            )}
          </div>
          <div className="word-board text-light bg-dark">
            {handleClick(
              11,
              enterValue[4][0],
              CheckWord(enterValue[4].toUpperCase().split(""), randomWord)[0]
            )}
            {handleClick(
              12,
              enterValue[4][1],
              CheckWord(enterValue[4].toUpperCase().split(""), randomWord)[1]
            )}
            {handleClick(
              13,
              enterValue[4][2],
              CheckWord(enterValue[4].toUpperCase().split(""), randomWord)[2]
            )}
            {handleClick(
              14,
              enterValue[4][3],
              CheckWord(enterValue[4].toUpperCase().split(""), randomWord)[3]
            )}
            {handleClick(
              15,
              enterValue[4][4],
              CheckWord(enterValue[4].toUpperCase().split(""), randomWord)[4]
            )}
          </div>
          <div className="word-board text-light bg-dark mb-3">
            {handleClick(
              11,
              enterValue[5][0],
              CheckWord(enterValue[5].toUpperCase().split(""), randomWord)[0]
            )}
            {handleClick(
              12,
              enterValue[5][1],
              CheckWord(enterValue[5].toUpperCase().split(""), randomWord)[1]
            )}
            {handleClick(
              13,
              enterValue[5][2],
              CheckWord(enterValue[5].toUpperCase().split(""), randomWord)[2]
            )}
            {handleClick(
              14,
              enterValue[5][3],
              CheckWord(enterValue[5].toUpperCase().split(""), randomWord)[3]
            )}
            {handleClick(
              15,
              enterValue[5][4],
              CheckWord(enterValue[5].toUpperCase().split(""), randomWord)[4]
            )}
          </div>
          <div className="text-center bg-dark text-light d-flex justify-content-center ">
            {CheckGameLose()}
          </div>
          <div id="key" className="text-light">
            <div className="keyboard bg-dark">
              {handleKey(checkKey("E", randomWord, word), "E", "E")}
              {handleKey(checkKey("R", randomWord, word), "R", "R")}
              {handleKey(checkKey("T", randomWord, word), "T", "T")}
              {handleKey(checkKey("Y", randomWord, word), "Y", "Y")}
              {handleKey(checkKey("U", randomWord, word), "U", "U")}
              {handleKey(checkKey("I", randomWord, word), "I", "I")}
              {handleKey(checkKey("O", randomWord, word), "O", "O")}
              {handleKey(checkKey("P", randomWord, word), "P", "P")}
              {handleKey(checkKey("Ğ", randomWord, word), "Ğ", "Ğ")}
              {handleKey(checkKey("Ü", randomWord, word), "Ü", "Ü")}
            </div>
            <div className="keyboard bg-dark">
              {handleKey(checkKey("A", randomWord, word), "A", "A")}
              {handleKey(checkKey("S", randomWord, word), "S", "S")}
              {handleKey(checkKey("D", randomWord, word), "D", "D")}
              {handleKey(checkKey("F", randomWord, word), "F", "F")}
              {handleKey(checkKey("G", randomWord, word), "G", "G")}
              {handleKey(checkKey("H", randomWord, word), "H", "H")}
              {handleKey(checkKey("J", randomWord, word), "J", "J")}
              {handleKey(checkKey("K", randomWord, word), "K", "K")}
              {handleKey(checkKey("L", randomWord, word), "L", "L")}
              {handleKey(checkKey("Ş", randomWord, word), "Ş", "Ş")}
              {handleKey(checkKey("İ", randomWord, word), "İ", "İ")}
            </div>
            <div className="keyboard bg-dark">
              {handleKey(checkKey("Z", randomWord, word), "Z", "Z")}
              {handleKey(checkKey("C", randomWord, word), "C", "C")}
              {handleKey(checkKey("V", randomWord, word), "V", "V")}
              {handleKey(checkKey("B", randomWord, word), "B", "B")}
              {handleKey(checkKey("N", randomWord, word), "N", "N")}
              {handleKey(checkKey("M", randomWord, word), "M", "M")}
              {handleKey(checkKey("Ö", randomWord, word), "Ö", "Ö")}
              {handleKey(checkKey("Ç", randomWord, word), "Ç", "Ç")}
            </div>
          </div>
        </div>
      }
    </>
  );
}
export default Game;
