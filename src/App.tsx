import { useCallback, useEffect, useState } from 'react'
import { HangmanDrawing } from './components/HangmanDrawing.tsx'
import { HangmanWord } from "./components/HangmanWord.tsx"
import { Keyboard } from './components/Keyboard.tsx'

const App = () => {
  const [wordToGuess, setWordToGuess] = useState("test")
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) {
        return
      }
      setGuessedLetters(currentLetters => [...currentLetters, letter])
    },
    [guessedLetters, isLoser, isWinner]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      // Restart the game on "Enter key press"
      if ((isLoser || isWinner) && key == "Enter") {
        setGuessedLetters([])
        setWordToGuess("test")
        return
      }

      // Ignore anything that isn't an a-z letter
      if (!key.match(/^[a-z]$/)) {
        return
      }
      
      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler)
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  return (
    <div style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
    }}>
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && "Winner! Refresh to try again"}
        {isLoser && "You Lost. Refresh to try again"}
      </div>

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch"}}>
        <Keyboard 
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters} 
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  )
}

export default App;