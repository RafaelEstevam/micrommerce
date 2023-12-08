import { useState } from "react"

const useGame = () => {
  const [action, setAction] = useState()
  
  return {
    action, setAction
  }
};

export default useGame;