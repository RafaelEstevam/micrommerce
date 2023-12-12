export const plusLife = (player, value) => {
  player.life += value;
};

export const lessLife = (player, value) => {
  player.life -= value;
};

export const plusFury = (player, value) => {
  player.fury += value;
};

export const plusCard = (player, value) => {
  player.card += value;
};

export const mechanics = {
  plusLife: (target, value) => {
    target.setLife(target.life + value)
  },
  lessLife: (target, value) => {
    target.setLife(target.life - value)
  },
  plusFury: (target, value) => {
    target.setFury(target.fury + value)
  },
  plusCard: (target, value) => {
    target.setCard(target.card + value)
  },
  lessCard: (target, value) => {
    target.setCard(target.card - value)
  },
}
