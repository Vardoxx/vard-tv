import { PropsWithChildren, ReactNode } from 'react'

interface IFormProps {
	children: PropsWithChildren<ReactNode>
	title: string
	onSubmit: () => SubmitEvent
}

const Form = ({ children, onSubmit, title }: IFormProps) => {
	return (
		<form onSubmit={onSubmit}>
			<label className='flex w-full items-center justify-center text-4xl'>
				{title}
			</label>
			{children}
		</form>
	)
}

export default Form
