export function getFormattedViews(viewCount) {
	// Nine Zeroes for Billions
	return Math.abs(Number(viewCount)) >= 1.0e9
		? Math.floor(Math.abs(Number(viewCount)) / 1.0e9) + 'B'
		: // Six Zeroes for Millions
		Math.abs(Number(viewCount)) >= 1.0e6
		? Math.floor(Math.abs(Number(viewCount)) / 1.0e6) + 'M'
		: // Three Zeroes for Thousands
		Math.abs(Number(viewCount)) >= 1.0e3
		? Math.floor(Math.abs(Number(viewCount)) / 1.0e3) + 'K'
		: Math.abs(Number(viewCount))
}

function foo() {
	return 'bar'
}
