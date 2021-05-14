export default function Empty({ label }) {
	return (
		<div className="container h-auto col-span-full ">
			<div className="mx-auto">
				<img
					src="../../../assets/icons/logo_grayscale.svg"
					alt=""
					className="w-1/2 mx-auto md:w-2/12"
				/>
				<h1 className="text-lg text-center text-gray-500">
					You do not have any {label}s here.
				</h1>
			</div>
		</div>
	)
}
