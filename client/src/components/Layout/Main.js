export default function Main({ children }) {
	return (
		<>
			<main className="relative z-0 flex-1 px-4 overflow-y-auto bg-[#181818] lg:p-8 lg:pt-4 lg:pl-4">
				{children}
			</main>
		</>
	)
}
