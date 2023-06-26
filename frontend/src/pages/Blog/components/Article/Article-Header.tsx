import ArticleHeaderItem from './Article-Header-Item'
import { faClock, faEye, faFolder, faUser } from '@fortawesome/free-solid-svg-icons'

const ArticleHeader: React.FC = () => {
	return (
		<div className='article__header'>
			<ArticleHeaderItem text='جاوا اسکریپت' icon={faFolder} />
			<ArticleHeaderItem text=' ارسال شده توسط قدیر' icon={faUser} />
			<ArticleHeaderItem text=' ارسال شده توسط قدیر' icon={faClock} />
			<ArticleHeaderItem text='2.14k بازدید' icon={faEye} />
		</div>
	)
}

export default ArticleHeader
