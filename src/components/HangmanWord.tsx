import styles from './HangmanWord.module.css'

type HangmanDrawingProps = {
  reveal?: boolean
  guessedLetters: string[]
  wordToGuess: string
}

export const HangmanWord = ({ reveal = false, guessedLetters, wordToGuess }: HangmanDrawingProps) => {
  return (
    <div className={styles.wordContainer}>
      {wordToGuess.split("").map((letter, i) => (
        <span className={styles.letter} key={i}>
          <span style={{ 
            visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
            color: !guessedLetters.includes(letter) && reveal ? "red" : "black" 
          }}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}