import { Footer, Header } from '../../layout'
import { Breadcrumb } from '../../components'
import { Article, Comments, Suggestion } from './components'
import CoursesInfo from './components/CoursesInfo'
import './blog.css'

const Blog: React.FC = () => {
	return (
		<>
			<Header />
			<Breadcrumb />
			<main className='main'>
				<div className='container'>
					<div className='row'>
						<div className='col-8'>
							<Article />
							<Suggestion />
							<Comments />
						</div>
						<div className='col-4'>
							<CoursesInfo />
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Blog
