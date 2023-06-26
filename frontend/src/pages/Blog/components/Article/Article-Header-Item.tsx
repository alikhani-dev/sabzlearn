import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = { text: string; icon: IconProp }

const ArticleHeaderItem: React.FC<Props> = ({ text, icon }) => {
	return (
		<div className='article-header__category article-header__item'>
			<FontAwesomeIcon icon={icon} className='article-header__icon' />
			<span className='article-header__text'> {text}</span>
		</div>
	)
}

export default ArticleHeaderItem
