export function VideoGrid({ children }) {
	return (
		<div className="grid grid-cols-1 gap-8 pt-6 mx-auto md:pt-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
			{children}
			<div className="h-5 bg-red-300">TEST</div>
			<div className="h-5 bg-red-300">TEST</div>
			<div className="h-5 bg-red-300">TEST</div>
			<div className="h-5 bg-red-300">TEST</div>
			<div className="h-5 bg-red-300">TEST</div>
		</div>
	)
}
