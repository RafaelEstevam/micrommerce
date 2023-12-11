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

export const lastActionMechanism = (action, target) => {
  switch (action?.action) {
    case "plusLife":
      return target.setLife(target.life + action.value);
    case "lessLife":
      return target.setLife(target.life - action.value);
    case "plusFury":
      return target.setFury(target.fury + action.value);
    default:
      return "";
  }
};
