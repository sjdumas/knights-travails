import knightMoves from "./knight.js";

const knightTestCases = [
	[
		[0, 0],
		[7, 7],
	],
	[
		[3, 3],
		[4, 5],
	],
	[
		[-1, 0],
		[7, 7],
	],
];

knightTestCases.forEach(([start, end]) => {
	console.log(`\nTesting path from [${start}] to [${end}]:`);
	const path = knightMoves(start, end);

	if (typeof path === "string") {
		console.log(path);
	} else if (path) {
		console.log(
			`You made it in ${path.length - 1} moves! Here's your path:`
		);
		path.forEach((pos) => console.log(`[${pos[0]}, ${pos[1]}]`));
	} else {
		console.log("No valid path found!");
	}
});
