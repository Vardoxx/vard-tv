type Button = 'submit'

interface IButtonProps {
	label: string
	type: Button
	onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | boolean
	disabled?: boolean
}

const Button = ({ label, disabled, onClick, type }: IButtonProps) => {
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
		if (typeof onClick === 'function') {
			onClick(event)
		}
	}

	return (
		<button
			className={
				disabled === true
					? `bg-pink-300 text-white font-semibold py-2 px-4 rounded`
					: `bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105`
			}
			onClick={handleClick}
			disabled={disabled}
			type={type}
		>
			{label}
		</button>
	)
}

export default Button
