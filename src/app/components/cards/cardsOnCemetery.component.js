import { useContext, useEffect } from "react";
import { PlayerContext } from "../player/player.context";

const CardsOnCemetery = () => {

  const { cemetery } = useContext(PlayerContext);

  useEffect(() => {
    //TODO SHOW CEMETERY
    console.log(cemetery)
  }, [cemetery]);

  return (
    <div className="h-40 w-1/12 rounded-sm bg-slate-500 flex flex-column justify-center items-center absolute bottom-4 right-4">
      <div className="text-center"> 
        <p className="text-white">Cemetery</p>
        <p className="text-white">{cemetery?.length}</p>
      </div>
    </div>
  )
};

export default CardsOnCemetery;