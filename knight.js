const knightMoves = (startPosition, targetPosition) => {
	const isValidBoardPosition = (position) => {
		return (
			Array.isArray(position) &&
			position.length === 2 &&
			Number.isInteger(position[0]) &&
			Number.isInteger(position[1]) &&
			position[0] >= 0 &&
			position[0] < 8 &&
			position[1] >= 0 &&
			position[1] < 8
		);
	};

	if (
		!isValidBoardPosition(startPosition) ||
		!isValidBoardPosition(targetPosition)
	) {
		return "Invalid input: positions must be arrays of 2 integers between 0 and 7";
	}

	const possibleKnightMoves = [
		[2, 1],
		[1, 2], // Up-right moves
		[-1, 2],
		[-2, 1], // Up-left moves
		[-2, -1],
		[-1, -2], // Down-left moves
		[1, -2],
		[2, -1], // Down-right moves
	];

	const pathQueue = [[startPosition]];
	const visitedPositions = new Set();
	visitedPositions.add(startPosition.toString());

	// Breadth-First Search to find the shortest path
	while (pathQueue.length > 0) {
		const currentPath = pathQueue.shift();
		const [currentX, currentY] = currentPath[currentPath.length - 1];

		if (currentX === targetPosition[0] && currentY === targetPosition[1]) {
			return currentPath;
		}

		for (const [moveX, moveY] of possibleKnightMoves) {
			const nextX = currentX + moveX;
			const nextY = currentY + moveY;
			const nextPosition = `${nextX},${nextY}`;

			const isValidMove =
				nextX >= 0 &&
				nextX < 8 &&
				nextY >= 0 &&
				nextY < 8 &&
				!visitedPositions.has(nextPosition);

			if (isValidMove) {
				visitedPositions.add(nextPosition);
				pathQueue.push([...currentPath, [nextX, nextY]]);
			}
		}
	}
	return null;
};

export default knightMoves;
