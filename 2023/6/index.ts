const input = `Time:        62     64     91     90
Distance:   553   1010   1473   1074`;

const testInput = `Time:      7  15   30
Distance:  9  40  200`;

const computeDistance =
  (totalAvailableTime: number) => (timeHoldingButton: number) => {
    const speed = timeHoldingButton;

    const availableTimeToMove = totalAvailableTime - timeHoldingButton;

    const distanceCovered = availableTimeToMove * speed;

    return distanceCovered;
  };

const [timesInput, distancesInput] = testInput.split("\n");

const times = timesInput
  .split(":")[1]
  .split(" ")
  .filter((s) => s)
  .map((s) => parseInt(s));

const distances = distancesInput
  .split(":")[1]
  .split(" ")
  .filter((s) => s)
  .map((s) => parseInt(s));

const races = new Array(times.length).fill(0).map((_, i) => ({
  time: times[i],
  recordDistance: distances[i],
}));

//console.log(times, distances, races);

const allPossibleScoresByRace = races.map((race) => {
  const possibleScores: {
    pressingTime: number;
    distanceCovered: number;
  }[] = [];

  for (
    let possibleButtonPressingTime = 0;
    possibleButtonPressingTime < race.time;
    possibleButtonPressingTime++
  ) {
    possibleScores.push({
      pressingTime: possibleButtonPressingTime,
      distanceCovered: computeDistance(race.time)(possibleButtonPressingTime),
    });
  }

  return { race, possibleScores };
});

const widnessOfRangeOfPossibilities = allPossibleScoresByRace.map(
  ({ possibleScores, race }) => {
    const possibilitiesBeatingPreviousScore = possibleScores.filter(
      (possibleScore) => possibleScore.distanceCovered > race.recordDistance
    );

    return possibilitiesBeatingPreviousScore.length;
  }
);

const resultPart1 = widnessOfRangeOfPossibilities.reduce(
  (acc, value) => acc * value,
  1
);

//part II

const distanceRecord = 553101014731074;

const availableTime = 62649190;

// const computeDistance =
//   (totalAvailableTime: number) => (timeHoldingButton: number) => {
//     const speed = timeHoldingButton;

//     const availableTimeToMove = totalAvailableTime - timeHoldingButton;

//     const distanceCovered = availableTimeToMove * speed;

//     return distanceCovered;
//   };

const computeExtremaOfTimeHoldingButton = (
  totalAvailableTime: number,
  distanceToCover: number
) => {
  // necessarySpeed = distanceToCover / travelTime (A)
  //        Given travelTime = totalAvailableTime - necessarySpeed (B)
  // A <=> necessarySpeed = distanceToCover / (totalAvailableTime - necessarySpeed)
  // A <=> necessarySpeed * totalAvailableTime - necessarySpeed^2 = distanceToCover
  // A <=> - necessarySpeed^2 + necessarySpeed * totalAvailableTime  - distanceToCover = 0
  // solving for necessarySpeed :

  const a = -1;

  const b = totalAvailableTime;

  const c = -distanceToCover;

  const delta = Math.pow(b, 2) - 4 * a * c;

  const firstRoot = (-b + Math.pow(delta, 1 / 2)) / (2 * a);

  const secondRoot = (-b - Math.pow(delta, 1 / 2)) / (2 * a);

  return [Math.ceil(firstRoot), Math.floor(secondRoot)];
};

const [minimalHoldingTime, maximalHoldingTime] =
  computeExtremaOfTimeHoldingButton(availableTime, 553101014031074);

const minimalHoldingTimeDistance =
  computeDistance(availableTime)(minimalHoldingTime);
const malusIfLessThanMinimalHoldingTimeDistance =
  computeDistance(availableTime)(minimalHoldingTime - 1) - distanceRecord;
const maximalHoldingTimeDistance =
  computeDistance(availableTime)(maximalHoldingTime);
const malusIfMoreThanMaximalHoldingTime =
  computeDistance(availableTime)(maximalHoldingTime + 1) - distanceRecord;

const differentWaysOfBeatingRecord =
  maximalHoldingTime - minimalHoldingTime + 1;

console.log({
  minimalHoldingTimeDistance,
  minimalHoldingTime,
  maximalHoldingTime,
  maximalHoldingTimeDistance,
  distanceRecord,
  recordBy: maximalHoldingTimeDistance - distanceRecord,
  differentWaysOfBeatingRecord,
  moreThanMaximalHoldingTimeDistance: malusIfMoreThanMaximalHoldingTime,
  lessThanminimalHoldingTimeDistance: malusIfLessThanMinimalHoldingTimeDistance,
});
