import GeneralLayout from '@/components/general-layout/GeneralLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'main',

	description: 'Best online cinema in the world',
}

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <GeneralLayout>{children}</GeneralLayout>
}
