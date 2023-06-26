import { Link } from 'react-router-dom'
import './Article-card.css'

type Props = {
	to: string
	name: string
	text: string
	image: string
}

const ArticleCard: React.FC<Props> = ({ name, text, to, image }) => {
	return (
		<div className='col-4'>
			<div className='article-card'>
				<div className='article-card__header'>
					<Link to={to} className='article-card__link-img'>
						<img src={image} className='article-card__img' alt='Article Cover' />
					</Link>
				</div>
				<div className='article-card__content'>
					<Link to={to} className='article-card__link'>
						{name}
					</Link>
					<p className='article-card__text'>{text}</p>
					<Link to='/' className='article-card__btn'>
						بیشتر بخوانید
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ArticleCard
