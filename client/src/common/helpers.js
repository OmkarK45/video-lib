export function getFormattedViews(viewCount) {
	return Math.abs(Number(viewCount)) >= 1.0e9
		? Math.floor(Math.abs(Number(viewCount)) / 1.0e9) + 'B'
		: Math.abs(Number(viewCount)) >= 1.0e6
		? Math.floor(Math.abs(Number(viewCount)) / 1.0e6) + 'M'
		: Math.abs(Number(viewCount)) >= 1.0e3
		? Math.floor(Math.abs(Number(viewCount)) / 1.0e3) + 'K'
		: Math.abs(Number(viewCount))
}
