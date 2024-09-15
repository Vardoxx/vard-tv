import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Shop',
	...NO_INDEX_PAGE,
}

export default function ShopPage() {
	return <div>Shop</div>
}
