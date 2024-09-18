'use client'

import Button from '@/components/ui/Button'
import Field from '@/components/ui/Field'
import Form from '@/components/ui/Form'
import { PAGES_URL } from '@/config/pages-url.config'
import { emailRegEx } from '@/constants/regEx.constants'
import { authService } from '@/services/auth.service'
import { IAuthForm } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useDirty } from '../hooks/useDirty'

type Inputs = {
	email: string
	password: string
}

const Login: React.FC = () => {
	const {
		handleSubmit,
		control,
		resetField,
		reset,
		formState: { errors, isValid },
	} = useForm<Inputs>({
		mode: 'onSubmit',
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const [dirty, dirtyChecker] = useDirty(isValid)

	const { push } = useRouter()

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) => authService.main('login', data),
		onSuccess() {
			toast.success('Успешный вход!')
			reset()
			push(PAGES_URL.HOME)
		},
		onError() {
			toast.error('Не корректная почта или пароль!')
			resetField('password')
		},
	})

	return (
		<Form title='Вход' onSubmit={handleSubmit(onSubmit)}>
			<div className='flex flex-col justify-end mt-2 min-h-20'>
				{errors.email && (
					<span className='text-red-500'>{errors.email.message}</span>
				)}
				<Controller
					name='email'
					control={control}
					rules={{
						required: 'Поле обязательно',
						pattern: { value: emailRegEx, message: 'Почта не корректна' },
					}}
					render={({ field }) => (
						<Field
							{...field}
							placeholder='Введите почту'
							dirty={dirty}
							type='text'
						/>
					)}
				/>
			</div>
			<div className='flex flex-col justify-end mt-2 mb-4 min-h-20'>
				{errors.password && (
					<span className='text-red-500'>{errors.password.message}</span>
				)}
				<Controller
					name='password'
					control={control}
					rules={{
						required: 'Поле обязательно',
					}}
					render={({ field }) => (
						<Field
							{...field}
							placeholder='Введите пароль'
							dirty={dirty}
							type='password'
						/>
					)}
				/>
			</div>
			<Button label='Войти' onClick={dirtyChecker} type='submit' />
			<div className='mt-4'>
				Нету аккаунта?{' '}
				<Link className='border-b' href={PAGES_URL.REGISTER}>
					Зарегистрироваться!
				</Link>
			</div>
		</Form>
	)
}

export default Login
