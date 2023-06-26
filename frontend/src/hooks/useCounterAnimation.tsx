import { useState, useEffect } from 'react'

const useCounterAnimation = (endValue: number, duration = 1000) => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		let start: number

		const animate = (timestamp: number) => {
			if (!start) start = timestamp
			const progress = timestamp - start
			const increment = Math.ceil((endValue * progress) / duration)
			if (increment >= endValue) {
				setCount(endValue)
			} else {
				setCount(increment)
				requestAnimationFrame(animate)
			}
		}
        
		requestAnimationFrame(animate)
	}, [endValue, duration])

	return count
}

export default useCounterAnimation
