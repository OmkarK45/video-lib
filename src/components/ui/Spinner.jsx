import clsx from 'clsx'
import { CgSpinner } from 'react-icons/cg'
const sizes = {
	3: 'h-3 w-3',
	4: 'h-4 w-4',
}
export default function Spinner({ size = '4' }) {
	return <CgSpinner size={size} className={clsx('animate-spin ', sizes[size])} />
}
