import Searchbar from 'components/ui/Searchbar'
import { useEffect, useState } from 'react'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { MobileMenu } from './MobileMenu'

export function Header() {
	const [mobileOpen, setMobileOpen] = useState(false)

	useEffect(() => {
		function handleEscape(event) {
			if (!mobileOpen) return

			if (event.key === 'Escape') {
				setMobileOpen(false)
			}
		}

		document.addEventListener('keyup', handleEscape)
		return () => document.removeEventListener('keyup', handleEscape)
	}, [mobileOpen])

	return (
		<>
			<div className="relative z-10 flex flex-shrink-0 h-16 bg-gray-800 border-b border-gray-700">
				<div className="sticky top-0 z-10 flex flex-shrink-0 w-full h-16 bg-gray-800">
					<button
						className="px-4 text-gray-400 focus:outline-none focus:bg-gray-700 focus:text-gray-600 lg:hidden"
						aria-label="Open sidebar"
						onClick={() => setMobileOpen(true)}
					>
						<HiOutlineMenuAlt1 className="w-6 h-6 transition duration-150 ease-in-out" />
					</button>
					{/* Search bar */}
					<Searchbar />
				</div>
				<MobileMenu setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
			</div>
		</>
	)
}
