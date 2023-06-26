import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './AboutUs-Item.css'

type Props = {
	icon: IconProp
	title: string
	description: string
}

const aboutUsItem: React.FC<Props> = ({ description, icon, title }) => {
	return (
		<div className='col-6'>
			<div className='about-us__box'>
				<div className='about-us__box-right'>
					<FontAwesomeIcon icon={icon} className='about-us__icon' />
				</div>
				<div className='about-us__box-left'>
					<span className='about-us__box-title'>{title}</span>
					<span className='about-us__box-text'>{description}</span>
				</div>
			</div>
		</div>
	)
}

export default aboutUsItem
