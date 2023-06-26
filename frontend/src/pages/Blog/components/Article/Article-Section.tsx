type Props = { title: string; description: string }

const ArticleSection: React.FC<React.PropsWithChildren<Props>> = ({ title, description, children }) => {
	return (
		<div className='article-section'>
			<h2 className='article-section__title'>{title}</h2>
			<p className='paragraph article-section__text'>{description}</p>
			{children}
		</div>
	)
}

export default ArticleSection
