
export const specialFunctionsList = {
  life: (value, {life, setLife})=> {
    setLife(life + value);
  },
  card: (value, {setCards})=> {
    /**
     * TODO GetNewCards to player of your deck
     */
    // setCards(value)
  },
  fury: (value, {fury, setFury}) => {
    setFury(fury + value);
  }
};

export const removeSpecialCard = (card, cards) => {
  const cardsList = cards.filter((item) => card.id !== item.id);
  return cardsList;
}