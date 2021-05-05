export default function Searchbar() {
	return (
		<form className="flex flex-1 pl-1 mr-3 md:ml-0">
			<div className="flex items-center w-full text-gray-400 focus-within:text-gray-600">
				<input
					id="search"
					className="relative block w-full py-2 pl-4 text-white placeholder-gray-500 rounded-md bg-[#181818] focus:outline-none focus:bg-[#222222] focus:ring-1 focus:ring-red-400 focus:placeholder-gray-400 sm:text-base"
					placeholder="Search"
					type="search"
				/>
			</div>
		</form>
	)
}
