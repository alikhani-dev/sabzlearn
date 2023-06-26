import { Link } from 'react-router-dom'

type Props = { to: string; title: string }

const LastArticlesItem: React.FC<Props> = ({ title, to }) => {
	return (
		<li className='last-articles__item'>
			<Link to={to} className='last-articles__link'>
				{title}
			</Link>
		</li>
	)
}

export default LastArticlesItem
