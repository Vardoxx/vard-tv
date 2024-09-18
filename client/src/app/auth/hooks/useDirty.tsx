import { useState } from 'react'

type UseDirtyResult = [boolean, () => void]

export const useDirty = (isValid: boolean): UseDirtyResult => {
	const [dirty, setDirty] = useState(false)

	const dirtyChecker = () => {
		if (!isValid) {
			setDirty(true)
			setTimeout(() => {
				setDirty(false)
			}, 300)
		} else setDirty(false)
	}

	return [dirty, dirtyChecker]
}
