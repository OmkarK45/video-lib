import clsx from 'clsx'
import { CgSpinner } from 'react-icons/cg'
const sizes = {
	3: 'h-3 w-3',
	4: 'h-4 w-4',
	5: 'h-5 w-5',
	6: 'h-6 w-6',
	7: 'h-7 w-7',
}
export default function Spinner({ size = '4', className }) {
	return <CgSpinner size={size} className={clsx('animate-spin ', sizes[size], className)} />
}
