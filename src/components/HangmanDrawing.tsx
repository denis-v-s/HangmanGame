const head = (
  <div style={{
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    border: "10px solid black",
    position: "absolute",
    top: "50px",
    right: "-30px"
  }} />
)

const body = (
  <div style={{
    width: "10px",
    height: "100px",
    background: "black",
    position: "absolute",
    top: "120px",
    right: 0
  }} />
)

const rightArm = (
  <div style={{
    width: "100px",
    height: "10px",
    background: "black",
    position: "absolute",
    top: "150px",
    right: "-100px",
    rotate: "-30deg",
    transformOrigin: "left bottom",
  }} />
)

const leftArm = (
  <div style={{
    width: "100px",
    height: "10px",
    background: "black",
    position: "absolute",
    top: "150px",
    right: "10px",
    rotate: "30deg",
    transformOrigin: "right bottom",
  }} />
)

const rightLeg = (
  <div style={{
    width: "100px",
    height: "10px",
    background: "black",
    position: "absolute",
    top: "210px",
    right: "-90px",
    rotate: "60deg",
    transformOrigin: "left bottom",
  }} />
)

const leftLeg = (
  <div style={{
    width: "100px",
    height: "10px",
    background: "black",
    position: "absolute",
    top: "210px",
    right: 0,
    rotate: "-60deg",
    transformOrigin: "right bottom",
  }} />
)

const bodyParts = [head, body, rightArm, leftArm, rightLeg, leftLeg]
type HangmanDrawingProps = {
  numberOfGuesses: number
}

export const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  console.log(numberOfGuesses)
  return (
    <div style={{ position: "relative" }}>
      {bodyParts.slice(0, numberOfGuesses)}

      <div style={{ 
        height: "50px", 
        width: "10px", 
        position: "absolute", 
        background: "black", 
        top: 0, 
        right: 0 
      }} />
      <div style={{ 
        height: "10px", 
        width: "200px", 
        marginLeft: "120px", 
        background: "black" 
      }} />
      <div style={{ 
        height: "400px", 
        width: "10px", 
        marginLeft: "120px", 
        background: "black" 
      }} />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  )  
}