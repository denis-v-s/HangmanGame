import styles from './HangmanDrawing.module.css'

const bodyParts = [
  <div className={styles.head} />,
  <div className={styles.body} />,
  <div className={styles.rightArm} />,
  <div className={styles.leftArm} />,
  <div className={styles.rightLeg} />,
  <div className={styles.leftLeg} />
]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

export const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className={styles.hangmanContainer}>
      {bodyParts.slice(0, numberOfGuesses)}

      <div className={styles.hangerRope} />
      <div className={styles.hangerTop} />
      <div className={styles.hangerRod} />
      <div className={styles.hangerBase} />
    </div>
  )  
}