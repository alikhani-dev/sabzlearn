import ArticleCard from './Article-card'
import articles from '../../../data/articles'
import './Articles.css'
import { SectionHeader } from '../../../components'

const Articles: React.FC = () => {
	return (
		<section className='articles'>
			<div className='container'>
				<SectionHeader
					title='جدیدترین مقاله ها'
					description='پیش به سوی ارتقای دانش'
					link={{ text: 'تمامی مقاله ها', to: '/' }}
				/>
				<div className='articles__content'>
					<div className='row'>
						{articles.map(article => (
							<ArticleCard key={article.id} {...article} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Articles
