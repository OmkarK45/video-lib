export default function VideoCardSkeleton() {
	return (
		<div>
			<div className="max-w-2xl mx-auto animate-pulse">
				<div className="overflow-hidden rounded">
					<div className="relative h-40 overflow-hidden bg-gray-700"></div>
					<div className="py-4 ">
						<div className="flex">
							<div className="flex-shrink-0 mr-4">
								<div className="inline-block w-10 h-10 bg-gray-600 rounded-full "></div>
							</div>
							<div className="flex-1">
								<div className="h-3 bg-gray-600 "></div>

								<div className="flex w-full sm:flex-col">
									<div className="w-1/2 h-3 mt-1 bg-gray-600"></div>
									<div className="w-3/4 h-3 mt-1 bg-gray-600"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
