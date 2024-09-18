import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Category',
	...NO_INDEX_PAGE,
}

export default function CategoryPage() {
	return <div>Category</div>
}
