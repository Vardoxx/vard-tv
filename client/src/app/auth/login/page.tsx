import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'
import Login from './Login'

export const metadata: Metadata = {
	title: 'Login',
	...NO_INDEX_PAGE,
}

export default function LoginPage() {
	return <Login />
}
