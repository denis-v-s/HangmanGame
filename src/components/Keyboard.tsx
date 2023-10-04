import styles from './Keyboard.module.css'

const keys = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

export const Keyboard = ({ disabled = false, activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps) => {
  return (
    <div className={styles.keyboardContainer}>
      {keys.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        const activeStyle = isActive ? styles.active : ""
        const inactiveStyle = isInactive ? styles.inactive : ""
        return (
          <button 
            key={key}
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${activeStyle} ${inactiveStyle}`}
            disabled={isInactive || isActive || disabled}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}
