const CardsOnDeck = ({ deck, setDeck }) => {

  return (
    <div className="h-40 w-1/12 rounded-sm bg-slate-500 flex flex-column justify-center items-center absolute bottom-4 left-4">
      <div className="text-center"> 
        <p className="text-white">Deck</p>
        <p className="text-white">{deck?.length}</p>
      </div>
    </div>
  )
};

export default CardsOnDeck;