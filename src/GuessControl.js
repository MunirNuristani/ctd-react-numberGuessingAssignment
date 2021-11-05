import { useState } from "react";
import Button from "./Button";

function GuessConrol ({onGuess}) {
  const [currentGuess, setCurrentGuess] = useState('')
  const handleInputChage = (e) => setCurrentGuess(e.target.value)
  
  const onSubmitGuess = () => {
    onGuess(currentGuess)
    setCurrentGuess('')
  }

  return(
    <div>
        <input
          type="number"
          value={currentGuess}
          onChange={handleInputChage}
        />
        <Button onClick={onSubmitGuess}>Submit Guess</Button>
      </div>
  )
}
export default GuessConrol;
