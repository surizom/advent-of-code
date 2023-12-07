// const seedRanges = [
//   [1482445116, 339187393],
//   [3210489476, 511905836],
//   [42566461, 51849137],
//   [256584102, 379575844],
//   [3040181568, 139966026],
//   [4018529087, 116808249],
//   [2887351536, 89515778],
//   [669731009, 806888490],
//   [2369242654, 489923931],
//   [2086168596, 82891253],
// ];

// //console.log(seedRanges.map((a) => a.join(" ")).join(" ") === seeds.join(" "));

// const mapRangeToRange =
//   (mapInput: string) =>
//   ([inputRangeStart, inputRangeEndIncluding]: [number, number]): [
//     number,
//     number
//   ][] => {
//     const lines = mapInput.split("\n");

//     const ranges = sift(
//       lines.map((line) => {
//         const [
//           destinationRangeStart,
//           sourceRangeStart,
//           transformationRangeLength,
//         ] = line.split(" ").map((n) => parseInt(n));

//         const isIntersecting =
//           sourceRangeStart <= inputRangeEndIncluding &&
//           sourceRangeStart + transformationRangeLength > inputRangeStart;

//         if (!isIntersecting) {
//           return null;
//         }

//         const firstIntersect = max([inputRangeStart, sourceRangeStart]);

//         const secondIntersect = min([
//           inputRangeEndIncluding,
//           sourceRangeStart + transformationRangeLength,
//         ]);

//         const intersectionRangeImage = [
//           firstIntersect - sourceRangeStart + destinationRangeStart,
//           secondIntersect - sourceRangeStart + destinationRangeStart,
//         ];

//         const firstRemainingRange =
//           inputRangeStart !== firstIntersect
//             ? [inputRangeStart, firstIntersect]
//             : null;

//         const secondRemainingRange =
//           inputRangeEndIncluding !== secondIntersect
//             ? [secondIntersect, inputRangeEndIncluding]
//             : null;

//         const imageRangeStart = min(
//           [
//             firstRemainingRange?.[0],
//             secondRemainingRange?.[0],
//             intersectionRangeImage[0],
//           ].filter((v) => v !== undefined)
//         );

//         const imageRangeEnd = max(
//           [
//             firstRemainingRange?.[0],
//             secondRemainingRange?.[0],
//             intersectionRangeImage[0],
//           ].filter((v) => v !== undefined)
//         );

//         return [imageRangeStart, imageRangeEnd] as const;
//       })
//     );

//     if (ranges.length === 0) {
//       return [[inputRangeStart, inputRangeEndIncluding]];
//     }

//     const nonMappedRanges = ranges.reduce(
//       (acc, value, index, array) => {
//         if (index === array.length - 1) {
//           if (value[1] < inputRangeEndIncluding) {
//             return [...acc, [value[1], inputRangeEndIncluding]];
//           }

//           return acc as [number, number][];
//         }

//         if (array[index][1] < array[index + 1][1]) {
//           return [...acc, [array[index][1], array[index + 1][1]]] as [
//             number,
//             number
//           ][];
//         }

//         return acc as [number, number][];
//       },
//       ranges[0][0] > inputRangeStart
//         ? ([[inputRangeStart, ranges[0][0]]] as [number, number][])
//         : ([] as [number, number][])
//     );

//     const finalRanges = [...ranges, ...nonMappedRanges];

//     console.log({
//       input: [inputRangeStart, inputRangeEndIncluding],
//       finalRanges,
//       mapInput,
//     });

//     return finalRanges as [number, number][];
//   };

// const seedRangeToRealRange = ([seedRangeStart, seedRangeLength]: [
//   number,
//   number
// ]) => [seedRangeStart, seedRangeStart + seedRangeLength - 1];
// // const locationRanges = seedRanges

// // .map(mapRangeToRange(seedToSoilMap))
// // .map(mapRangeToRange(soilToFertilizerMap))
// // .map(mapRangeToRange(fertilizerToWaterMap))
// // .map(mapRangeToRange(waterToLightMap))
// // .map(mapRangeToRange(lightToTemperatureMap))
// // .map(mapRangeToRange(temperatureToHumidityMap))
// // .map(mapRangeToRange(humidityToLocationMap));

// //console.log(locationRanges)

// const testSeedRanges = [
//   [79, 14],
//   [55, 13],
// ];

// const testSeedToSoilMap = `50 98 2
//   52 50 48`;

// const testSoilToFertilizerMap = `0 15 37
//   37 52 2
//   39 0 15`;

// const testFertilizerToWaterMap = `49 53 8
//   0 11 42
//   42 0 7
//   57 7 4`;

// const testWaterToLightMap = `88 18 7
//   18 25 70`;

// const testLightToTemperatureMap = `45 77 23
//   81 45 19
//   68 64 13`;

// const testTemperatureToHumidityMap = `0 69 1
//   1 0 69`;

// const testHumidityToLocationMap = `60 56 37
//   56 93 4`;

// const testLocationNumbers = testSeedRanges
//   .map(seedRangeToRealRange)
//   .flatMap(mapRangeToRange(testSeedToSoilMap))
//   .flatMap(mapRangeToRange(testSoilToFertilizerMap))
//   .flatMap(mapRangeToRange(testFertilizerToWaterMap))
//   .flatMap(mapRangeToRange(testWaterToLightMap))
//   .flatMap(mapRangeToRange(testLightToTemperatureMap))
//   .flatMap(mapRangeToRange(testTemperatureToHumidityMap))
//   .flatMap(mapRangeToRange(testHumidityToLocationMap));

// console.log(testLocationNumbers);

// console.log(
//   min(testLocationNumbers.filter(([a, b]) => a === b).map(([a]) => a))
// );
