import { PAGES_URL } from '@/config/pages-url.config'

interface IGeneralLayoutItems {
	key: string
	label: string
}

export const generalLayoutItems: IGeneralLayoutItems[] = [
	{ key: PAGES_URL.HOME, label: 'Главная' },
	{ key: PAGES_URL.CATEGORY, label: 'Категории' },
	{ key: PAGES_URL.STORE, label: 'Магазин' },
]
