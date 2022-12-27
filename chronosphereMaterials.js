// To be pasted directly into the developer console while playing the game
// ----- Get Chronosphere Count
let buildingsArray = game.bldTab;
const chronosphereObject = buildingsArray.children.filter((child) => {
  return child.model.options.building === `chronosphere`;
});
const activeChronosphereCount = chronosphereObject[0].model.on;

// ----- Get Resources
const { resources } = game.resPool;
let chronoData = resources
  .filter((resource) => resource.value > 0)
  .map((resource) => {
    const chronosphere =
      resource.value * ((activeChronosphereCount * 1.5) / 100);
    const { name, value } = resource;
    return { name, value, chronosphere };
  });

// number formatting (adds commas, remove if unwanted)
const chronoDataFormatted = chronoData.map((resource) => {
  const { name, value, chronosphere } = resource;
  const valueReadable = value.toLocaleString(`en-US`);
  chronoValueReadable = chronosphere.toLocaleString();
  return {
    name,
    value: valueReadable,
    chronosphere: chronoValueReadable,
  };
});

console.table(chronoDataFormatted);
