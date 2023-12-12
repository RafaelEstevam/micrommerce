import Card from "./card.component";

const CardsOnHand = ({ cards, setCards }) => {
  return (
    <div className="flex justify-center absolute bottom-0 w-full">
      <div className="w-1/2">
        <div className="flex gap-4 pb-4">
          {cards.length > 0 &&
            cards?.map((item) => (
              <Card card={item} key={item.id} />
            ))}
          <button
            className="p-4 rounded-2xl text-white mb-4 bg-orange-500"
            // onClick={() => handleFinalizeMove({ attackType, sum, plusActions })}
          >
            Finalizar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardsOnHand;
