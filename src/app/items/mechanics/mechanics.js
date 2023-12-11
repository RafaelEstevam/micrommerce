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

export const lastActionMechanism = (action, player) => {
  switch (action.action) {
    case "plusLife":
      return player.setLife(player.life + action.value);
    case "lessLife":
      return player.setLife(player.life - action.value);
    case "plusFury":
      return player.setFury(player.fury + action.value);
    default:
      return "";
  }
};
