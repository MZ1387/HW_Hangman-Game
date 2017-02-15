# HW - {Hangman-Game}
In this assignment, I created a Hangman style game with a Solar System theme that dynamically updates HTML elements through JavaScript based on user input.


## Live Link (GitHub Pages)
- https://mz1387.github.io/HW_Hangman-Game/


## Requirements

1. Choose a theme for your game!
2. Use key events to listen for the letters that your players will type.
3. Display the following on the page:
- Press any key to get started!
- Wins: (# of times user guessed the word correctly).
- If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
- As the user guesses the correct letters, reveal them: m a d o _  _ a.
4. Number of Guesses Remaining: (# of guesses remaining for the user).
5. Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
6. After the user wins/loses the game should automatically choose another word and make the user play it.

## Concepts Implemented

- Dynamically updated HTML powered by JavaScript code
- Manipulated HTML elements based on user input


## Code Explanation
- User "launches" the game and is prompted to complete each mission by trying to guess the missing word
- If the user completes a predefined number of "missions" then the user wins
- If the user "runs out of fuel" by guessing to many letters wrong the game is over.
- The goal is to complete all of your "missions" without running out of "fuel"
