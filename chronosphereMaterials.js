// To be pasted directly into the developer console while playing the game
// ----- Get Chronosphere Count
let chronosphereCount = game.bldTab;
const chronoBuilding = chronosphereCount.children.filter((child) => {
  return child.model.options.building === `chronosphere`;
});
const chronoCount = chronoBuilding[0].model.on;

// ----- Get Resources
const { resources } = game.resPool;
let chronoData = resources
  .filter((resource) => resource.value > 0)
  .map((resource) => {
    const chronosphere = resource.value * ((chronoCount * 1.5) / 100);
    const { name, value } = resource;
    return { name, value, chronosphere };
  });

console.table(chronoData);
