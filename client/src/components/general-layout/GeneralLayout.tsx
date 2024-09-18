'use client'

import { PAGES_URL } from '@/config/pages-url.config'
import { useProfile } from '@/hooks/useProfile'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'
import { generalLayoutItems } from './generalLayout.items'

const GeneralLayout = ({ children }: PropsWithChildren) => {
	const currentPath = usePathname()

	const { data } = useProfile()
	const userEmail = data?.user.email

	return (
		<div className='w-full min-h-32'>
			<nav className='general-layout__nav flex min-h-full'>
				<div className='flex gap-4'>
					{generalLayoutItems.map(e => (
						<Link
							className={`transition-all ${currentPath.startsWith(e.key) ? 'opacity-100 border-b-2' : 'opacity-60'}`}
							key={e.key}
							href={e.key}
						>
							{e.label}
						</Link>
					))}
				</div>
				<div className='font-normal text-base'>
					<Link
						className={`transition-all ${currentPath.startsWith(PAGES_URL.PROFILE) ? 'opacity-100 border-b-2' : 'opacity-60'}`}
						href={PAGES_URL.PROFILE}
					>
						{data ? userEmail : 'Войти'}
					</Link>
				</div>
			</nav>
			<div className='wrapper'>{children}</div>
		</div>
	)
}

export default GeneralLayout
