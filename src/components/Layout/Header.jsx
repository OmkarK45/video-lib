import { Button } from 'components/ui/Button/Button'
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
			<div className="relative z-10 flex flex-shrink-0 h-16 ">
				<div className="sticky top-0 z-10 w-full h-16 pr-3 bg-gray-800 lg:pr-0">
					<div className="flex items-center justify-between flex-shrink-0 h-full mx-auto border-white max-w-7xl">
						<button
							className="px-4 text-gray-400 focus:outline-none focus:bg-gray-700 focus:text-gray-600 lg:hidden"
							aria-label="Open sidebar"
							onClick={() => setMobileOpen(true)}
						>
							<HiOutlineMenuAlt1 className="w-6 h-6 transition duration-150 ease-in-out" />
						</button>

						<Searchbar />
						<div className="flex-1 hidden pr-5 md:block">
							<div className="flex items-center justify-end space-x-4">
								<button className="text-white">Login</button>
								<Button size="md" variant="dark">
									Sign up
								</Button>
							</div>
						</div>
					</div>
				</div>
				<MobileMenu setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
			</div>
		</>
	)
}
