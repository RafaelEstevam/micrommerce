const Card = ({ card }) => {
  const style = () => {
    switch (card.type) {
      case "defense":
        return "bg-blue-500";
      case "attack_melee":
        return "bg-red-500";
      case "attack_reach":
        return "bg-yellow-500";
      case "special":
        return "bg-purple-500";
      default:
        return "bg-slate-500";
    }
  };

  return (
    <div className="flex h-20">
      <button
        className={`${style()} text-white flex flex-col items-center h-full rounded-md overflow-hidden`}
      >
        <p className="p-2">{card.type}</p>
        {card.value > 0 && (
          <div className="bg-slate-500 p-2 w-full h-full">{card.value}</div>
        )}
      </button>
    </div>
  );
};

export default Card;
