import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'auth',
	description: 'Best online cinema in the world',
}

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='flex w-full h-screen items-center justify-center'>
			{children}
		</div>
	)
}
