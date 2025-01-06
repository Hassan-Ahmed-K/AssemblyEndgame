import './App.css';
import { languages } from './data/languages';
import { useState } from 'react';
import { getFarewellText, getRandomWord } from "./Component/utils";
import Confetti from "react-confetti"

function App() {
  const [word, setWord] = useState({
    word: getRandomWord(),
    guessedLetters: [],
    wrongGuessed: [],
  });

  const wrongGuessedCount = word.wrongGuessed.length;
  const isGameWon = word.word
    .split("")
    .every((letter) => word.guessedLetters.includes(letter.toLowerCase()));
  const isGameLost = wrongGuessedCount > 8;
  const isGameFinished = isGameWon || isGameLost;

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function getWord() {
    setWord({
      word: getRandomWord(),
      guessedLetters: [],
      wrongGuessed: [],
    });
  }

  function handleLetterClick(guessedLetter) {
    if (word.word.toLowerCase().includes(guessedLetter)) {
      setWord((prev) => ({
        ...prev,
        guessedLetters: [...prev.guessedLetters, guessedLetter],
      }));
    } else {
      setWord((prev) => ({
        ...prev,
        wrongGuessed: [...prev.wrongGuessed, guessedLetter],
      }));
    }
  }

    function renderGameStatus() {
      if (!isGameFinished && wrongGuessedCount == 8) {
        return (
          <section className="game-status farewell">
            <p className="farewell-message">
              {getFarewellText(languages[wrongGuessedCount - 1].name)}
            </p>
          </section>
        );
      } else if (isGameWon) {
        return (
          <>
            <section className="game-status won">
              <h2>You win!</h2>
              <p>Well done! 🎉</p>
            </section>
          </>
        );
      } else if (isGameLost) {
        return (
          <>
            <section className="game-status lost">
              <h2>Game over!</h2>
              <p>You lose! Better start learning Assembly 😭</p>
            </section>
          </>
        );
      }
      return null;
    }


  return (
    <>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      <main>
        <section className="intro">
          <h1>Assembly: Endgame</h1>
          <p>
            Guess the word within 8 attempts to keep the programming world safe
            from Assembly!
          </p>
        </section>

        {renderGameStatus()}

        <section className={`languages ${isGameLost ? "game-over" : ""}`}>
          {languages.map((language, index) => (
            <div
              key={language.name}
              id={language.name}
              className={`language ${
                index < wrongGuessedCount ? "active" : ""
              }`}
              style={{
                backgroundColor: language.backgroundColor,
                color: language.color,
              }}
            >
              {language.name}
            </div>
          ))}
        </section>

        <section className="current-word">
          <p className="word">
            {word.word.split("").map((letter, index) => (
              <span
                key={index}
                id={letter}
                className={
                  word.guessedLetters.includes(letter.toLowerCase())
                    ? "visible"
                    : undefined
                }
              >
                {letter.toUpperCase()}
              </span>
            ))}
          </p>
        </section>

        <section className="keyboard">
          {alphabet.split("").map((letter) => (
            <button
              key={letter}
              id={letter}
              disabled={
                word.guessedLetters.includes(letter) ||
                word.wrongGuessed.includes(letter) ||
                isGameFinished
              }
              className={
                word.guessedLetters.includes(letter)
                  ? "correct"
                  : word.wrongGuessed.includes(letter)
                  ? "wrong"
                  : undefined
              }
              onClick={() => handleLetterClick(letter)}
            >
              {letter.toUpperCase()}
            </button>
          ))}
        </section>

        {(isGameWon || isGameLost) && (
          <section>
            <button className="new-game" onClick={getWord}>
              New Game
            </button>
          </section>
        )}
      </main>
    </>
  );
}

export default App;
