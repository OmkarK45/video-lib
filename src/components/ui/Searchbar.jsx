export default function Searchbar() {
	return (
		<form className="flex w-full md:ml-0">
			<div className="flex items-center w-full text-gray-400 lg:justify-center focus-within:text-gray-600">
				<input
					id="search"
					className="relative block w-full py-2 pl-4 pr-3 text-white placeholder-gray-500 bg-gray-700 rounded-md lg:w-3/4 max-w-7xl focus:outline-none focus:bg-gray-800 focus:ring-1 focus:ring-red-400 focus:placeholder-gray-400 sm:text-base"
					placeholder="Search"
					type="search"
				/>
			</div>
		</form>
	)
}
