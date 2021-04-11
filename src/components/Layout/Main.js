export default function Main({ children }) {
	return (
		<>
			<main className="relative z-0 flex-1 px-4 overflow-y-auto bg-gray-900 lg:p-8">
				{children}
			</main>
		</>
	)
}
