'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { generalLayoutItems } from './generalLayout.items'

const GeneralLayout = ({ children }: any) => {
	const currentPath = usePathname()

	return (
		<div className='w-full min-h-32'>
			<nav className='general-layout__nav min-h-full'>
				{generalLayoutItems.map(e => (
					<Link
						className={`transition-all ${currentPath.startsWith(e.key) ? 'opacity-100 border-b-2' : 'opacity-60'}`}
						key={e.key}
						href={e.key}
					>
						{e.label}
					</Link>
				))}
			</nav>
			<div className='wrapper'>{children}</div>
		</div>
	)
}

export default GeneralLayout
