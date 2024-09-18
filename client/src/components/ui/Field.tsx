import { forwardRef } from 'react'

export type TField = 'email' | 'password' | 'text'

export interface IFieldProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	type: TField
	placeholder: string
	value: string
	dirty: boolean
}

const Field = forwardRef<HTMLInputElement, IFieldProps>(
	({ type, value, onChange, placeholder, dirty }, ref) => {
		return (
			<input
				ref={ref}
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={onChange}
				className={dirty ? 'invalid' : ''}
			/>
		)
	}
)

Field.displayName = 'Field'

export default Field
