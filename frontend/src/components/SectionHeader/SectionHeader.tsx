import { Link } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SectionHeader.css'

type Props = {
	title: string
	description?: string
	link?: { to: string; text: string }
}

const SectionHeader: React.FC<Props> = ({ description, link, title }) => {
	return (
		<div className='section-header'>
			<div className='section-header__right'>
				<span className='section-header__title title'>{title}</span>
				{description && <span className='section-header__text'>{description}</span>}
			</div>
			{link && (
				<div className='section-header__left'>
					<Link to={link.to} className='section-header__link'>
						{link.text}
						<FontAwesomeIcon icon={faArrowLeft} className='section-header__icon' />
					</Link>
				</div>
			)}
		</div>
	)
}

export default SectionHeader
