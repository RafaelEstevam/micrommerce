import { useState } from "react";

const DraugerReach = ({life, attack}) => {

  const [wasActivate, setWasActivate] = useState(false);

  return (
    <div className="h-full relative">
      <div className="flex w-full absolute bottom-0">
        <div>Life: {life}</div>
        <div>Attack: {attack}</div>
      </div>
    </div>
  )
};

export default DraugerReach;