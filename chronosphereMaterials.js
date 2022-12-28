// NOTE: there is a different formula for crafted/uncrafted materials. This is a rough estimate that needs worked on.
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
  // Only show resources with any values
  .filter((resource) => resource.value > 0)
  // sort alphabetically
  .sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  })
  // Return object formatted for table
  .map((resource) => {
    // % of resources in chronospheres
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
