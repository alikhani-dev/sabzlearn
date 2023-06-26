import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Suggestion: React.FC = () => {
	return (
		<div className='suggestion-articles'>
			<div className='row'>
				<div className='col-6'>
					<div className='suggestion-articles__right suggestion-articles__content'>
						<Link to='/' className='suggestion-articles__icon-link'>
							<FontAwesomeIcon icon={faArrowRight} className='suggestion-articles__icon' />
						</Link>
						<Link to='/' className='suggestion-articles__link'>
							سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ | تجربه برنامه نویسان
						</Link>
					</div>
				</div>
				<div className='col-6'>
					<div className='suggestion-articles__left suggestion-articles__content'>
						<Link to='/' className='suggestion-articles__icon-link'>
							<FontAwesomeIcon icon={faArrowLeft} className='suggestion-articles__icon' />
						</Link>
						<Link to='/' className='suggestion-articles__link'>
							سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ | تجربه برنامه نویسان
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Suggestion
