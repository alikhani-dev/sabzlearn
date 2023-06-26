import { toFarsiNumber } from '../../../helper/number'
import useCounterAnimation from '../../../hooks/useCounterAnimation'

type Props = {
	count: number
	text: string
	icon: string
	alt: string
}

const LandingItem: React.FC<Props> = ({ count, text, icon, alt }) => {
	const counter = useCounterAnimation(count)

	return (
		<div className='landing-status__item'>
			<img src={icon} alt={alt} />
			<span className='landing-status__count'>{toFarsiNumber(counter)}</span>
			<span className='landing-status__text'>{text}</span>
		</div>
	)
}

export default LandingItem
