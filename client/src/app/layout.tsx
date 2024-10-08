import { Noto_Sans } from 'next/font/google'
import { Toaster } from 'sonner'

import './globals.scss'
import { Providers } from './providers'

const zen = Noto_Sans({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-zen',
	style: ['normal'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${zen.className}`}>
				<Providers>
					{children}
					<Toaster theme='dark' position='bottom-right' duration={3000} />
				</Providers>
			</body>
		</html>
	)
}
