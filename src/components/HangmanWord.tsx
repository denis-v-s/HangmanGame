import styles from './HangmanWord.module.css'

type HangmanDrawingProps = {
  reveal?: boolean
  guessedLetters: string[]
  wordToGuess: string
}

export const HangmanWord = ({ reveal = false, guessedLetters, wordToGuess }: HangmanDrawingProps) => {
  const renderWord = () => {
    return wordToGuess.split("").map((letter, i) => renderLetter(letter, i))
  }

  const renderLetter = (letter: string, i: number) => {
    const isGuessed = guessedLetters.includes(letter);
    const shouldReveal = isGuessed || reveal;
    const textColor = isGuessed && reveal ? "red" : "black"

    return (
      <span className={styles.letter} key={i}>
        <span style={{
          visibility: shouldReveal ? "visible" : "hidden",
          color: textColor
        }}>
          {letter}
        </span>
      </span>
    )
  }

  return (
    <div className={styles.wordContainer}>
      {renderWord()}
    </div>
  )
}