import { Button } from 'components/ui/Button/Button'
import { HiStar } from 'react-icons/hi'
export default function App() {
	return (
		<div className="flex items-center mt-3 space-x-2">
			<Button variant="primary" size="sm" icon={<HiStar className="w-4 h-4" />}>
				Subscribe
			</Button>
			<Button variant="primary" size="md" isLoading loadingText="Signin in">
				Button Text
			</Button>
			<Button variant="default" size="lg">
				Button Text
			</Button>
		</div>
	)
}
