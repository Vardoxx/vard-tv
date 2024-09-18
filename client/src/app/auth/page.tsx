import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Auth',
	...NO_INDEX_PAGE,
}

export default function AuthPage() {
	return <div>Auth</div>
}
