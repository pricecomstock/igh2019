const actions = [
  {
    id: 1,
    text: "Earthquake",
    disabled: false,
    clickHandler: () => alert("Attack")
  },
  {
    id: 2,
    text: "Hurricane Barrage",
    disabled: false,
    clickHandler: () => alert("Defend")
  },
  {
    id: 3,
    text: "Supervolcano",
    disabled: false,
    clickHandler: () => alert("Run")
  }
];

export default actions;
