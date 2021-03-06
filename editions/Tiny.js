define("editions/Tiny", () => {

	// 11x11 board
	const BOARD = [
		"D_____",
		"_d____",
		"__t___",
		"___T__",
		"____q_",
		"_____Q",
	];

	const BAG = [
		{ score: 0, count: 1 },
		{ letter: "A", score: 1, count: 1 },
		{ letter: "B", score: 1, count: 1 },
		{ letter: "C", score: 1, count: 1 },
		{ letter: "D", score: 1, count: 1 },
		{ letter: "E", score: 1, count: 1 },
		{ letter: "F", score: 1, count: 1 },
		{ letter: "G", score: 1, count: 1 },
		{ letter: "H", score: 1, count: 1 },
		{ letter: "I", score: 1, count: 1 },
		{ letter: "J", score: 1, count: 1 },
		{ letter: "K", score: 1, count: 1 },
		{ letter: "L", score: 1, count: 1 },
		{ letter: "M", score: 1, count: 1 },
		{ letter: "N", score: 1, count: 1 },
		{ letter: "O", score: 1, count: 1 },
		{ letter: "P", score: 1, count: 1 },
		{ letter: "Q", score: 1, count: 1 },
		{ letter: "R", score: 1, count: 1 },
		{ letter: "S", score: 1, count: 1 },
		{ letter: "T", score: 1, count: 1 },
		{ letter: "U", score: 1, count: 1 },
		{ letter: "V", score: 1, count: 1 },
		{ letter: "W", score: 1, count: 1 },
		{ letter: "X", score: 1, count: 1 },
		{ letter: "Y", score: 1, count: 1 },
		{ letter: "Z", score: 1, count: 1 }
	];

	return { layout: BOARD, bag: BAG };
});
