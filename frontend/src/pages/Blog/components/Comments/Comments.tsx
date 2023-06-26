import { Link } from 'react-router-dom'
import './comments.css'
import { useAuth } from '../../../../context/AuthProvider'

const Comments: React.FC = () => {
	const { user } = useAuth()

	return (
		<div className='comments'>
			<span className='comments__title'>دیدگاهتان را بنویسید</span>
			{user && (
				<span className='comments__text'>
					<Link to='/'>با عنوان {user.name} راد وارد شده اید.</Link>
					<Link to='/'>خارج می شوید? </Link>
					بخش های مورد نیاز علامت گذاری شده اند *
				</span>
			)}
			<div className='comments_content'>
				<span className='comments__content-title'>دیدگاه *</span>
				<textarea className='comments__content-textarea' />
			</div>
			<button type='submit' className='comments__button'>
				فرستادن دیدگاه
			</button>
		</div>
	)
}

export default Comments
