export default function SectionHeader({ title, description, children }) {
	return (
		<div className="px-2 pt-4 pb-5 bg-gray-900 border-b border-gray-600 md:mt-3 md:pt-0 sm:flex sm:items-center sm:justify-between">
			<div>
				<h3 className="text-lg font-medium leading-6 text-white">{title}</h3>
				<p className="max-w-4xl mt-2 text-sm text-gray-500">{description}</p>
			</div>
			<div className="mt-3 sm:mt-0 sm:ml-4">{children}</div>
		</div>
	)
}
