import clsx from 'clsx'
import Spinner from '../Spinner'

const VARIANTS = {
	primary: {
		base:
			'border-transparent text-white focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500',
		active:
			'bg-red-600 hover:bg-red-500 focus:shadow-outline-red focus:border-red-700 active:bg-red-700',
		disabled: 'bg-yellow-400',
	},
	default: {
		base: 'border-gray-300',
		active:
			'bg-white text-gray-700 focus:border-gray-300 focus:shadow-outline hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
		disabled: 'bg-gray-100',
	},
	dark: {
		base: 'border border-transparent  bg-gray-600 text-white',
		active: 'hover:bg-gray-700',
	},
}
// these need to be changed
const SIZES = {
	sm: 'px-2.5 py-1.5 text-xs',
	md: 'px-3 py-2  text-base leading-4',
	lg: 'px-4 py-2 text-base  rounded-md',
}
const ICON_SIZES = {
	sm: '-ml-0.5 h-4 w-4',
	md: '-ml-1  h-5 w-5',
	lg: '-ml-1  h-5 w-5',
}
export function Button({
	className,
	variant = 'default',
	size = 'sm',
	fullWidth,
	isLoading,
	loadingText,
	icon,
	children,
	...props
}) {
	const variantStyles = VARIANTS[variant] || VARIANTS.default
	const sizeStyles = SIZES[size] || SIZES.sm
	const Icon = icon ? icon : null
	return (
		<button
			type="button"
			className={clsx(
				'relative inline-flex items-center justify-center font-medium transition duration-150 ease-in-out border rounded shadow-sm focus:outline-none',
				variantStyles.base,
				sizeStyles,
				props?.disabled && 'cursor-default',
				props?.disabled ? variantStyles.disabled : variantStyles.active,
				fullWidth && 'w-full text-center justify-center',
				isLoading && 'opacity-70 cursor-wait',
				className,
			)}
			{...props}
		>
			{icon && !isLoading && (
				<span className="items-center">
					<Icon className={ICON_SIZES[size]} />
				</span>
			)}

			{isLoading && <Spinner className="text-lg" />}

			{isLoading
				? <p className={clsx(loadingText && 'ml-2')}>{loadingText}</p> || (
						<span className="ml-2 opacity-0">{children}</span>
				  )
				: children}
		</button>
	)
}
