# Assembly Endgame

**Assembly Endgame** is an interactive word-guessing game built using **React 19**. The objective of the game is to guess the correct word within 8 attempts. Each incorrect guess causes a language to "die" on the screen, representing your diminishing chances. Can you save the languages and win the game?

---

## Features

- **Dynamic UI**: Built with React 19 for a smooth and engaging experience.
- **Challenging Gameplay**: You have only 8 chances to guess the word correctly.
- **Visual Feedback**: Watch as languages "disappear" for every wrong key pressed.
- **Educational Twist**: Represents the value of languages and how they are at risk of "dying out."

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/assembly-endgame.git
   cd assembly-endgame
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm start
   ```

4. **Open the app**:  
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## How to Play

1. **Start the Game**:

   - A word will be selected randomly (hidden on the screen).

2. **Guess the Word**:

   - Click on key of keyboard. If it's correct, it will appear in the word's blank spaces. If it's incorrect, a language "dies" on the screen.

3. **Win or Lose**:
   - Guess the entire word before all 8 languages disappear to win. If all languages are gone, you lose.

---

## Technologies Used

- **React 19**: Frontend framework.
- **CSS Modules**: For styling components.
- **JavaScript**: Core game logic.

---

## Project Structure

```
assembly-endgame/
│
├── public/             # Public assets
├── src/
│   ├── components/
│   ├── data/
│   ├── App.js
│   └── index.js
│
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

---

## License

This project is licensed under the [MIT License](LICENSE).

---
